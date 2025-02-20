import useResponsive, { ScreenSize } from '@hooks/useResponsive';
import { Stack, Typography } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: Date | Dayjs;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const isTabletView = useResponsive(ScreenSize.TABLET);
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
        px: '24px',
        py: isTabletView ? '26px' : '18px',
        width: 'fit-content',
      }}
    >
      {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
        <Stack
          key={unit}
          flexDirection="row"
          alignItems="center"
          gap={isTabletView ? 1.25 : 6.5}
          sx={{ textAlign: 'center' }}
        >
          <Stack sx={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              lineHeight={isTabletView ? '45px' : '56px'}
              fontSize={isTabletView ? 36 : 60}
              fontWeight="900"
            >
              {timeLeft[unit as keyof typeof timeLeft]}
            </Typography>
            <Typography
              fontWeight="bold"
              mt={isTabletView ? 0.5 : 1.5}
              fontSize={isTabletView ? 12 : 16}
            >
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </Typography>
          </Stack>
          {index !== 3 && (
            <Typography
              mr={isTabletView ? 1.25 : 6.5}
              fontSize={isTabletView ? '40px' : '60px'}
              variant="h4"
            >
              :
            </Typography>
          )}
        </Stack>
      ))}
    </Stack>
  );
};

export default Countdown;
