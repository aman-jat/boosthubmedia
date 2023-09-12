import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import theme from '../style/theme';
import { OutlinedButton } from '../components/button';
import { Stack, Typography, Link } from '@mui/material';
import '../css/universal.css';
import { navItems } from './first-page';

const Footer = () => {
  return (
    <Stack
      sx={{
        backgroundColor: theme.palette.primary.main,
      }}>
      <Stack
        gap={{ xs: 4, lg: 8 }}
        direction={{ xs: 'column-reverse', sm: 'row' }}
        sx={{
          padding: {
            xs: '40px 20px',
            sm: '90px 4%',
            md: '100px 4%',
            lg: '150px 10%',
          },
        }}>
        {/* left side */}

        <Stack gap={1} direction='column'>
          <Stack display={{ xs: 'none', sm: 'flex' }}>
            <Typography
              color='secondary'
              sx={{
                fontWeight: 700,
                fontFamily: 'Romanesco',
                zIndex: 1,
                fontSize: { xs: 28, sm: 30, md: 45 },
              }}>
              {'BoostHub'.toUpperCase()}
            </Typography>
          </Stack>
          <Stack
            flex={1}
            direction='column'
            alignItems='flex-start'
            justifyContent='flex-start'
            gap={{ xs: 0.5 }}>
            <Typography variant='h5'>Boosthub Media</Typography>
            <Stack gap={1} mb={2} alignItems='flex-start' direction='row'>
              <LinkedIn
                fontSize='large'
                sx={{
                  color: theme.palette.common.white,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    cursor: 'pointer',
                    transform: 'scale(1.2)',
                    transition: 'transform 0.2s',
                  },
                }}
              />
              <Instagram
                fontSize='large'
                sx={{
                  color: theme.palette.common.white,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    cursor: 'pointer',
                    transform: 'scale(1.2)',
                    transition: 'transform 0.2s',
                  },
                }}
              />
              <Facebook
                fontSize='large'
                sx={{
                  color: theme.palette.common.white,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    cursor: 'pointer',
                    transform: 'scale(1.2)',
                    transition: 'transform 0.2s',
                  },
                }}
              />
            </Stack>
            <Stack alignItems='flex-start' gap={0.5}>
              {navItems.map(navItem => {
                return (
                  <Link
                    key={navItem.title}
                    underline='none'
                    className='link'
                    fontWeight={{ lg: 500 }}
                    color={theme.palette.common.white}>
                    {navItem.title}
                  </Link>
                );
              })}
            </Stack>
          </Stack>
        </Stack>

        {/* right side */}
        <Stack
          flex={{ xl: 2, lg: 3, md: 2.5, sm: 2 }}
          direction='column'
          gap={2}
          justifyContent='center'
          alignItems='flex-start'>
          <Stack display={{ xs: 'flex', sm: 'none' }}>
            <Typography
              color='secondary'
              sx={{
                fontWeight: 700,
                fontFamily: 'Romanesco',
                zIndex: 1,
                fontSize: { xs: 28, sm: 30, md: 45 },
              }}>
              {'BoostHub'.toUpperCase()}
            </Typography>
          </Stack>

          <Typography
            sx={{
              fontWeight: 600,
              fontSize: {
                xs: 40,
                sm: 50,
                md: 55,
                lg: 70,
                xl: 75,
              },
              lineHeight: { xs: 1.1 },
            }}>
            Solar Ads that Connect, Unleash Your Potential
          </Typography>
          <OutlinedButton size='small'>
            <span>Contact</span>
          </OutlinedButton>
        </Stack>
      </Stack>
      <Stack mb={4} direction='row' justifyContent='space-around'>
        <Typography variant='h6'>
          Copyright 2023 Solar Bulls, Inc. All rights reserved.
        </Typography>
        <Typography variant='h6'>Privacy Policy | Terms of Use</Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
