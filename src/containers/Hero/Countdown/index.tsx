import { Stack, Typography } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: Date | Dayjs;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = dayjs(targetDate).valueOf() - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Stack
      flexDirection="row"
      sx={{
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'white',
        borderRadius: 4,
        px: 2,
        py: 2,
        width: 'fit-content',
      }}
    >
      {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
        <Stack key={unit} flexDirection="row" sx={{ textAlign: 'center' }}>
          <Stack sx={{ textAlign: 'center' }}>
            <Typography variant="h4" fontWeight="bold">
              {timeLeft[unit as keyof typeof timeLeft]}
            </Typography>
            <Typography fontWeight="bold">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </Typography>
          </Stack>
          {index !== 3 && (
            <Typography mx={{ xs: 1, md: 2 }} variant="h4">
              :
            </Typography>
          )}
        </Stack>
      ))}
    </Stack>
  );
};

export default Countdown;
