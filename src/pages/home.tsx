import Stats from '../sections/stats';
import FirstPageSection from '../sections/first-page';
import { Stack } from '@mui/material';
import ServiceWeOffer from '../sections/service-we-offer';
import BoostYourSales from '../sections/boost-your-sales';

const Home = () => {
  return (
    <Stack>
      <FirstPageSection />
      <Stats />
      <ServiceWeOffer />
      <BoostYourSales />
    </Stack>
  );
};

export default Home;
