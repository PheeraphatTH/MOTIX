import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import { CartProvider } from './context/CartContext';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { MobileMenu } from './components/layout/MobileMenu';
import { SlidebarTab } from './components/layout/SlidebarTab';
import { Footer } from './components/layout/Footer';
import { AppRoutes } from './routes/AppRoutes';
import { QuickViewModal } from './components/products/QuickViewModal';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import './locales/i18n';

function AppContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#0B0D12] text-slate-100 flex flex-col selection:bg-[#E63946] selection:text-white font-['Prompt',sans-serif]">
        {/* 1. Global Announcement Top Bar */}
        <AnnouncementBar />

        {/* 2. Main Sticky Navigation */}
        <Navbar onOpenMobileMenu={() => setMobileMenuOpen(true)} />

        {/* 3. Mobile / Desktop Navigation Drawer */}
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />

        {/* 3.1 Persistent Floating Slidebar Tab */}
        <SlidebarTab
          isOpen={mobileMenuOpen}
          onOpen={() => setMobileMenuOpen(true)}
        />

        {/* 4. Dynamic Page Content Routes */}
        <main className="flex-1">
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
        </main>

        {/* 5. Footer */}
        <Footer />

        {/* 6. Quick View Modal */}
        <QuickViewModal />
      </div>
    </ErrorBoundary>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </HashRouter>
    </ThemeProvider>
  );
}
