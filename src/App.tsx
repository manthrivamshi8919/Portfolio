import { Toaster } from "@/components/ui/toaster";

import { Toaster as Sonner } from "@/components/ui/sonner";

import { TooltipProvider } from "@/components/ui/tooltip";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider } from "@/hooks/use-theme";

import Navbar from "./components/Navbar";

import MainPage from "./pages/MainPage";

import ChatBot from "./components/ChatBot";



const queryClient = new QueryClient();



const App = () => (

  <ThemeProvider defaultTheme="system" storageKey="vamshi-theme">

    <QueryClientProvider client={queryClient}>

      <TooltipProvider>

        <Navbar />

        <Toaster />

        <Sonner />

        <MainPage />

        <ChatBot />

      </TooltipProvider>

    </QueryClientProvider>

  </ThemeProvider>

);



export default App;

