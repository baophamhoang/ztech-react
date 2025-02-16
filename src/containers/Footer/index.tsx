import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  IconButton,
} from '@mui/material';
import { Twitter, Facebook, LinkedIn, ArrowForward } from '@mui/icons-material';
import { COLOR_CODE } from '@constants';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
  return (
    <Box
      id="footer-section"
      sx={{
        background: `url('/footer-background.webp')`,
        backgroundPosition: 'bottom',
        color: 'white',
        pt: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Logo & Social Icons */}
          <Grid item xs={12} md={4} textAlign="center">
            <Box component='img' src='/white_logo.png' alt='logo'></Box>
            <Box mt={2}>
              <IconButton sx={{ color: 'white' }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          {/* Address */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold">
              {t('ADDRESS')}
            </Typography>
            <Typography variant="body2" mt={1}>
              Valletta Buildings, South Street, Valletta - VLT 1103, Malta, US
            </Typography>
            <Typography variant="body2">
              20 Phan Dang Luu Street, Hai Chau District, Danang City, Vietnam
            </Typography>
            <Typography variant="body2" mt={1}>
              📞 (+1) 555-0108-000 | (+236) 555-0108
            </Typography>
          </Grid>

          {/* Subscribe */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold">
            {t('SUBSCRIBE')}
            </Typography>
            <Typography variant="body2" mt={1}>
              
            {t('SUBSCRIBE_DESCRIPTION')}
            </Typography>
            <Box
              display="flex"
              mt={2}
              sx={{ border: '1px solid white', borderRadius: '4px' }}
            >
              <TextField
                variant="outlined"
                placeholder={t('ENTER_YOUR_EMAIL')}
                fullWidth
                sx={{
                  input: { color: 'white' },
                  '& fieldset': { border: 'none' },
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
              />
              <IconButton sx={{ color: 'white' }}>
                <ArrowForward />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Copyright */}
      <Box textAlign="center" py={4} mt={5} sx={{backgroundColor: COLOR_CODE.BLACK}}>
        <Typography variant="body2">2017 Copyright. Policy.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
