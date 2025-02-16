import useResponsive, { ScreenSize } from '@hooks/useResponsive';
import { Box } from '@mui/material';
import React from 'react';

interface Wizard2Props {}

const Wizard2: React.FC<Wizard2Props> = ({}) => {
  const isMobileView = useResponsive(ScreenSize.MOBILE);
  return (
    <Box
      component="img"
      src="/wizard-2.png"
      alt="Wizard 2"
      sx={{
        width: isMobileView ? '100%' : '400px',
        position: 'absolute',
        top: 0,
        transform: isMobileView ? 'translateY(-30%)' : 'translateY(-50%)'
      }}
    />
  );
};

export default Wizard2;
