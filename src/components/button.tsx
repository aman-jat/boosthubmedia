import theme from '../style/theme';
import { Button, Stack, styled } from '@mui/material';

const StyledCustomButton = styled(Button)`
  position: relative;
  overflow: hidden;

  span {
    position: relative;
    z-index: 2; /* Set a higher z-index for the text to keep it above the sliding background */
  }
  border-radius: 50px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: ${props =>
      props.theme.palette.secondary.main}; // Adjust the color as needed
    transform: translateX(0);
    transition: transform 0.5s;
    zindex: -1;
  }

  &:hover::before {
    transform: translateX(100%);
  }

  &:hover {
    color: ${props =>
      props.theme.palette.primary.main}; // Change the color on hover
  }
`;

export const OutlinedButton = ({ children, ...props }: any) => {
  return (
    <StyledCustomButton
      sx={{ padding: { xs: '0px 12px', sm: '2px 12px' } }}
      color='secondary'
      variant='outlined'
      {...props}>
      {children}
    </StyledCustomButton>
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
          borderColor: theme.palette.primary.main,
          boxShadow: `#0E709050 0.1px 0.1px 20px 0px`,
        },
      }}>
      <Button
        sx={{
          borderRadius: '50px',
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
          },
        }}
        variant='contained'
        {...props}>
        {children}
      </Button>
    </Stack>
  );
};
