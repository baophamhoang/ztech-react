import useResponsive, { ScreenSize } from '@hooks/useResponsive';
import { Box } from '@mui/material';
import React from 'react';

interface Wizard1Props {}

const Wizard1: React.FC<Wizard1Props> = ({}) => {
  const isMobileView = useResponsive(ScreenSize.MOBILE);
  return (
    <Box
      id="wizard-1"
      position="absolute"
      sx={
        isMobileView
          ? {
              width: '80%',
              left: 0,
              right: 0,
              marginInline: 'auto',
              transform: 'translate(20px, -60px)',
              zIndex: 50,
            }
          : {
              bottom: 0,
              zIndex: 50,
              transformOrigin: 'left',
            }
      }
    >
      <img
        width={isMobileView ? '100%' : '400px'}
        src="/wizard-1.png"
        alt="Wizard 1"
      />
    </Box>
  );
};

export default Wizard1;
