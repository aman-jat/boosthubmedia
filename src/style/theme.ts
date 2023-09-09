import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
// import { createBreakpoints } from '@mui/system'

// const breakpoints = createBreakpoints({})
const defaultTheme = createTheme();

export const spacing = {
  layout: 40 / 8,
  components: 32 / 8,
};

const colorTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0099ff',
      light: '#66c2ff',
      dark: '#007acc',
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
    },
    root: {},
    h1: {
      fontWeight: 700,
      fontSize: 70,
    },
    h2: {
      fontWeight: 700,
      fontSize: 58,
    },
    h3: {
      fontWeight: 600,
      fontSize: 24,
      letterSpacing: '1px',
    },
    h4: {
      fontWeight: 400,
      fontSize: 20,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    h5: {
      fontWeight: 400,
      fontSize: 16,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    h6: {
      fontWeight: 400,
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: 16,
      color: grey[500],
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
    },
    body2: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '143%',
      letterSpacing: '0.15px',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
    caption: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: '166%',
      letterSpacing: '0.4px',
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
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       '&, &:hover': {
    //         boxShadow: 'none',
    //       },
    //       padding: '2px 12px',
    //       width: 'max-content',
    //       borderRadius: 100,
    //       '&:disabled': {
    //         color: 'rgba(17, 25, 39, 0.38)',
    //       },
    //     },
    //     outlined: {
    //       border: '2px solid',
    //     },
    //     outlinedError: {
    //       border: '1px solid rgba(240, 68, 56, 0.5)',
    //       '&:hover': {
    //         textDecoration: 'none',
    //       },
    //     },
    //     containedError: {
    //       boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 5px',
    //       borderRadius: '12px',
    //       '&:hover': {
    //         backgroundColor: 'rgb(180, 35, 24)',
    //         boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 10px',
    //       },
    //     },
    //   },
    // },
    MuiTextField: {
      defaultProps: {
        // variant: 'filled',
        InputLabelProps: { shrink: true },
      },
      // styleOverrides: {
      //   root: {
      //     background: 'blue',
      //     '& input': {
      //       background: 'red',
      //     }
      //   }
      // }
      // root: {
      // }
    },
    // MuiTableBody: {
    //   styleOverrides: {
    //     root: {
    //       border: 'none'
    //     }
    //   }
    // },
    // MuiTableCell: {
    //   styleOverrides: {
    //     root: {fontWeight
    //       border: 'none',
    //       [breakpoints.down('sm')]: {
    //         display: 'block'
    //       }
    //     }
    //   }
    // },
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
      defaultProps: {},
      styleOverrides: {
        root: {
          fontWeight: '600',
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
