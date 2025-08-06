import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import InstitutionDashboard from "./pages/InstitutionDashboard";
import EmployerDashboard from "./pages/EmployerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Contact from "./pages/Contact";
import PlaceholderPage from "./pages/PlaceholderPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/get-started" element={<LoginPage />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route
            path="/institution-dashboard"
            element={<InstitutionDashboard />}
          />
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          {/* Placeholder routes */}
          <Route
            path="/demo"
            element={
              <PlaceholderPage
                title="Demo"
                description="Interactive platform demonstration coming soon"
              />
            }
          />
          <Route
            path="/about"
            element={
              <PlaceholderPage
                title="About"
                description="Learn more about our platform and mission"
              />
            }
          />
          <Route
            path="/how-it-works"
            element={
              <PlaceholderPage
                title="How It Works"
                description="Detailed explanation of our verification process"
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/register"
            element={
              <PlaceholderPage
                title="Register Institution"
                description="Institution registration portal"
              />
            }
          />
          <Route
            path="/verify"
            element={
              <PlaceholderPage
                title="Verify Certificate"
                description="Quick certificate verification portal"
              />
            }
          />
          <Route
            path="/security"
            element={
              <PlaceholderPage
                title="Security"
                description="Information about our security measures"
              />
            }
          />
          <Route
            path="/pricing"
            element={
              <PlaceholderPage
                title="Pricing"
                description="Pricing plans for institutions and employers"
              />
            }
          />
          <Route
            path="/api"
            element={
              <PlaceholderPage
                title="API Documentation"
                description="Developer resources and API documentation"
              />
            }
          />
          <Route
            path="/help"
            element={
              <PlaceholderPage
                title="Help Center"
                description="Frequently asked questions and support"
              />
            }
          />
          <Route
            path="/status"
            element={
              <PlaceholderPage
                title="System Status"
                description="Real-time platform status and uptime"
              />
            }
          />
          <Route
            path="/docs"
            element={
              <PlaceholderPage
                title="Documentation"
                description="User guides and technical documentation"
              />
            }
          />
          <Route
            path="/privacy"
            element={
              <PlaceholderPage
                title="Privacy Policy"
                description="How we protect and handle your data"
              />
            }
          />
          <Route
            path="/terms"
            element={
              <PlaceholderPage
                title="Terms of Service"
                description="Terms and conditions for platform usage"
              />
            }
          />
          <Route
            path="/compliance"
            element={
              <PlaceholderPage
                title="Compliance"
                description="Regulatory compliance and certifications"
              />
            }
          />

          {/* Catch-all route must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
