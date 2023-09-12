import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      galaxyFold: 0,
      mobile: 281,
      xs: 420,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const spacing = {
  layout: 40 / 8,
  components: 32 / 8,
};

const colorTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1B4175',
      light: '#2f72d0',
      dark: '#183968',
    },
    secondary: {
      main: '#fff',
      light: '#fff',
      dark: '#fff',
    },
    common: {
      black: '#111927',
      white: '#ffffff',
    },
    text: {
      primary: '#ffffff',
      secondary: '#0099ff',
      disabled: '#9FA4AC',
    },
    background: {
      // default: '#00000030',
      // paper: '#F6F8FB',
    },
    action: {
      // active: '#3333338A',
      // selected: '#6C737F14',
      // disabled: '#6366F142',
      // disabledBackground: '#6366F11F',
      // focus: '#6366F11F',
    },
    divider: '#0000001F',
    info: {
      main: '#06AED4',
      dark: '#0E7090',
      light: '#CFF9FE',
    },
    error: {
      main: '#F04438',
      dark: '#B42318',
      light: '#FEE4E2',
    },
    success: {
      main: '#15B79E',
      dark: '#15B79E',
      light: '#CCFBEF',
    },
    warning: {
      main: '#F79009',
      dark: '#B54708',
      light: '#FEF0C7',
    },
  },
});

