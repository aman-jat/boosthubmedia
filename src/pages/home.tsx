import Stats from '../sections/stats';
import FirstPageSection from '../sections/first-page';
import { Stack } from '@mui/material';
import ServiceWeOffer from '../sections/service-we-offer';
import BoostYourSales from '../sections/boost-your-sales';
import ComprehensiveApproach from '../sections/comprehensive-approach';
import Footer from '../sections/footer';

const Home = () => {
  return (
    <Stack>
      <FirstPageSection />
      <Stats />
      <ServiceWeOffer />
      <BoostYourSales />
      <ComprehensiveApproach />
      <Footer />
    </Stack>
  );
};

export default Home;
