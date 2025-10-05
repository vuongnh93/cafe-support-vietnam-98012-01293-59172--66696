import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route } from "wouter";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import ForgotPassword from "./pages/ForgotPassword";
import Creator from "./pages/Creator";
import Creators from "./pages/Creators";
import Dashboard from "./pages/Dashboard";
import CreatorDashboard from "./pages/CreatorDashboard";
import CreatorSettings from "./pages/CreatorSettings";
import CreatorAnalytics from "./pages/CreatorAnalytics";
import CreatePost from "./pages/CreatePost";
import SupporterManagement from "./pages/SupporterManagement";
import PostDetail from "./pages/PostDetail";
import Posts from "./pages/Posts";
import PostEditor from "./pages/PostEditor";
import SupportPage from "./pages/SupportPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Route path="/" component={Index} />
        <Route path="/auth" component={Auth} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/creators" component={Creators} />
        <Route path="/creator/:creatorId" component={Creator} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/creator-dashboard" component={CreatorDashboard} />
        <Route path="/creator-settings" component={CreatorSettings} />
        <Route path="/creator-analytics" component={CreatorAnalytics} />
        <Route path="/create-post" component={CreatePost} />
        <Route path="/supporter-management" component={SupporterManagement} />
        <Route path="/post/:postSlug" component={PostDetail} />
        <Route path="/posts" component={Posts} />
        <Route path="/post-editor" component={PostEditor} />
        <Route path="/post-editor/:id" component={PostEditor} />
        <Route path="/support" component={SupportPage} />
        <Route path="/support/:username" component={SupportPage} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route component={NotFound} />
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
