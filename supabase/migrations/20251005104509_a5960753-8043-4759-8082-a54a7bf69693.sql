-- Create storage buckets
INSERT INTO storage.buckets (id, name, public) 
VALUES 
  ('avatars', 'avatars', true),
  ('covers', 'covers', true),
  ('products', 'products', false);

-- Storage policies for avatars
CREATE POLICY "Anyone can view avatars"
ON storage.objects FOR SELECT
USING (bucket_id = 'avatars');

CREATE POLICY "Users can upload their own avatar"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'avatars' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can update their own avatar"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'avatars' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can delete their own avatar"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'avatars' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- Storage policies for covers
CREATE POLICY "Anyone can view covers"
ON storage.objects FOR SELECT
USING (bucket_id = 'covers');

CREATE POLICY "Users can upload their own cover"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'covers' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can update their own cover"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'covers' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can delete their own cover"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'covers' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- Storage policies for products
CREATE POLICY "Authenticated users can view their product files"
ON storage.objects FOR SELECT
USING (
  bucket_id = 'products' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can upload their product files"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'products' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can update their product files"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'products' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can delete their product files"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'products' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  username TEXT UNIQUE,
  avatar_url TEXT,
  bio TEXT,
  phone TEXT,
  website_url TEXT,
  social_links JSONB DEFAULT '{}',
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles RLS policies
CREATE POLICY "Public profiles are viewable by everyone"
ON public.profiles FOR SELECT
USING (true);

CREATE POLICY "Users can update own profile"
ON public.profiles FOR UPDATE
USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
ON public.profiles FOR INSERT
WITH CHECK (auth.uid() = id);

-- Create creator_pages table
CREATE TABLE public.creator_pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  page_url TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  cover_image_url TEXT,
  coffee_price INTEGER NOT NULL DEFAULT 50000,
  min_coffee_price INTEGER DEFAULT 20000,
  max_coffee_price INTEGER DEFAULT 500000,
  goal_amount INTEGER,
  goal_description TEXT,
  goal_deadline TIMESTAMPTZ,
  thank_you_message TEXT DEFAULT 'Cảm ơn bạn đã ủng hộ!',
  custom_colors JSONB DEFAULT '{}',
  is_public BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  UNIQUE(user_id)
);

ALTER TABLE public.creator_pages ENABLE ROW LEVEL SECURITY;

-- Creator pages RLS policies
CREATE POLICY "Public pages are viewable by everyone"
ON public.creator_pages FOR SELECT
USING (is_public = true OR auth.uid() = user_id);

CREATE POLICY "Users can create own page"
ON public.creator_pages FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own page"
ON public.creator_pages FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own page"
ON public.creator_pages FOR DELETE
USING (auth.uid() = user_id);

-- Create donations table
CREATE TABLE public.donations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  supporter_email TEXT,
  supporter_name TEXT,
  amount_vnd INTEGER NOT NULL,
  coffee_count INTEGER NOT NULL DEFAULT 1,
  message TEXT,
  is_anonymous BOOLEAN DEFAULT false,
  payment_method TEXT CHECK (payment_method IN ('vietqr', 'momo', 'vnpay')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'expired')),
  provider_txn_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  paid_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ
);

ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

-- Donations RLS policies
CREATE POLICY "Anyone can view non-anonymous donations"
ON public.donations FOR SELECT
USING (is_anonymous = false OR auth.uid() = creator_id);

CREATE POLICY "Anyone can create donations"
ON public.donations FOR INSERT
WITH CHECK (true);

CREATE POLICY "Creators can view their donations"
ON public.donations FOR SELECT
USING (auth.uid() = creator_id);

-- Create membership_tiers table
CREATE TABLE public.membership_tiers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  price INTEGER NOT NULL,
  billing_period TEXT DEFAULT 'monthly' CHECK (billing_period IN ('monthly', 'yearly')),
  benefits JSONB DEFAULT '[]',
  max_members INTEGER,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE public.membership_tiers ENABLE ROW LEVEL SECURITY;

-- Membership tiers RLS policies
CREATE POLICY "Anyone can view active tiers"
ON public.membership_tiers FOR SELECT
USING (is_active = true OR auth.uid() = creator_id);

CREATE POLICY "Creators can manage their tiers"
ON public.membership_tiers FOR ALL
USING (auth.uid() = creator_id);

