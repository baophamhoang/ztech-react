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
import { useTranslation } from 'react-i18next';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  const isTabletView = useResponsive(ScreenSize.TABLET);
  const isMobileView = useResponsive(ScreenSize.MOBILE);
  const { t } = useTranslation();
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
              fontSize: isTabletView ? '2.5rem' : '4.5rem',
              fontWeight: 'black',
              marginBottom: isTabletView ? '1.5rem' : '1rem',
            }}
            gutterBottom
          >
            {t('WERE_GETTING_READY')}
          </Typography>

          {/* Countdown Clock */}
          <Countdown targetDate={dayjs().add(1, 'M')} />

          {/* Subtitle */}
          {isTabletView && (
            <Typography
              variant="h6"
              color={COLOR_CODE.WHITE}
              sx={{
                fontSize: isTabletView ? '0.75rem' : '1rem',
                maxWidth: '500px',
                fontWeight: 400,
                margin: isTabletView ? '2rem auto 1rem' : '1rem auto 1rem',
              }}
              gutterBottom
            >
              {t('WE_WILL_BE_BACK')}
            </Typography>
          )}
          {/* Newspaper Form */}
          <NewspaperForm />

          {/* Subtitle */}
          {!isTabletView && (
            <Typography
              variant="h6"
              color={COLOR_CODE.WHITE}
              sx={{
                fontSize: isTabletView ? '0.75rem' : '1rem',
                maxWidth: '500px',
                fontWeight: 400,
                margin: isTabletView ? '2rem auto 1rem' : '1rem auto 1rem',
              }}
              gutterBottom
            >
              {t('WE_WILL_BE_BACK')}
            </Typography>
          )}
        </Container>
      </Box>

      {/* Wizard 1 */}
      <Wizard1 />
      {/* Curved Separator */}
      <CurvedSeparator />

      {isTabletView && (
        <Box sx={{ marginBottom: isMobileView ? '280px' : '350px' }}></Box>
      )}
    </Box>
  );
};

export default Hero;
