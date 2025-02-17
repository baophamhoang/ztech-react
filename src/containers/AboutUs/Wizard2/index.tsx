import useResponsive, { ScreenSize } from '@hooks/useResponsive';
import { Box, keyframes, styled } from '@mui/material';
import React from 'react';

interface Wizard2Props {}

// Complex floating animation with multiple directions
const floatAnimation = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  20% {
    transform: translate(5px, -20px) rotate(1deg);
  }
  40% {
    transform: translate(-5px, -25px) rotate(-1deg);
  }
  60% {
    transform: translate(3px, -15px) rotate(0.5deg);
  }
  80% {
    transform: translate(-3px, -20px) rotate(-0.5deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
`;

const Wizard2: React.FC<Wizard2Props> = ({}) => {
  const isMobileView = useResponsive(ScreenSize.MOBILE);

  // Styled component for the wizard container
  const FloatingContainer = styled('div')({
    position: 'relative',
    width: isMobileView ? '100%' : '400px',
    margin: '0 auto',
    '& img': {
      width: '100%',
      height: 'auto',
      animation: `${floatAnimation} 6s ease-in-out infinite`,
      transformStyle: 'preserve-3d',
      perspective: '1000px',
      willChange: 'transform', 
    },
  });

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        transform: isMobileView ? 'translateY(-30%)' : 'translateY(-50%)',
      }}
    >
      <FloatingContainer>
        <Box component="img" src="/wizard-2.png" alt="Wizard 2" />
      </FloatingContainer>
    </Box>
  );
};

export default Wizard2;
