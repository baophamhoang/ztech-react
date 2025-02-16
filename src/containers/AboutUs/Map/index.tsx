import { Box } from '@mui/material';
import React from 'react';

interface MapProps {}

const Map: React.FC<MapProps> = ({}) => {
  return (
    <Box
      sx={{
        width: '100%',
        left: 0,
        right: 0,
        position: 'absolute'
      }}
      component="img"
      alt="Map"
      src="/map.png"
    />
  );
};

export default Map;
