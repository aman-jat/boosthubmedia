import { Stack, Typography } from '@mui/material';
import brandSupremacyImage from '../assets/brand_supremacy.png';
import revitalized from '../assets/revitalized.png';

const ServiceWeOffer = () => {
  const Card = ({ heading, desc, svg, direction = 'row' }: any) => {
    return (
      <Stack
        sx={{
          boxShadow: `#1B417550 0.1px 0.1px 20px 0px`,
          border: `1px solid #1B417525`,
          borderRadius: 1.5,
          transition: 'transform 0.5s',
          '&:hover': {
            transform: 'scale(1.02)',
            transition: 'transform 0.5s',
            boxShadow: `#1B417550 1px 1px 20px 4px`,
          },
        }}
        alignItems='center'
        direction={direction}>
        <Stack
          width={{ xs: '100%', sm: '50%' }}
          p={{ xs: '10%', sm: '7% 5%', md: '7% 5%' }}
          gap={1}>
          <Typography color='primary' variant='h3' sx={{ letterSpacing: '0' }}>
            {heading}
          </Typography>
          <Typography color='primary' variant='caption'>
            {desc}
          </Typography>
        </Stack>
        <Stack
          pt={{ xs: '10%', sm: '0%' }}
          width={{ xs: '100%', sm: '50%', md: '40%' }}>
          <img src={svg} alt='Lock icon explaining stuff' />
        </Stack>
      </Stack>
    );
  };

  return (
    <Stack gap={3} px={'10%'} py={'10%'}>
      <Typography variant='h2' color='primary'>
        Services We Offer
      </Typography>

      <Card
        heading='Brand Supremacy'
        desc={`Is your solar business poised for long-term success? In today's landscape, a well-crafted company brand is a definitive statement of legitimacy and unwavering pride in our endeavours. When individuals resonate with a company's values, they are more inclined to invest in installations, recognizing the unique value proposition that sets us apart. Establishing a strong connection based on shared ideals is paramount in influencing customers to willingly choose our services over any other, enhancing their willingness to invest at a higher level.`}
        svg={brandSupremacyImage}
        direction={{ xs: 'column-reverse', sm: 'row' }}
      />
      <Card
        heading='Revitalized Premium Lead Generation'
        desc={`At our core, we are not merely lead sellers or resellers. Our focus lies in constructing a bespoke lead generation funnel tailored exclusively for you. This dynamic system consistently generates an abundance of high-quality leads day in and day out. However, our commitment extends beyond lead generation. Our expertise lies in empowering you to effectively convert these leads into successful closed deals. We prioritize your success and provide the necessary guidance to capitalize on the full potential of your leads, ensuring optimal results and sustained growth.`}
        svg={revitalized}
        direction={{ xs: 'column-reverse', sm: 'row-reverse' }}
      />
    </Stack>
  );
};

export default ServiceWeOffer;
