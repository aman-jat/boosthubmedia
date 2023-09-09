import theme from '../style/theme';
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import '../css/universal.css';
import { MenuRounded } from '@mui/icons-material';
import { useState } from 'react';
import video_url from '../assets/bg_video.mp4';
import { ContainedButton, OutlinedButton } from '../components/button';

const FirstPageSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: 'Home' },
    { title: 'Service' },
    { title: 'Work' },
    { title: 'Result' },
  ];

  return (
    <Stack sx={{ backgroundColor: theme.palette.grey[900] }}>
      <div style={{ position: 'relative' }}>
        {/* video */}
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
        {/* darken overlay */}
        <Box
          sx={{
            background: 'rgba(0, 0, 0, 0.6)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />

        {/* overlay content */}
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
              <OutlinedButton size='small'>
                <span>Contact</span>
              </OutlinedButton>
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
