import ElevationScroll from '@components/ElevationScroll';
import { COLOR_CODE } from '@constants';
import { Close } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Stack, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { scrollTo } from '@utils';
import LangPicker from './LanguagePicker';
import useResponsive, { ScreenSize } from '@hooks/useResponsive';

interface Props {
  window?: () => Window;
}
const drawerWidth = '100%';
const navItems: { name: string; href: string }[] = [
  { name: 'ABOUT_US', href: 'about-us-section' },
  { name: 'GAMES', href: 'our-games-section' },
  { name: 'PARTNERS', href: 'our-partners-section' },
  { name: 'CONTACT_US', href: 'footer-section' },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const isTabletView = useResponsive(ScreenSize.TABLET);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const onNavbarItemClick = (sectionId: string) => {
    scrollTo(sectionId);
  };

  const onNavbarItemMobileClick = (sectionId: string) => {
    handleDrawerToggle();
    scrollTo(sectionId);
  };

  const MobileDrawer = () => (
    <Box sx={{ textAlign: 'center' }}>
      {/* <Box component="img" src="/white_logo.png" alt="logo"></Box> */}
      <Stack flexDirection="row" justifyContent="space-between">
        <Box
          sx={{
            bgcolor: COLOR_CODE.GREY,
            border: `1px solid #AFAFAF`,
            borderRadius: '10px',
            height: '100%',
            px: 1,
          }}
        >
          <LangPicker />
        </Box>

        <IconButton sx={{ p: 0 }} onClick={handleDrawerToggle}>
          <Close sx={{ fontSize: '50px' }} />
        </IconButton>
      </Stack>

      <List>
        {navItems.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            sx={{
              mt: 1,
              pb: 1,
              borderBottom:
                index !== navItems.length - 1
                  ? `${COLOR_CODE.GREY} 1px solid`
                  : '',
            }}
          >
            <ListItemButton
              sx={{ textAlign: 'center', display: 'block' }}
              onClick={() => onNavbarItemMobileClick(item.href)}
            >
              <Typography
                color={COLOR_CODE.BLACK}
                fontWeight={600}
                fontSize={14}
              >
                {t(item.name).toUpperCase()}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <ElevationScroll>
        <AppBar component="nav" sx={{ pt: 2, px: isTabletView ? 1 : 5 }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Link href="#">
                <Box
                  component="img"
                  width={72}
                  src="/white_logo.png"
                  alt="logo"
                ></Box>
              </Link>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 'auto', display: { sm: 'none' } }}
            >
              <MenuIcon sx={{ fontSize: '32px' }} />
            </IconButton>

            <Box
              sx={{
                display: { xs: 'none', sm: 'block' },
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  onClick={() => onNavbarItemClick(item.href)}
                >
                  <Typography
                    color={COLOR_CODE.WHITE}
                    fontWeight={700}
                    fontSize={14}
                    mr={5}
                  >
                    {t(item.name).toUpperCase()}
                  </Typography>
                </Button>
              ))}
              <LangPicker />
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <nav>
        <Drawer
          container={container}
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              padding: 2,
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <MobileDrawer />
        </Drawer>
      </nav>
    </Box>
  );
}
