import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import type { FormLogin } from '../../Types/Forms';
import { AuthKeyPad } from '@components/AuthKeyPad';
import useDispatch from '../../hooks/useDispatch';
import { Link } from '../../custom/components/Link';

export const Login = () => {

  const { LoginAction } = useDispatch();

  const handleSubmitLogin = ( event: React.FormEvent<FormLogin> ) => {
    event.preventDefault();
    //TODO: The remember me action will be for a future implementation
    const { email, password } = event.currentTarget.elements;
    LoginAction({ email: email.value, password: password.value });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h2" variant="h2">
          Iniciar Sesion
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contaseña"
            type="password"
          />
          {/* TODO: will be for a future implementation.
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" name='rememberme' />}
            label="Recordarme"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Iniciar Session
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to='/auth/recover-password' variant="body2">
                ¿Olvidaste tu Contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link to='/auth/register' variant="body2">
                ¿No tienes una cuenta? Registrate aquí.
              </Link>
            </Grid>
          </Grid>
          <AuthKeyPad divider />
        </Box>
      </Box>
    </Container>
  );
};
