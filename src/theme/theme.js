import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E63946', // MOTIX signature racing red
      light: '#FF6B6B',
      dark: '#C1121F',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF5722', // Performance orange
      light: '#FF8A50',
      dark: '#E64A19',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#0B0D12',
      paper: '#131720',
    },
    text: {
      primary: '#F3F4F6',
      secondary: '#9CA3AF',
    },
    divider: '#262D3D',
    success: {
      main: '#10B981',
    },
    warning: {
      main: '#F59E0B',
    },
    info: {
      main: '#3B82F6',
    },
  },
  typography: {
    fontFamily: '"Prompt", "Plus Jakarta Sans", "Chakra Petch", sans-serif',
    h1: {
      fontFamily: '"Chakra Petch", "Prompt", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Chakra Petch", "Prompt", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Chakra Petch", "Prompt", sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Chakra Petch", "Prompt", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Prompt", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Prompt", sans-serif',
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
          fontWeight: 600,
          transition: 'all 0.2s ease-in-out',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #E63946 0%, #C1121F 100%)',
          boxShadow: '0 4px 14px rgba(230, 57, 70, 0.35)',
          '&:hover': {
            background: 'linear-gradient(135deg, #FF4D5E 0%, #D62839 100%)',
            boxShadow: '0 6px 20px rgba(230, 57, 70, 0.5)',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#131720',
          backgroundImage: 'none',
          border: '1px solid #262D3D',
          borderRadius: 12,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;
