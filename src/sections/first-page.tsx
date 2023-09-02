import theme from '../style/theme';
import { Button, Link, Stack, Typography, styled } from '@mui/material';
import '../css/universal.css';

const FirstPageSection = () => {
  const StyledCustomButton = styled(Button)`
    position: relative;
    overflow: hidden;
    span {
      position: relative;
      z-index: 2; /* Set a higher z-index for the text to keep it above the sliding background */
    }
    border-radius: 50px;
    padding: 2px 12px;

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

  function CustomButton({ children, ...props }: any) {
    return (
      <StyledCustomButton color='secondary' variant='outlined' {...props}>
        {children}
      </StyledCustomButton>
    );
  }

  function ContainedButton({ children, ...props }: any) {
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
  }

  return (
    <Stack
      p={2}
      direction='column'
      sx={{ backgroundColor: theme.palette.grey[900] }}
      height='100vh'>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Stack>
          <Link
            underline='none'
            color='secondary'
            className='link'
            sx={{ fontFamily: 'Romanesco', fontSize: 28 }}>
            VICKYBULLS
          </Link>
        </Stack>
        <Stack direction='row' gap={2}>
          <Link underline='none' className='link' color='secondary'>
            Home
          </Link>
          <Link underline='none' className='link' color='secondary'>
            Service
          </Link>
          <Link underline='none' className='link' color='secondary'>
            Work
          </Link>
          <Link underline='none' className='link' color='secondary'>
            Result
          </Link>
        </Stack>
        <Stack>
          <CustomButton size='small'>
            <span>Contact</span>
          </CustomButton>
        </Stack>
      </Stack>
      <Stack gap={2} flex={1} alignItems='center' justifyContent='center'>
        <Typography variant='h1' textAlign='center'>
          Skyrocket Solar Sales: Reach New Heights of Success
        </Typography>
        <Typography variant='subtitle1' textAlign='center'>
          "We book qualified appointments on autopilot using A.I."
        </Typography>
        <ContainedButton>Schedule a free strategy call</ContainedButton>
      </Stack>
    </Stack>
  );
};

export default FirstPageSection;
