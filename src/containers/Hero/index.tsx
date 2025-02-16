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
  const isMobileView = useResponsive(ScreenSize.MOBILE);
  return (
    <Box id='hero-section' position="relative">
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
            paddingTop: '80px',
            paddingBottom: '120px',
          }}
        >
          {/* Title */}
          <Typography
            variant="h2"
            component="h2"
            color={COLOR_CODE.WHITE}
            sx={{
              fontSize: '4rem',
              fontWeight: 'bold',
              marginBottom: '4rem',
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
              maxWidth: '600px',
              margin: '0 auto 2rem',
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

      {isMobileView && <Box sx={{ mb: '300px' }}></Box>}
    </Box>
  );
};

export default Hero;
