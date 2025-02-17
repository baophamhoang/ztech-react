import useResponsive, { ScreenSize } from '@hooks/useResponsive';
import { ArrowForward } from '@mui/icons-material';
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

interface NewspaperFormProps {}

const NewspaperForm: React.FC<NewspaperFormProps> = ({}) => {
  const isMobileView = useResponsive(ScreenSize.MOBILE);
  const [email, setEmail] = useState('');
  return (
    <Stack
      sx={{
        gap: '0.5rem',
        maxWidth: '300px',
        margin: ' 0 auto',
        ...(isMobileView ? { padding: '0 1rem' } : {}),
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ bgcolor: 'white', borderRadius: 1, '> input': { p: 1 } }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  setEmail('');
                }}
              >
                <ArrowForward />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};

export default NewspaperForm;
