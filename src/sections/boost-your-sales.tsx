import { ContainedButton } from '../components/button';
import { Box, Stack, Typography } from '@mui/material';
import bg from '../assets/hande_shake.png';

const BoostYourSales = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Stack
        py={{ xs: 2, sm: 4, md: 6, lg: 10 }}
        px={{ xs: 0, md: 4 }}
        justifyContent={{ xs: 'center', md: 'space-between' }}
        alignItems='center'
        direction={{ xs: 'column', md: 'row' }}
        sx={{ background: `url(${bg})`, backgroundSize: 'cover' }}>
        <Typography
          variant='h2'
          style={{ zIndex: 1, fontWeight: 700, letterSpacing: '1px' }}>
          Boost Your Sales
        </Typography>
        <ContainedButton style={{ zIndex: 1 }}>
          Schedule a free strategy call
        </ContainedButton>
      </Stack>
      {/* darken overlay */}
      <Box
        sx={{
          background: 'rgba(0, 0, 0, 0.8)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};
export default BoostYourSales;
