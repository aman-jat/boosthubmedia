import Stats from '../sections/stats';
import FirstPageSection from '../sections/first-page';
import { Stack } from '@mui/material';

const Home = () => {
  return (
    <Stack>
      <FirstPageSection />
      <Stats />
    </Stack>
  );
};

export default Home;
