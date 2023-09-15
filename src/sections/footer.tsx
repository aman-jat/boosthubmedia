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
                xs: 20,
                sm: 25,
                md: 30,
                lg: 35,
                xl: 40,
              },
              lineHeight: { xs: 1.1 },
            }}>
            Ready to take your solar consulting business to the next level?
            Contact us today to discuss your needs and receive a personalized
            consultation. Let BoostHubMedia be your trusted partner in achieving
            solar success.
          </Typography>
          <a href='https://calendly.com/boosthubmedia/boost-hub-media-discovery-call'>
            <OutlinedButton size='small'>
              <span>Book Now</span>
            </OutlinedButton>
          </a>
        </Stack>
      </Stack>
      <Stack mb={4} direction='row' justifyContent='space-around'>
        <Typography variant='h6'>
          Copyright 2023 BoostHub Media, Inc. All rights reserved.
        </Typography>
        <Typography variant='h6'>Privacy Policy | Terms of Use</Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
