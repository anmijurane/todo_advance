import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import type { FormLogin } from '../../Types/Forms';
import useDispatch from '../../hooks/useDispatch';
import { Link } from '../../custom/components/Link';

export const RecoverPassword = () => {

  const { LoginAction } = useDispatch();

  const handleSubmitLogin = ( event: React.FormEvent<FormLogin> ) => {
    event.preventDefault();
    //TODO: The remember me action will be for a future implementation
    const { email, password } = event.currentTarget.elements;
    LoginAction({ email: email.value, password: password.value });
  };

  return (
    <Container component="main" maxWidth="xl">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h2" variant="h2">
          Recuperar Contraseña
        </Typography>
        <Box component="form" onSubmit={handleSubmitLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Recuperar Cuenta
          </Button>
          <Divider>ó</Divider>
          <Grid container>
            <Grid item xs>
              <Link to='/auth/login' variant="body2">
                Iniciar Sesion
              </Link>
            </Grid>
            <Grid item>
              <Link to='/auth/register' variant="body2">
                Registrate aquí.
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
