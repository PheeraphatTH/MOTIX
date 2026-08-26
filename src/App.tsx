import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import { CartProvider } from './context/CartContext';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { MobileMenu } from './components/layout/MobileMenu';
import { Footer } from './components/layout/Footer';
import { AppRoutes } from './routes/AppRoutes';
import { QuickViewModal } from './components/products/QuickViewModal';
import './locales/i18n';

function AppContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0D12] text-slate-100 flex flex-col selection:bg-[#E63946] selection:text-white font-['Prompt',sans-serif]">
      {/* 1. Global Announcement Top Bar */}
      <AnnouncementBar />

      {/* 2. Main Sticky Navigation */}
      <Navbar onOpenMobileMenu={() => setMobileMenuOpen(true)} />

      {/* 3. Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* 4. Dynamic Page Content Routes */}
      <main className="flex-1">
        <AppRoutes />
      </main>

      {/* 5. Footer */}
      <Footer />

      {/* 6. Quick View Modal */}
      <QuickViewModal />
    </div>
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
