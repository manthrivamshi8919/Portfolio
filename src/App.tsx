import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/hooks/use-theme";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <TooltipProvider>
        <Navbar />
        <Toaster />
        <Sonner />
        <MainPage />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
