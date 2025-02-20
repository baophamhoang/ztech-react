import useResponsive, { ScreenSize } from '@hooks/useResponsive';
import { Box } from '@mui/material';
import React from 'react';

interface Wizard1Props {}

const Wizard1: React.FC<Wizard1Props> = ({}) => {
  const isTabletView = useResponsive(ScreenSize.TABLET);
  const isMobileView = useResponsive(ScreenSize.MOBILE);

  return (
    <Box
      id="wizard-1"
      position="absolute"
      sx={
        isTabletView
          ? {
              width: isMobileView ? '360px' : '400px',
              left: 0,
              right: 0,
              marginInline: 'auto',
              transform: 'translate(20px, -60px)',
              zIndex: 50,
            }
          : {
              width: '32vw',
              bottom: 0,
              zIndex: 50,
              transformOrigin: 'left',
            }
      }
    >
      <img width={'100%'} src="/wizard-1.png" alt="Wizard 1" />
    </Box>
  );
};

export default Wizard1;
