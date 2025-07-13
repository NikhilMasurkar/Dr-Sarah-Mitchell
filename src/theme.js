import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#CA0858", // Keep primary pink
      light: "#E91E63",
      dark: "#8E0038",
    },
    secondary: {
      main: "#2D3748", // Professional dark gray
      light: "#4A5568",
      dark: "#1A202C",
    },
    tertiary: {
      main: "#6C5CE7", // Purple accent
      light: "#A29BFE",
      dark: "#5F3DC4",
    },
    background: {
      default: "#FEFCFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2D3748",
      secondary: "#718096",
    },
    neutral: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
    grey: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
    success: {
      main: "#48BB78",
      light: "#68D391",
      dark: "#38A169",
    },
    warning: {
      main: "#ED8936",
      light: "#F6AD55",
      dark: "#DD6B20",
    },
    error: {
      main: "#F56565",
      light: "#FC8181",
      dark: "#E53E3E",
    },
    info: {
      main: "#4299E1",
      light: "#63B3ED",
      dark: "#3182CE",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      color: "#2D3748",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      color: "#2D3748",
    },
    h3: {
      fontSize: "1.875rem",
      fontWeight: 600,
      lineHeight: 1.3,
      color: "#2D3748",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
      color: "#2D3748",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.4,
      color: "#2D3748",
    },
    h6: {
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1.4,
      color: "#2D3748",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
      color: "#4A5568",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      color: "#718096",
    },
    subtitle1: {
      fontSize: "1.125rem",
      fontWeight: 500,
      lineHeight: 1.6,
      color: "#4A5568",
    },
    subtitle2: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.5,
      color: "#718096",
    },
  },
  shape: {
    borderRadius: 5,
  },
  shadows: [
    "none",
    "0px 1px 3px rgba(0, 0, 0, 0.05)",
    "0px 4px 6px rgba(0, 0, 0, 0.05)",
    "0px 10px 15px rgba(0, 0, 0, 0.05)",
    "0px 20px 25px rgba(0, 0, 0, 0.05)",
    "0px 25px 50px rgba(0, 0, 0, 0.1)",
    "0px 25px 50px rgba(202, 8, 88, 0.15)",
    "0px 25px 50px rgba(202, 8, 88, 0.2)",
    "0px 25px 50px rgba(202, 8, 88, 0.25)",
    "0px 25px 50px rgba(202, 8, 88, 0.3)",
    "0px 25px 50px rgba(202, 8, 88, 0.35)",
    "0px 25px 50px rgba(202, 8, 88, 0.4)",
    "0px 25px 50px rgba(202, 8, 88, 0.45)",
    "0px 25px 50px rgba(202, 8, 88, 0.5)",
    "0px 25px 50px rgba(202, 8, 88, 0.55)",
    "0px 25px 50px rgba(202, 8, 88, 0.6)",
    "0px 25px 50px rgba(202, 8, 88, 0.65)",
    "0px 25px 50px rgba(202, 8, 88, 0.7)",
    "0px 25px 50px rgba(202, 8, 88, 0.75)",
    "0px 25px 50px rgba(202, 8, 88, 0.8)",
    "0px 25px 50px rgba(202, 8, 88, 0.85)",
    "0px 25px 50px rgba(202, 8, 88, 0.9)",
    "0px 25px 50px rgba(202, 8, 88, 0.95)",
    "0px 25px 50px rgba(202, 8, 88, 1)",
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#FEFCFF",
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(202, 8, 88, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(108, 92, 231, 0.03) 0%, transparent 50%)
          `,
          minHeight: "100vh",
        },
        "*": {
          scrollBehavior: "smooth",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 50,
          padding: "14px 32px",
          fontWeight: 600,
          fontSize: "1rem",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "none",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 10px 25px rgba(202, 8, 88, 0.25)",
          },
          "&:active": {
            transform: "translateY(0)",
          },
        },
        contained: {
          background: "linear-gradient(135deg, #CA0858 0%, #E91E63 100%)",
          color: "white",
          "&:hover": {
            background: "linear-gradient(135deg, #AD1457 0%, #C2185B 100%)",
            boxShadow: "0 15px 35px rgba(202, 8, 88, 0.4)",
          },
        },
        outlined: {
          borderColor: "#CA0858",
          color: "#CA0858",
          borderWidth: 2,
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          "&:hover": {
            backgroundColor: "#CA0858",
            color: "white",
            borderWidth: 2,
            boxShadow: "0 10px 25px rgba(202, 8, 88, 0.3)",
          },
        },
        text: {
          color: "#CA0858",
          "&:hover": {
            backgroundColor: "rgba(202, 8, 88, 0.08)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 8px 32px rgba(202, 8, 88, 0.08)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 20px 60px rgba(202, 8, 88, 0.15)",
            background: "rgba(255, 255, 255, 0.95)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 20px rgba(202, 8, 88, 0.06)",
        },
        elevation1: {
          boxShadow: "0 2px 8px rgba(202, 8, 88, 0.08)",
        },
        elevation2: {
          boxShadow: "0 4px 16px rgba(202, 8, 88, 0.1)",
        },
        elevation3: {
          boxShadow: "0 8px 24px rgba(202, 8, 88, 0.12)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(202, 8, 88, 0.1)",
          boxShadow: "0 2px 20px rgba(202, 8, 88, 0.08)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          fontWeight: 500,
          transition: "all 0.3s ease",
          fontSize: "0.875rem",
        },
        filled: {
          background:
            "linear-gradient(135deg, rgba(202, 8, 88, 0.1) 0%, rgba(233, 30, 99, 0.1) 100%)",
          color: "#CA0858",
          border: "1px solid rgba(202, 8, 88, 0.2)",
        },
        outlined: {
          borderColor: "#CA0858",
          color: "#CA0858",
          borderWidth: 1.5,
          background: "rgba(255, 255, 255, 0.8)",
          "&:hover": {
            backgroundColor: "rgba(202, 8, 88, 0.1)",
            borderWidth: 1.5,
            transform: "scale(1.05)",
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: "5px !important",
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(202, 8, 88, 0.1)",
          boxShadow: "0 4px 20px rgba(202, 8, 88, 0.06)",
          "&:before": {
            display: "none",
          },
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 30px rgba(202, 8, 88, 0.12)",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          "&:hover": {
            backgroundColor: "rgba(202, 8, 88, 0.04)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 16,
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            "& fieldset": {
              borderColor: "rgba(202, 8, 88, 0.2)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(202, 8, 88, 0.4)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#CA0858",
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1rem",
            color: "#718096",
            transition: "all 0.3s ease",
            borderRadius: 12,
            margin: "0 4px",
            "&:hover": {
              color: "#CA0858",
              backgroundColor: "rgba(202, 8, 88, 0.08)",
              transform: "translateY(-2px)",
            },
            "&.Mui-selected": {
              color: "#CA0858",
              fontWeight: 700,
              background: "rgba(202, 8, 88, 0.1)",
            },
          },
          "& .MuiTabs-indicator": {
            height: 3,
            borderRadius: 2,
            background: "linear-gradient(90deg, #CA0858, #E91E63)",
          },
        },
      },
    },
  },
});
