import { Box, Grid, Stack, Typography } from '@mui/material';
import bg from '../assets/the_sky_background.png';
import theSun from '../assets/the_sun.png';
import theHorse from '../assets/the_horse.png';
import theSquareDocument from '../assets/the_square_document.png';
import thePreQualification from '../assets/the_pre_qualification.png';
import automatedSolutions from '../assets/the_automated.png';
import engageWithExcellence from '../assets/the_engage_with_excelence.png';

const ComprehensiveApproach = () => {
  const data = [
    {
      id: '1abc',
      title: 'Solar Data Mining',
      img: theSun,
      desc: 'Harnessing years of home owner data from many states, we specialize in delivering "credit qualified" prospects with a genuine interest in solar solutions. Our data-driven approach ensures a consistent flow of high-quality leads, empowering you to maximize solar sales and achieve the sustainable growth.',
    },
    {
      id: '2abc',
      title: 'Strategic Campaign Building',
      img: theHorse,
      desc: 'Shifting away from generic solar ads, we leverage solar offers that align seamlessly with the core concept of solar energy. This strategic approach allows us to compete and triumph over solar companies with hefty marketing budgets, captivating audiences with targeted messaging and achieving remarkable results.',
    },
    {
      id: '3abc',
      title: 'Optimized Funnel Design',
      img: theSquareDocument,
      desc: 'Embracing a comprehensive strategy, we leverage the power of the solar funnel instead of a simple "Facebook lead form ad." This enables us to educate and engage homeowners interested in solar, guiding them through the process of providing their personal information willingly. It fosters effective communication and establishes meaningful connections.',
    },
    {
      id: '4abc',
      title: 'Efficient Pre-Qualification',
      img: thePreQualification,
      desc: 'Our streamlined application process not only gathers information from homeowners interested in solar, but also employs effective filters to exclude non-homeowners and individuals with below-average credit scores. By focusing on qualified prospects who meet the solar eligibility criteria, we ensure a targeted approach and maximize the efficiency of our services.',
    },
    {
      id: '5abc',
      title: 'Automated Solutions for Solar',
      img: automatedSolutions,
      desc: 'Once leads meet our criteria, they are prompted to schedule appointments on your calendar at their convenience. This automation process ensures you spend your time with trained and motivated buyers, rather than chasing unqualified leads. Optimize your efforts and engage with prospects ready to take the next step.',
    },
    {
      id: '6abc',
      title: 'Engage with Excellence',
      img: engageWithExcellence,
      desc: 'Our SMS and email sequences serve as a means to educate and inform homeowners interested in solar. By nurturing these leads, we ensure that your company remains top of mind, fostering a lasting connection even beyond the application process. This ongoing engagement maximizes the potential for conversions and strengthens customer relationships.',
    },
  ];

  return (
    <div style={{ position: 'relative' }}>
      <Stack
        gap={{ xs: 2, sm: 2, lg: 6 }}
        sx={{
          padding: {
            xs: '40px 10%',
            sm: '60px 10%',
            md: '100px 8%',
            lg: '100px 12%',
            xl: '80px 12%',
          },
          background: `url(${bg})`,
          backgroundColor: '#1b4175',
          backgroundSize: 'cover',
        }}>
        <Typography zIndex={1} variant='h2'>
          Our Comprehensive Approach
        </Typography>
        <Grid
          zIndex={1}
          gap={{ xs: 2, sm: 0 }}
          container
          spacing={{ sm: 2, lg: 4 }}>
          {data.map((item, i) => {
            return (
              <Grid key={item.id} item xs={12} sm={6} md={4}>
                <Stack
                  sx={{
                    height: '100%',
                    backgroundColor: '#ffffff15',
                    backdropFilter: 'blur(8.5px)',
                    transition: 'transform 0.5s',
                    '&:hover': {
                      transform: 'scale(1.009)',
                      transition: 'transform 0.5s',
                      boxShadow: `#1B417550 1px 1px 20px 1px`,
                    },
                  }}
                  p={2}
                  gap={1}
                  border={`1px solid #ffffff30`}
                  borderRadius={2}>
                  <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='flex-start'>
                    <img src={item.img} width={100} />
                    <Stack
                      sx={{ backgroundColor: '#ffffff20' }}
                      justifyContent='center'
                      alignItems='center'
                      border={`1px solid #ffffff30`}
                      px={1}
                      pt='2px'
                      borderRadius={50}>
                      <Typography textAlign='center' variant='subtitle2'>
                        Step {i + 1}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Typography variant='h3'>{item.title}</Typography>
                  <Typography
                    variant='caption'
                    lineHeight={1.2}
                    sx={{
                      fontSize: {
                        lg: 16,
                        xl: 18,
                      },
                    }}>
                    {item.desc}
                  </Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
      <Box
        sx={{
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

export default ComprehensiveApproach;
