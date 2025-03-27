
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import { TooltipProvider } from "@/components/ui/tooltip";
import Admin from "./pages/Admin";
import { useEffect, useState } from "react";
import { hasValidSupabaseConfig } from "./lib/supabase";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const queryClient = new QueryClient();

const App = () => {
  const [showConfigWarning, setShowConfigWarning] = useState(false);
  
  useEffect(() => {
    // Check if Supabase is properly configured
    if (!hasValidSupabaseConfig()) {
      setShowConfigWarning(true);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          {showConfigWarning && (
            <Alert variant="destructive" className="m-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Configuration Required</AlertTitle>
              <AlertDescription>
                Please set your Supabase URL and API key in environment variables (VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY).
              </AlertDescription>
            </Alert>
          )}

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
