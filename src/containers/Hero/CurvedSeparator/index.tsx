import { Box } from '@mui/material';
import React from 'react';

interface CurvedSeparatorProps {}

const CurvedSeparator: React.FC<CurvedSeparatorProps> = ({}) => {
  return (
    <Box
      id='hero-curved-separator'
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,

        '& svg': {
          width: '100%',
          height: 'auto',
          display: 'block',
        },
      }}
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 150V20C240 90 480 110 720 110C960 110 1200 90 1440 20V150H0Z"
          fill="white"
        />
      </svg>
    </Box>
  );
};

export default CurvedSeparator;
