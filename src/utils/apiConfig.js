// Centralized API configuration that handles local/fullstack environments and GitHub Pages static hosting

export const isStaticHosting = () => {
  return typeof window !== 'undefined' && window.location.hostname.includes('github.io');
};

export const getApiBase = () => {
  // In VS Code or AI Studio full-stack container, use relative path to hit the Express server
  return '';
};

export const getApiUrl = (path) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return cleanPath;
};

/**
 * Returns the exact base URL of the store (including GitHub Pages repository subpath if present)
 * e.g. "https://username.github.io/motix-store" or "https://ais-pre-...run.app"
 */
export const getStoreBaseUrl = () => {
  if (typeof window === 'undefined') {
    return 'https://ais-pre-qw6ggnlhmejdfkkwsn2uhw-107258666727.asia-southeast1.run.app';
  }

  const origin = window.location.origin;
  // Strip trailing slashes, index.html, and hashes
  const pathname = window.location.pathname
    .replace(/\/index\.html$/i, '')
    .replace(/\/+$/, '');

  return `${origin}${pathname}`;
};

