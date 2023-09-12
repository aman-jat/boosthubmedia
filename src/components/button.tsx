import theme from '../style/theme';
import { Button, Stack } from '@mui/material';

export const OutlinedButton = ({ children, ...props }: any) => {
  return (
    <Button
      sx={{
        position: 'relative',
        borderRadius: 50,
        borderWidth: 2.5,
        borderColor: theme.palette.common.white,
        overflow: 'hidden',
        px: { xs: 2, md: 4 },
        span: {
          position: 'relative',
          zIndex: 1,
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: ' -100%',
          width: '100%',
          height: '100%',
          backgroundColor: theme.palette.secondary.main, // Adjust the color as needed
          transform: 'translateX(0)',
          transition: 'transform 0.5s',
          zindex: -1,
        },
        ' &:hover': {
          borderWidth: 2.5,
          color: theme.palette.primary.main,
        },
        '&:hover::before': {
          transform: 'translateX(100%)',
        },
      }}
      color='secondary'
      variant='outlined'
      {...props}>
      {children}
    </Button>
  );
};

export const ContainedButton = ({ children, ...props }: any) => {
  return (
    <Stack
      sx={{
        border: '4px solid white',
        borderRadius: 50,
        padding: '5px',
        borderColor: 'transparent',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          borderColor: theme.palette.primary.light,
          boxShadow: `#0E709050 0.1px 2px 20px 10px`,
        },
      }}>
      <Button
        sx={{
          borderRadius: '50px',
          py: 1,
          px: { xs: 2, md: 4 },
          backgroundColor: theme.palette.primary.light,
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
          },
        }}
        variant='contained'
        {...props}>
        {children}
      </Button>
    </Stack>
  );
};
