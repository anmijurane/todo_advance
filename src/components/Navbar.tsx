import React, { FC } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

interface NavbarProps {
  title: React.ReactNode;
  navRigth: React.ReactNode;
};

export const Navbar:FC<NavbarProps> = ({ title, navRigth }) => {

  return (
    <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            { title }
          </Typography>
          <nav>
            {navRigth}
          </nav>
        </Toolbar>
      </AppBar>
  )
}
