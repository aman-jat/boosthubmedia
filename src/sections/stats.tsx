import { Stack, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import '../css/universal.css';

const data = [
  {
    value: 25,
    postfix: '+',
    label: 'Clients',
  },
  {
    value: 15,
    postfix: 'k+',
    label: 'Leads Generated',
  },
  {
    value: 1000,
    postfix: '+',
    label: 'Appointment Set',
  },
];

const Stats = () => {
  const AnimationNumber = ({
    number = 1000,
    intervalTime = 10,
    period = 1000,
  }) => {
    let countEl = useRef(null);
    const count = useRef(0);
    useEffect(() => {
      (countEl as any).current.innerText = '0';
      const interval = setInterval(() => {
        if (count.current < number) {
          const amountPerRun = number * (intervalTime / period);
          count.current += amountPerRun;
          (countEl as any).current.innerText = Math.min(
            number,
            Math.floor(count.current)
          );
          return;
        }
        clearInterval(interval);
      }, intervalTime);

      return () => clearInterval(interval);
    }, []);

    return (
      <>
        <span style={{ visibility: 'hidden' }}>0</span>
        <span style={{ marginLeft: '-40px' }} ref={countEl} />
      </>
    );
  };

  return (
    <Stack
      sx={{ background: '#F5F5F5' }}
      direction='row'
      justifyContent='space-between'>
      {data.map((d, i) => {
        return (
          <Stack py={4} alignItems='center' flex={1} key={d.label}>
            <Typography variant='h1' color='#FF9000'>
              <AnimationNumber number={data[i].value} />
              {d.postfix}
            </Typography>
            <Typography variant='h3' color='primary'>
              {d.label.toUpperCase()}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default Stats;
