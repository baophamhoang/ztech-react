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
        maxWidth: '560px',
        margin: '50px auto 0',
        ...(isMobileView ? { padding: '0 1rem' } : { p: '18px 14px 0' }),
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ bgcolor: 'white', borderRadius: '8px', '> input': { p: 1 } }}
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
