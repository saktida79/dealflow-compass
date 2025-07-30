import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Deals from "./pages/Deals";
import Clients from "./pages/Clients";
import Integration from "./pages/Integration";
import DueDiligence from "./pages/DueDiligence";
import Analytics from "./pages/Analytics";
import TaskManagement from "./pages/TaskManagement";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <div className="ml-0 md:ml-64 min-h-screen bg-gradient-to-br from-background via-background to-background/80 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/due-diligence" element={<DueDiligence />} />
            <Route path="/tasks" element={<TaskManagement />} />
            <Route path="/integration" element={<Integration />} />
            <Route path="/analytics" element={<Analytics />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
