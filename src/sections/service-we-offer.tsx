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
        heading='Premier Homeowner Leads'
        desc={`At BoostHubMedia, we understand that the lifeblood of your thriving solar consultancy is a consistent stream of top-tier leads. Our team excels in the art of digital marketing, generating homeowner leads of the highest caliber. These leads aren't just inquiries; they're pre-vetted prospects, primed for your expert consultation.`}
        svg={brandSupremacyImage}
        direction={{ xs: 'column-reverse', sm: 'row' }}
      />
      <Card
        heading='Custom CRM Excellence'
        desc={`Crafting an unparalleled client experience starts with an exceptional Customer Relationship Management (CRM) system. Our experts orchestrate the setup, customization, and seamless management of your CRM, ensuring no lead escapes your nurturing touch. Track interactions, automate processes, and schedule appointments with unmatched precision.`}
        svg={revitalized}
        direction={{ xs: 'column-reverse', sm: 'row-reverse' }}
      />
      <Card
        heading='Facebook Advertising Mastery'
        desc={`Unleash the full potential of social media with our meticulously crafted Facebook advertising campaigns. We create and manage targeted advertisements that resonate with your ideal audience, effectively directing prospective clients to your virtual doorstep. Our data-driven strategy optimizes your advertising budget, delivering an exceptional return on investment.`}
        svg={revitalized}
        direction={{ xs: 'column-reverse', sm: 'row-reverse' }}
      />
    </Stack>
  );
};

export default ServiceWeOffer;
