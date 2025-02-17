import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

interface GameCardProps {
  index: number;
  name: string;
  description: string;
  imageUrl: string;
}

const GameCard: React.FC<GameCardProps> = ({
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
      sx={{
        position: 'relative',
        top: isEven ? '0px' : '40px',
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
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mb: isEven ? '10px' : 0,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05) translateY(-10px)',
            boxShadow: '0 20px 40px rgba(0,9,225,0.2)',
            '&::before': {
              opacity: 1,
            },
            '& .MuiCardContent-root': {
              transform: 'translateY(-5px)',
            },
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(to bottom, 
              rgba(255,255,255,0), 
              rgba(0, 9, 225, 0.5)
            )`,
            borderRadius: 4,
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out',
          },
          cursor: 'pointer',
        }}
      >
        <CardContent
          sx={{
            position: 'relative',
            zIndex: 1,
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <Typography 
            variant="h6" 
            fontWeight="bold" 
            color="white"
            sx={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              mb: 1
            }}
          >
            {name}
          </Typography>
          <Typography 
            variant="body2" 
            color="white"
            sx={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              opacity: 0.9
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default GameCard;
