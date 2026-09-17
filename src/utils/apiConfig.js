// Centralized API configuration that handles both local/fullstack environments and GitHub Pages static hosting

export const getApiBase = () => {
  if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
    // When running as a static site on GitHub Pages, point API calls to the live Cloud Run backend
    return 'https://ais-dev-qw6ggnlhmejdfkkwsn2uhw-107258666727.asia-southeast1.run.app';
  }
  // When running locally in VS Code or in AI Studio container, use relative path
  return '';
};

export const getApiUrl = (path) => {
  const base = getApiBase();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
};