const theme = createTheme(colorTheme, {
  typography: {
    menuTitle: {
      // color: '#37374D',
      fontSize: '1rem',
      fontWeight: 700,
      fontFamily: 'Maven Pro',
    },
    root: {},
    h1: {
      fontWeight: 700,
      fontSize: '16px', // Default font size
      [defaultTheme.breakpoints.up('galaxyFold')]: {
        fontSize: '35px',
      },
      [defaultTheme.breakpoints.up('mobile')]: {
        fontSize: '50px',
      },
      [defaultTheme.breakpoints.up('xs')]: {
        fontSize: '50px',
      },
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: '60px',
      },
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: '80px',
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '90px',
      },
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: '100px',
      },
      fontFamily: 'Maven Pro',
    },
    h2: {
      fontWeight: 600,
      fontSize: 58,
      [defaultTheme.breakpoints.up('galaxyFold')]: {
        fontSize: '32px',
      },
      [defaultTheme.breakpoints.up('mobile')]: {
        fontSize: '45px',
      },
      [defaultTheme.breakpoints.up('xs')]: {
        fontSize: '40px',
      },
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: '50px',
      },
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: '60px',
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '60px',
      },
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: '70px',
      },
      fontFamily: 'Maven Pro',
    },
    h3: {
      fontWeight: 600,
      [defaultTheme.breakpoints.up('galaxyFold')]: {
        fontSize: '20px',
      },
      [defaultTheme.breakpoints.up('mobile')]: {
        fontSize: '28px',
      },
      [defaultTheme.breakpoints.up('xs')]: {
        fontSize: '30px',
      },
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: '30px',
      },
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: '30px',
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '30px',
      },
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: '40px',
      },
      letterSpacing: '1px',
      fontFamily: 'Maven Pro',
    },
    h4: {
      fontWeight: 400,
      [defaultTheme.breakpoints.up('galaxyFold')]: {
        fontWeight: 500,
        fontSize: '12px',
      },
      [defaultTheme.breakpoints.up('mobile')]: {
        fontWeight: 500,
        fontSize: '16px',
      },
      [defaultTheme.breakpoints.up('xs')]: {
        fontWeight: 500,
        fontSize: '18px',
      },
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: '22px',
      },
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: '24px',
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '28px',
      },
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: '30px',
      },
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontFamily: 'Maven Pro',
    },
    h5: {
      fontWeight: 400,
      fontSize: 16,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontFamily: 'Maven Pro',
    },
    h6: {
      fontWeight: 400,
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    subtitle1: {
      fontWeight: 600,
      fontFamily: 'Maven Pro',
      fontSize: '16px', // Default font size
      [defaultTheme.breakpoints.up('galaxyFold')]: {
        fontSize: '14px',
      },
      [defaultTheme.breakpoints.up('mobile')]: {
        fontSize: '16px',
      },
      [defaultTheme.breakpoints.up('xs')]: {
        fontSize: '17px',
      },
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: '18px',
      },
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: '18px',
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '28px',
      },
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: '32px',
      },
      color: grey[400],
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,

      fontSize: '16px', // Default font size
      [defaultTheme.breakpoints.up('galaxyFold')]: {
        fontSize: '13px',
      },
      [defaultTheme.breakpoints.up('mobile')]: {
        fontSize: '16px',
      },
      [defaultTheme.breakpoints.up('xs')]: {
        fontSize: '16px',
      },
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: '16px',
      },
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: '17px',
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '18px',
      },
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: '20px',
      },
      fontFamily: 'Maven Pro',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '157%',
      letterSpacing: '0.1px',
    },
    body1: {
      fontWeight: 300,
      fontSize: 15,
      fontFamily: 'Maven Pro',
    },
    body2: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '143%',
      letterSpacing: '0.15px',
    },
    caption: {
      fontWeight: 500,
      fontFamily: 'Maven Pro',
      lineHeight: 1.3,
      letterSpacing: 0,
      [defaultTheme.breakpoints.up('galaxyFold')]: {
        fontWeight: 500,
        fontSize: 12,
      },
      [defaultTheme.breakpoints.up('mobile')]: {
        fontWeight: 500,
        fontSize: 14,
      },
      [defaultTheme.breakpoints.up('xs')]: {
        fontWeight: 500,
        fontSize: 14,
      },
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: 14,
      },
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: 14,
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: 18,
      },
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: 22,
      },
    },
    overline: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: '26%',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        InputLabelProps: { shrink: true },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          background: '#0000000A',
          borderRadius: 5,
          padding: 8,
          margin: 0,
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          backgroundColor: colorTheme.palette.secondary.light,
          padding: 4,
          transform: 'scale(1.6)',
          borderRadius: '50%',
          '&.Mui-active': {
            color: colorTheme.palette.primary.main,
            backgroundColor: colorTheme.palette.primary.light,
          },
          '&.Mui-completed': {
            color: colorTheme.palette.primary.main,
            backgroundColor: colorTheme.palette.primary.light,
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          '&.Mui-active': {
            color: colorTheme.palette.success.main,
            fontWeight: 700,
          },
          '&.Mui-completed': {
            color: colorTheme.palette.success.main,
            fontWeight: 700,
          },
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        root: {
          color: 'black',
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          gap: 8,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: '#FF0000',
          '&$error': {
            color: '#FF0000',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#FFFFFF',
          boxShadow:
            '0px 0px 0px 0.5px rgba(0, 0, 0, 0.03), 0px 5px 22px rgba(0, 0, 0, 0.04)',
          borderRadius: '20px',
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          borderTop: '1px solid #F2F4F7',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: '600',
          fontSize: '16px', // Default font size
          [defaultTheme.breakpoints.up('sm')]: {
            fontSize: '16px',
          },
          [defaultTheme.breakpoints.up('md')]: {
            fontSize: '18px',
          },
          [defaultTheme.breakpoints.up('lg')]: {
            fontSize: '18px',
          },
          [defaultTheme.breakpoints.up('xl')]: {
            fontSize: '20px',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#000000',
          maxWidth: '440px',
          fontSize: '0.9rem',
          '& .MuiTooltip-arrow': {
            color: '#000000',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          background: 'rgb(243, 244, 246, 0.2)',
          boxShadow: '0px 9px 46px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardError: {
          backgroundColor: 'rgb(253,237,237)',
        },
        standardSuccess: {
          backgroundColor: colorTheme.palette.success.light,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgb(47, 55, 70)',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          span: {
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '24px',
            whiteSpace: 'nowrap',
          },
        },
      },
    },
  },
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.themes = {
  defaultTheme,
  theme,
};
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true;
    galaxyFold: true;
  }

  interface TypographyVariants {
    menuTitle: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    menuTitle?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    menuTitle: true;
  }
}

export default theme;
