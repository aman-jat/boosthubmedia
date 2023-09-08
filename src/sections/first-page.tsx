import theme from '../style/theme';
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import '../css/universal.css';
import { MenuRounded } from '@mui/icons-material';
import { useState } from 'react';
import video_url from '../assets/bg_video.mp4';

const FirstPageSection = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const navItems = [
    { title: 'Home' },
    { title: 'Service' },
    { title: 'Work' },
    { title: 'Result' },
  ];

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)', // Adjust the opacity (0.5 in this case) to control darkness
  };

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
          <source src={video_url}></source>
        </video>
        <div style={overlayStyle as any}></div>

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
              {navItems.map((item, i) => {
                return (
                  <Link
                    key={item.title + i}
                    underline='none'
                    className='link'
                    color='secondary'>
                    {item.title}
                  </Link>
                );
              })}
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
                <IconButton onClick={() => setIsOpen(prev => !prev)}>
                  <MenuRounded sx={{ color: theme.palette.common.white }} />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>

          {/* sidenav */}
          <Drawer
            anchor='right'
            open={isOpen}
            onClose={() => setIsOpen(prev => !prev)}
            PaperProps={{
              sx: {
                backgroundColor: '#006bb340',
                backdropFilter: 'blur(10.5px)',
                width: 200,
                height: '100%',
              },
            }}>
            {navItems.map(item => (
              <>
                <Stack
                  direction='column'
                  justifyContent='center'
                  alignItems='center'>
                  <Button
                    key={item.title}
                    // underline='none'
                    sx={{
                      py: 2,
                      height: '100%',
                      width: '100%',
                      color: theme.palette.common.white,
                      cursor: 'pointer',
                    }}>
                    <Typography variant='h6'>{item.title}</Typography>
                  </Button>
                </Stack>
                <Divider />
              </>
            ))}
          </Drawer>

          <Stack
            style={{ zIndex: 0 }}
            gap={2}
            flex={1}
            alignItems='center'
            justifyContent='center'>
            <Typography variant='h2' textAlign='center'>
              Boost Your Solar Success to New Heights!
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
