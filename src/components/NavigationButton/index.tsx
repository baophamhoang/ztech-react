import { COLOR_CODE } from '@constants';
import useResponsive, { ScreenSize } from '@hooks/useResponsive';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { Box, IconButton, useScrollTrigger } from '@mui/material';
import { scrollTo } from '@utils';
import React, { useEffect, useState } from 'react';

interface NavigationButtonProps {}

const NEXT_SECTION_ID = 'our-games-section';

const NavigationButton: React.FC<NavigationButtonProps> = ({}) => {
  const isTabletView = useResponsive(ScreenSize.TABLET);
  const [isArrowUp, setArrowUp] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window,
  });

  const onNavigationBtnClick = () => {
    if (isArrowUp) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollTo(NEXT_SECTION_ID);
    }
  };

  useEffect(() => {
    setArrowUp(trigger);
  }, [trigger]);

  return (
    <Box
      id="navigation-btn"
      sx={{
        position: 'fixed',
        right: '10px',
        zIndex: 100,
        ...(isTabletView ? { bottom: '10%' } : { top: '50%' }),
      }}
    >
      <IconButton
        sx={{
          bgcolor: COLOR_CODE.WHITE,
          border: `1px solid ${COLOR_CODE.GREY}`,
          boxShadow:
            ' 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
          '&:hover': {
            background: COLOR_CODE.GREY,
            color: COLOR_CODE.BLACK,
          },
        }}
        onClick={() => {
          onNavigationBtnClick();
        }}
      >
        {isArrowUp ? <ArrowUpward /> : <ArrowDownward />}
      </IconButton>
    </Box>
  );
};

export default NavigationButton;
