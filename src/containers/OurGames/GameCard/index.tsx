import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

interface GameCardProps {
  index: number;
  key: string;
  name: string;
  description: string;
  imageUrl: string;
}

const GameCard: React.FC<GameCardProps> = ({
  key,
  index,
  name,
  description,
  imageUrl,
}) => {
  const isEven = index % 2 == 0;
  return (
    <Grid
      item
      xs={6}
      lg={3}
      key={key}
      sx={{
        position: 'relative',
        top: isEven ?  '0px': '40px', 
      }}
    >
      <Card
        sx={{
          borderRadius: 4,
          height: 400,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0), rgba(0, 9, 225, 0.3)), url('/game-pics/${imageUrl}')`,
          mb: isEven ? '10px' : 0,
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight="bold" color="white">
            {name}
          </Typography>
          <Typography variant="body2" color="white">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default GameCard;
