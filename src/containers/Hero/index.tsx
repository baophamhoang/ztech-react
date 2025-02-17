import { COLOR_CODE } from '@constants';
import useResponsive, { ScreenSize } from '@hooks/useResponsive';
import { Box, Container, Typography } from '@mui/material';
import dayjs from 'dayjs';
import React from 'react';
import HeroBackground from './Background';
import Countdown from './Countdown';
import CurvedSeparator from './CurvedSeparator';
import NewspaperForm from './NewspaperForm';
import Wizard1 from './Wizard1';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  const isTabletView = useResponsive(ScreenSize.TABLET);
  const isMobileView = useResponsive(ScreenSize.MOBILE);
  return (
    <Box id="hero-section" position="relative">
      {/* Background */}
      <HeroBackground />

      <Box
        position={'absolute'}
        sx={{
          top: 0,
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Container
          id="hero-container"
          maxWidth="lg"
          sx={{
            position: 'relative',

            zIndex: 2,
            textAlign: 'center',
            paddingTop: isTabletView ? '6rem' : '7.5rem',
            paddingBottom: isTabletView ? '6rem' : '7.5rem',
          }}
        >
          {/* Title */}
          <Typography
            variant="h1"
            component="h1"
            color={COLOR_CODE.WHITE}
            sx={{
              fontSize: isTabletView ? '2.5rem' : '5rem',
              fontWeight: 'bold',
              marginBottom: isTabletView ? '1.5rem' : '1rem',
            }}
            gutterBottom
          >
            We're Getting Ready
          </Typography>

          {/* Countdown Clock */}
          <Countdown targetDate={dayjs().add(1, 'M')} />

          {/* Subtitle */}
          <Typography
            variant="h6"
            color={COLOR_CODE.WHITE}
            sx={{
              fontSize: isTabletView ? '0.75rem' : '1.125rem',
              maxWidth: '600px',
              margin: isTabletView ? '2rem auto 1rem' : '2rem auto 1rem',
            }}
            gutterBottom
          >
            We will back to something amazing. Getting the latest updates about
            our games. Please sign up to our newsletter.
          </Typography>

          {/* Newspaper Form */}
          <NewspaperForm />
        </Container>
      </Box>

      {/* Wizard 1 */}
      <Wizard1 />
      {/* Curved Separator */}
      <CurvedSeparator />

      {isTabletView && <Box sx={{ marginBottom: isMobileView ? '280px' : '350px' }}></Box>}
    </Box>
  );
};

export default Hero;
