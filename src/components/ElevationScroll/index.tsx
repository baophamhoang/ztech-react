import useScrollTrigger from '@mui/material/useScrollTrigger';
import * as React from 'react';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement<{
    elevation?: number;
    style?: any;
  }>;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        style: trigger
          ? { backgroundColor: '#3015CC' }
          : { backgroundColor: 'transparent' },
      })
    : null;
}

export default ElevationScroll;
