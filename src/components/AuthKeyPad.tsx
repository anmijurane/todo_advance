import React, { FC } from 'react';
import { Divider, Grid, Button } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';

interface Props {
  divider: boolean;
}

export const AuthKeyPad:FC<Props> = ({ divider }) => {
  return (
    <Grid rowSpacing={2}>
      {divider && <Divider sx={{py: '1rem'}}> ó </Divider>}
      <Button
        fullWidth
        variant='contained'
        startIcon={<FcGoogle />}
        sx={{
          background: '#fff',
          color: '#1976d2',
          ':hover': {
            color: '#fff'
          }
        }}
      > Iniciar Session con Google </Button>
    </Grid>
  );
};
