import Stats from '../sections/stats';
import FirstPageSection from '../sections/first-page';
import { Stack } from '@mui/material';
import ServiceWeOffer from '../sections/service-we-offer';
import BoostYourSales from '../sections/boost-your-sales';
import ComprehensiveApproach from '../sections/why-to-choose-boosthub';
import Footer from '../sections/footer';
import '../css/universal.css';

const Home = () => {
  return (
    <Stack className='scroll-transition'>
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
