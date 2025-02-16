import { COLOR_CODE } from '@constants';
import { AccessTime, Groups, Palette } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Map from './Map';
import Wizard2 from './Wizard2';

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = ({}) => {
  const { t } = useTranslation();
  return (
    <Box id="about-us-section" sx={{ bgcolor: 'white', py: { xs: 0, md: 8 } }}>
      <Container>
        <Stack spacing={4} direction={{ xs: 'column', md: 'row' }}>
          {/* Left Side Content */}
          <Stack spacing={3} flex={1}>
            <Typography variant="h2" fontWeight="bold" mb={4}>
              {t('ABOUT_US')}
            </Typography>

            <Typography variant="body1" color="text.secondary">
              {t('ABOUT_US_SECTION_DESCRIPTION')}
            </Typography>

            <Stack direction="row" spacing={4}>
              <Box>
                <Typography variant="h3" fontWeight="bold" color="primary">
                  600M+
                </Typography>
                <Typography variant="body1">{t('USERS')}</Typography>
              </Box>
              <Box>
                <Typography variant="h3" fontWeight="bold" color="primary">
                  135+
                </Typography>
                <Typography variant="body1">{t('GAMES')}</Typography>
              </Box>
            </Stack>
          </Stack>

          {/* Right Side Content */}
          <Paper
            sx={{ p: 5, borderRadius: 2, bgcolor: COLOR_CODE.GREY, flex: 1 }}
            elevation={0}
          >
            <Stack spacing={3}>
              {[
                {
                  icon: <AccessTime />,
                  title: t('24_HOUR'),
                  desc: t('24_HOUR_DESCRIPTION'),
                },
                {
                  icon: <Palette />,
                  title: t('DESIGN'),
                  desc: t('DESIGN_DESCRIPTION'),
                },
                {
                  icon: <Groups />,
                  title: t('TEAM'),
                  desc: t('TEAM_DESCRIPTION'),
                },
              ].map((item, index) => (
                <Stack
                  key={index}
                  direction="row"
                  alignItems="center"
                  spacing={2}
                >
                  <Avatar sx={{ bgcolor: 'lightblue', p: 1 }}>
                    {item.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.desc}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Paper>
        </Stack>

        <Stack
          position="relative"
          justifyContent="center"
          alignItems="center"
          sx={{
            marginTop: '200px',
            height: { xs: '300px', md: '500px' },
          }}
        >
          <Map />
          <Wizard2 />
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutUs;
