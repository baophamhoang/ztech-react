import { useMediaQuery } from '@mui/material';

export enum ScreenSize {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}
export const muiResponsive = {
  MOBILE: '(max-width:500px)',
  TABLET: '(max-width:821px)', // md breakpoint
  LARGE_SCREEN: '(max-width:1366px)',
  EXTRA_LARGE_SCREEN: '(max-width:1536px)',
};

export default function useResponsive(size: ScreenSize): boolean {
  const getBreakpoint = (_size: ScreenSize) => {
    switch (size) {
      case ScreenSize.MOBILE:
        return muiResponsive.MOBILE;
      case ScreenSize.TABLET:
        return muiResponsive.TABLET;
      case ScreenSize.DESKTOP:
        return muiResponsive.LARGE_SCREEN;

      default:
        return muiResponsive.LARGE_SCREEN;
    }
  };
  const isMatch = useMediaQuery(getBreakpoint(size));
  return isMatch;
}
