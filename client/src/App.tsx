import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import Portfolio from "@/pages/Portfolio";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceDetails from "@/pages/ServiceDetails"; // Import the new component

function Router() {
  return (
    <div className="flex flex-col min-h-screen bg-[#121212] text-[#F1F5F9]">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/services/:id" component={ServiceDetails} />
          <Route path="/careers" component={Careers} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;