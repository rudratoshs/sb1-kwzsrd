import { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import UnlockKnowledge from '@/components/UnlockKnowledge';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import AuthModal from '@/components/auth/AuthModal';
import AdminLayout from '@/components/admin/AdminLayout';
import Dashboard from '@/components/admin/Dashboard';
import AdminLogin from '@/components/admin/AdminLogin';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const openAuthModal = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <Router>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/*"
            element={
              <AdminLayout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  {/* Add more admin routes here */}
                </Routes>
              </AdminLayout>
            }
          />

          {/* Public Routes */}
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-background">
                <Navbar onSignIn={() => openAuthModal('signin')} onSignUp={() => openAuthModal('signup')} />
                <main>
                  <Hero onGetStarted={() => openAuthModal('signup')} />
                  <Features />
                  <HowItWorks />
                  <UnlockKnowledge />
                  <Pricing onGetStarted={() => openAuthModal('signup')} />
                  <Testimonials />
                </main>
                <Footer />
                <AuthModal 
                  isOpen={showAuthModal} 
                  onClose={() => setShowAuthModal(false)}
                  mode={authMode}
                  onToggleMode={(mode) => setAuthMode(mode)}
                />
                <Toaster />
              </div>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;