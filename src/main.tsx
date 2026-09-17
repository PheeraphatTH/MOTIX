import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Handle direct non-hash URLs (e.g. from external links or browser address bar)
// Automatically redirect to HashRouter format so users never land on the wrong page
if (typeof window !== 'undefined' && !window.location.hash) {
  const path = window.location.pathname;
  const knownRoutes = [
    '/products',
    '/categories',
    '/promotions',
    '/cart',
    '/checkout',
    '/about',
    '/contact',
    '/faq',
    '/wishlist',
    '/login',
    '/register',
    '/recommendations',
  ];
  const matched = knownRoutes.find((r) => path.endsWith(r) || path.includes(r + '/'));
  if (matched) {
    const routeIndex = path.indexOf(matched);
    const basePath = path.substring(0, routeIndex).replace(/\/+$/, '');
    const targetRoute = path.substring(routeIndex);
    const search = window.location.search || '';
    window.location.replace(`${window.location.origin}${basePath}/#${targetRoute}${search}`);
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

