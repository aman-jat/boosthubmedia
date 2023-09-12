import Stats from '../sections/stats';
import FirstPageSection from '../sections/first-page';
import { Stack } from '@mui/material';
import ServiceWeOffer from '../sections/service-we-offer';

const Home = () => {
  return (
    <Stack>
      <FirstPageSection />
      <Stats />
      <ServiceWeOffer />
    </Stack>
  );
};

export default Home;
