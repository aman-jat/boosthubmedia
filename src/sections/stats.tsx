import { Stack, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import '../css/universal.css';

const data = [
  {
    value: 22,
    postfix: '+',
    label: 'Clients',
  },
  {
    value: 13,
    postfix: 'k+',
    label: 'Leads Generated',
  },
  {
    value: 1200,
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

    return <Typography variant='h2' color='#FF9000' ref={countEl} />;
  };

  return (
    <Stack
      sx={{ background: '#F5F5F5' }}
      direction='row'
      justifyContent='space-between'>
      {data.map((d, i) => {
        return (
          <Stack py={4} alignItems='center' flex={1} key={d.label}>
            <Stack direction='row' alignItems='center' justifyContent='center'>
              <AnimationNumber number={data[i].value} />
              <Typography variant='h2' color='#FF9000'>
                {d.postfix}
              </Typography>
            </Stack>
            {/* <span style={{ visibility: 'hidden' }}>0</span> */}

            <Typography textAlign='center' variant='h4' color='primary'>
              {d.label.toUpperCase()}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default Stats;
