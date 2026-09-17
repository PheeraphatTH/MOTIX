// Centralized API configuration that handles local/fullstack environments and GitHub Pages static hosting

// Live Cloud Run backend with full Node.js Express + Gmail SMTP service
export const CLOUD_BACKEND_URL = 'https://ais-pre-qw6ggnlhmejdfkkwsn2uhw-107258666727.asia-southeast1.run.app';

export const isStaticHosting = () => {
  if (typeof window === 'undefined') return false;
  const host = window.location.hostname;
  return (
    host.includes('github.io') ||
    host.includes('github') ||
    (!host.includes('run.app') && host !== 'localhost' && host !== '127.0.0.1')
  );
};

export const getApiBase = () => {
  if (isStaticHosting()) {
    return CLOUD_BACKEND_URL;
  }
  return '';
};

export const getApiUrl = (path) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (isStaticHosting()) {
    return `${CLOUD_BACKEND_URL}${cleanPath}`;
  }
  return cleanPath;
};

/**
 * Returns the exact base URL of the store (including GitHub Pages repository subpath if present)
 * e.g. "https://username.github.io/motix-store" or "https://ais-pre-...run.app"
 */
export const getStoreBaseUrl = () => {
  if (typeof window === 'undefined') {
    return CLOUD_BACKEND_URL;
  }

  const origin = window.location.origin;
  // Strip trailing slashes, index.html, and hashes
  const pathname = window.location.pathname
    .replace(/\/index\.html$/i, '')
    .replace(/\/+$/, '');

  return `${origin}${pathname}`;
};


