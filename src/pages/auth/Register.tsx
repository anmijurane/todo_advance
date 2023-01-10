import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import { AuthKeyPad } from '@components/AuthKeyPad';
import { Link } from '../../custom/components/Link';
import type { FormRegister } from '../../Types/Forms';
import useDispatch from '../../hooks/useDispatch';

export const Register = () => {

  const { RegisterAction } = useDispatch()

  const handleSubmitRegister = ( event: React.FormEvent<FormRegister> ) => {
    event.preventDefault();
    const {
      passwordConfirm,
      email,
      password,
      phoneNumber,
      surname,
      name
    } = event.currentTarget.elements;
    //TODO: Apply Validations before!
    RegisterAction(
      { email: email.value, password: password.value },
      {
        displayName: `${name.value} ${surname.value}`,
        email: email.value,
        emailVerified: false,
        id: '',
        name: name.value,
        phoneNumber: phoneNumber.value,
        photoURL: '',
        surname: surname.value,
      }
    );
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
          Registrate
        </Typography>
        <Box component="form" onSubmit={handleSubmitRegister} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="name"
            label="Nombre"
            type="text"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="surname"
            label="Apellido"
            type="text"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Correo Electronico"
            name="email"
            autoComplete="email"
            type='email'
          />
          <TextField
            margin="normal"
            fullWidth
            label="Numero de telefono"
            name="phoneNumber"
            type='tel'
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contaseña"
            type="password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="passwordConfirm"
            label="Confirmar Contaseña"
            type="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Iniciar Session
          </Button>
          <Grid container>
            <Grid item>
              <Link to='/auth/login' variant="body2">
                ¿Ya tienes una cuenta? Inicia Session Aqui.
              </Link>
            </Grid>
          </Grid>
          <AuthKeyPad divider />
        </Box>
      </Box>
    </Container>
  );
};
