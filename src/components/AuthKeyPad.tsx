import React, { FC, useState } from 'react';
import { Divider, Grid, Button } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { AuthKeyPadProps } from '@types-app/components/AuthKeyPad.type';

export const AuthKeyPad:FC<AuthKeyPadProps> = ({ divider = false, onClick }) => {
  return (
    <Grid rowSpacing={2}>
      {divider && <Divider data-testid='divider' sx={{py: '1rem'}}> ó </Divider>}
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
        onClick={onClick}
      > Iniciar Session con Google </Button>
    </Grid>
  );
};
