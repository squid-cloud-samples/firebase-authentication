import * as React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import LoginButton from './login-button';
import LogoutButton from './logout-button';

type AuthProps = {
  isAuthenticated: Boolean;
  onSignOut: () => void;
  onSignIn: () => void;
};

const NavBar: React.FC<AuthProps> = ({
  isAuthenticated,
  onSignOut,
  onSignIn,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Firebase Auth Integration
          </Typography>
          {!isAuthenticated && <LoginButton onSignIn={onSignIn} />}
          {isAuthenticated && <LogoutButton onSignOut={onSignOut} />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