-- Create memberships table
CREATE TABLE public.memberships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  tier_id UUID REFERENCES public.membership_tiers(id) ON DELETE CASCADE NOT NULL,
  supporter_email TEXT NOT NULL,
  supporter_name TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'expired')),
  current_period_start TIMESTAMPTZ DEFAULT now() NOT NULL,
  current_period_end TIMESTAMPTZ NOT NULL,
  cancel_at_period_end BOOLEAN DEFAULT false,
  subscription_token TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE public.memberships ENABLE ROW LEVEL SECURITY;

-- Memberships RLS policies
CREATE POLICY "Creators can view their memberships"
ON public.memberships FOR SELECT
USING (auth.uid() = creator_id);

CREATE POLICY "Anyone can create memberships"
ON public.memberships FOR INSERT
WITH CHECK (true);

-- Create products table
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  price INTEGER NOT NULL,
  type TEXT CHECK (type IN ('digital', 'physical', 'service')),
  category TEXT,
  images JSONB DEFAULT '[]',
  files JSONB DEFAULT '[]',
  inventory_count INTEGER,
  is_active BOOLEAN DEFAULT true,
  requires_shipping BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Products RLS policies
CREATE POLICY "Anyone can view active products"
ON public.products FOR SELECT
USING (is_active = true OR auth.uid() = creator_id);

CREATE POLICY "Creators can manage their products"
ON public.products FOR ALL
USING (auth.uid() = creator_id);

-- Create orders table
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  buyer_email TEXT NOT NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  total_amount_vnd INTEGER NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'fulfilled', 'cancelled')),
  payment_id UUID REFERENCES public.donations(id),
  shipping_address JSONB,
  fulfilled_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Orders RLS policies
CREATE POLICY "Creators can view their orders"
ON public.orders FOR SELECT
USING (auth.uid() = creator_id);

CREATE POLICY "Anyone can create orders"
ON public.orders FOR INSERT
WITH CHECK (true);

CREATE POLICY "Creators can update their orders"
ON public.orders FOR UPDATE
USING (auth.uid() = creator_id);

-- Create posts table
CREATE TABLE public.posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  featured_image TEXT,
  post_type TEXT DEFAULT 'public' CHECK (post_type IN ('public', 'members_only', 'tier_specific')),
  tier_ids UUID[],
  is_published BOOLEAN DEFAULT false,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Posts RLS policies
CREATE POLICY "Anyone can view published public posts"
ON public.posts FOR SELECT
USING (is_published = true AND post_type = 'public');

CREATE POLICY "Creators can manage their posts"
ON public.posts FOR ALL
USING (auth.uid() = creator_id);

-- Create notifications table
CREATE TABLE public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  data JSONB DEFAULT '{}',
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  read_at TIMESTAMPTZ
);

ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Notifications RLS policies
CREATE POLICY "Users can view own notifications"
ON public.notifications FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can update own notifications"
ON public.notifications FOR UPDATE
USING (auth.uid() = user_id);

-- Create trigger function for updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add updated_at triggers
CREATE TRIGGER set_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON public.creator_pages
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON public.membership_tiers
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON public.memberships
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON public.orders
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON public.posts
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Create trigger function for auto-creating profile
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name, username, avatar_url)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'display_name',
    NEW.raw_user_meta_data->>'username',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create indexes for better performance
CREATE INDEX idx_creator_pages_user_id ON public.creator_pages(user_id);
CREATE INDEX idx_creator_pages_page_url ON public.creator_pages(page_url);
CREATE INDEX idx_donations_creator_id ON public.donations(creator_id);
CREATE INDEX idx_donations_status ON public.donations(status);
CREATE INDEX idx_membership_tiers_creator_id ON public.membership_tiers(creator_id);
CREATE INDEX idx_memberships_creator_id ON public.memberships(creator_id);
CREATE INDEX idx_memberships_tier_id ON public.memberships(tier_id);
CREATE INDEX idx_products_creator_id ON public.products(creator_id);
CREATE INDEX idx_orders_creator_id ON public.orders(creator_id);
CREATE INDEX idx_posts_creator_id ON public.posts(creator_id);
CREATE INDEX idx_notifications_user_id ON public.notifications(user_id);