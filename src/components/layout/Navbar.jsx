import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
  Globe,
  SlidersHorizontal,
  ChevronDown,
  LogOut,
  Zap,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Navbar = ({ onOpenMobileMenu }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { cartTotalItems, wishlist, selectedVehicle, user, logoutUser } = useCart();

  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('motix_lang', lang);
    setShowLangMenu(false);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.categories'), path: '/categories' },
    { name: t('nav.promotions'), path: '/promotions', highlight: true },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
    { name: t('nav.faq'), path: '/faq' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled
        ? 'bg-[#0B0D12]/95 backdrop-blur-md border-b border-[#222838] shadow-2xl shadow-black/60'
        : 'bg-[#0D1017] border-b border-[#1E2433]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-6">
          
          {/* 1. Mobile Menu Button & Brand Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenMobileMenu}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#E63946] via-[#D62839] to-[#9A031E] flex items-center justify-center shadow-lg shadow-red-900/40 text-white font-extrabold text-xl tracking-tighter transform group-hover:scale-105 transition-transform duration-200 border border-red-400/30">
                <Zap className="w-5 h-5 fill-white text-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-heading text-2xl sm:text-3xl font-black tracking-wider text-white">
                    MOT<span className="text-[#E63946]">IX</span>
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 tracking-widest uppercase -mt-1 hidden sm:block">
                  KEEP YOUR RIDE MOVING
                </span>
              </div>
            </Link>
          </div>

          {/* 2. Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex-1 max-w-md hidden md:block relative"
          >
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('nav.searchPlaceholder')}
                className="w-full bg-[#141822] text-sm text-slate-100 placeholder-slate-400 pl-10 pr-24 py-2.5 rounded-xl border border-[#2B3448] focus:border-[#E63946] focus:ring-1 focus:ring-[#E63946] focus:outline-none transition-colors"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
              <button
                type="submit"
                className="absolute right-1.5 px-3 py-1 bg-gradient-to-r from-[#E63946] to-[#C1121F] text-white text-xs font-bold rounded-lg hover:brightness-110 transition-all cursor-pointer"
              >
                ค้นหา
              </button>
            </div>
          </form>

          {/* 3. Right Action Tools: Language, Wishlist, Cart, User */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search icon button for mobile */}
            <button
              onClick={() => navigate('/products')}
              className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-700/60 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#E63946]" />
                <span className="uppercase">{i18n.language || 'th'}</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-32 bg-[#171A21] border border-[#2A3245] rounded-xl shadow-2xl py-1 z-50">
                  <button
                    onClick={() => changeLanguage('th')}
                    className={`w-full text-left px-3 py-2 text-xs font-semibold flex items-center justify-between hover:bg-slate-800 ${
                      i18n.language === 'th' ? 'text-[#E63946]' : 'text-slate-300'
                    }`}
                  >
                    <span>🇹🇭 ภาษาไทย</span>
                    {i18n.language === 'th' && <span>✓</span>}
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`w-full text-left px-3 py-2 text-xs font-semibold flex items-center justify-between hover:bg-slate-800 ${
                      i18n.language === 'en' ? 'text-[#E63946]' : 'text-slate-300'
                    }`}
                  >
                    <span>🇺🇸 English</span>
                    {i18n.language === 'en' && <span>✓</span>}
                  </button>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 relative transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#FF5722] text-white text-[10px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart Button */}
            <Link
              to="/cart"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#181D28] hover:bg-[#202736] border border-[#2A3245] text-slate-100 hover:border-red-500/50 transition-all relative group"
              aria-label="Shopping Cart"
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-[#E63946] group-hover:scale-110 transition-transform" />
                {cartTotalItems > 0 && (
                  <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-[#E63946] text-white text-[10px] font-bold flex items-center justify-center shadow-md animate-pulse">
                    {cartTotalItems}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline-block text-xs font-bold text-slate-200">
                ตะกร้า
              </span>
            </Link>

            {/* User Account / Auth */}
            <div className="relative">
              {user ? (
                <div>
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-white"
                  >
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#E63946] to-[#FF5722] flex items-center justify-center font-bold text-white">
                      {user.name.charAt(0)}
                    </div>
                    <span className="hidden md:inline-block max-w-[100px] truncate">{user.name}</span>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-[#171A21] border border-[#2A3245] rounded-xl shadow-2xl py-2 z-50">
                      <div className="px-4 py-2 border-b border-slate-800">
                        <p className="text-xs font-bold text-white truncate">{user.name}</p>
                        <p className="text-[11px] text-slate-400 truncate">{user.email}</p>
                        <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-400">
                          {user.tier} ({user.points} แต้ม)
                        </span>
                      </div>
                      <Link
                        to="/cart"
                        onClick={() => setShowUserMenu(false)}
                        className="block px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-white"
                      >
                        ประวัติคำสั่งซื้อ
                      </Link>
                      <button
                        onClick={() => {
                          logoutUser();
                          setShowUserMenu(false);
                        }}
                        className="w-full text-left px-4 py-2 text-xs text-red-400 hover:bg-red-950/30 flex items-center gap-2"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>ออกจากระบบ</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-700/60 hover:text-white transition-colors"
                >
                  <User className="w-4 h-4 text-slate-400" />
                  <span className="hidden sm:inline-block">{t('nav.login')}</span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* 4. Desktop Navigation Category Links Bar */}
        <nav className="hidden lg:flex items-center justify-between py-2.5 border-t border-[#1C2230]">
          <div className="flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-all relative ${
                    isActive
                      ? 'text-white bg-[#1A202C] border border-[#2D3748]'
                      : link.highlight
                      ? 'text-[#FF6B6B] hover:bg-red-500/10 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.highlight && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E63946] mr-1.5 animate-ping"></span>
                  )}
                  {link.name}
                </NavLink>
              );
            })}
          </div>

          {/* Active Vehicle indicator */}
          <Link
            to="/products"
            className="flex items-center gap-2 px-3 py-1 rounded-lg bg-[#141822] border border-[#262D3D] hover:border-red-500/50 text-xs text-slate-300 transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#E63946]" />
            <span>
              {selectedVehicle.model ? (
                <span className="text-white font-bold">
                  {selectedVehicle.brand} {selectedVehicle.model} ({selectedVehicle.year || 'ทุกปี'})
                </span>
              ) : (
                <span className="text-slate-400">ค้นหาอะไหล่ตรงรุ่นรถของคุณ</span>
              )}
            </span>
          </Link>
        </nav>

      </div>
    </header>
  );
};
