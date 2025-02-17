import { Box, Container, Grid, Typography } from '@mui/material';
import GameCard from './GameCard';
import { MOCK_GAMES } from './mock-games';
import { COLOR_CODE } from '@constants';
import { useTranslation } from 'react-i18next';

interface OurGamesProps {}

const OurGames: React.FC<OurGamesProps> = ({}) => {
  // TODO: replace with API calls
  const games = MOCK_GAMES;
  const { t } = useTranslation();
  return (
    <Box
      id="our-games-section"
      sx={{ bgcolor: COLOR_CODE.WHITE, px: { xs: 0, md: 4 } }}
    >
      <Container maxWidth={false}>
        {/* Title */}
        <Typography variant="h4" fontWeight="bold" align="center" mb={2}>
          {t('OUR_GAMES')}
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          maxWidth="800px"
          mx="auto"
          mb={6}
        >
          {t('OUR_GAMES_SECTION_DESCRIPTION')}
        </Typography>

        {/* Games Grid */}
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {games.map(({ key, ...gameProps }, index) => (
            <GameCard {...gameProps} key={gameProps.name} index={index} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurGames;
