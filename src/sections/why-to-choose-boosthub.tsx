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
      title: 'Proven Success',
      img: theSun,
      desc: `BoostHubMedia has a track record of delivering tangible results, from lead generation to deal closures, ensuring your solar consultancy's growth.`,
    },
    {
      id: '2abc',
      title: 'Targeted Lead Generation',
      img: theHorse,
      desc: 'We prioritize quality over quantity, generating highly relevant and conversion-ready leads to maximize your success.',
    },
    {
      id: '3abc',
      title: 'Customized CRM Solutions',
      img: theSquareDocument,
      desc: 'Our tailored CRM systems streamline lead nurturing, communication, and conversions to drive efficiency.',
    },
    {
      id: '4abc',
      title: 'Data-Driven Strategy',
      img: thePreQualification,
      desc: 'We harness data analytics to refine your marketing, ensuring a strong ROI and continual improvement.',
    },
    {
      id: '5abc',
      title: 'Cost-Efficiency',
      img: automatedSolutions,
      desc: 'Our strategies maximize your budget, guaranteeing that each dollar invested contributes to your bottom line.',
    },
    {
      id: '6abc',
      title: 'Client-Centric Excellence',
      img: engageWithExcellence,
      desc: ' Your unique business needs are at the forefront of our approach, making us your dedicated partner in solar consulting success.',
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
          Why Boosthub media ?
        </Typography>
        <Grid
          zIndex={1}
          gap={{ xs: 2, sm: 0 }}
          container
          spacing={{ sm: 2, lg: 4 }}>
          {data.map(item => {
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
