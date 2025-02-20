import { Box } from '@mui/material';
import React from 'react';

interface HeroBackgroundProps {}

const HeroBackground: React.FC<HeroBackgroundProps> = ({}) => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(hero-background.webp)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        height: '90vh',
      }}
    ></Box>
  );
};

export default HeroBackground;
