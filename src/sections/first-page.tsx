import theme from '../style/theme';
import { Button, Link, Stack, Typography, styled } from '@mui/material';
import '../css/universal.css';
import { MenuRounded } from '@mui/icons-material';

const FirstPageSection = () => {
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

  function CustomButton({ children, ...props }: any) {
    return (
      <StyledCustomButton
        sx={{ padding: { xs: '0px 12px', sm: '2px 12px' } }}
        color='secondary'
        variant='outlined'
        {...props}>
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
  const videoUrl =
    'https://uploads-ssl.webflow.com/64741558faab9fcd0e562523/64801f78d0c2c3e246611deb_final final header-transcode.mp4';

  return (
    <Stack sx={{ backgroundColor: theme.palette.grey[900] }}>
      <div style={{ position: 'relative' }}>
        <video
          style={{
            position: 'absolute',
            objectFit: 'cover',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
          }}
          autoPlay
          loop
          muted
          id='video'>
          <source src={videoUrl}></source>
        </video>
        <Stack
          p={2}
          direction='column'
          sx={{
            backgroundColor: theme.palette.grey[900],
          }}
          height='100vh'>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'>
            <Stack>
              <Link
                underline='none'
                color='secondary'
                className='link'
                sx={{ fontFamily: 'Romanesco', fontSize: 28 }}>
                {'BoostHub'.toUpperCase()}
              </Link>
            </Stack>

            <Stack display={{ xs: 'none', sm: 'flex' }} direction='row' gap={2}>
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
            <Stack
              style={{ zIndex: 0 }}
              direction='row'
              gap={2}
              alignItems='center'>
              <CustomButton size='small'>
                <span>Contact</span>
              </CustomButton>
              <Stack display={{ sm: 'none' }}>
                <MenuRounded />
              </Stack>
            </Stack>
          </Stack>

          <Stack
            style={{ zIndex: 0 }}
            gap={2}
            flex={1}
            alignItems='center'
            justifyContent='center'>
            <Typography variant='h2' textAlign='center'>
              Skyrocket Solar Sales: Reach New Heights of Success
            </Typography>
            <Typography variant='subtitle1' textAlign='center'>
              "We book qualified appointments on autopilot using A.I."
            </Typography>
            <ContainedButton>Schedule a free strategy call</ContainedButton>
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
};

export default FirstPageSection;
