import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a73e8',
      light: '#f0f7ff',
    },
    success: {
      main: '#2e7d32',
      light: '#e8f5e9',
    },
    background: {
      default: '#f5f7fa',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", system-ui, sans-serif',
    h3: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#fff',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
          '&.Mui-selected': {
            animation: 'fadeIn 0.3s ease',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});

export { theme };