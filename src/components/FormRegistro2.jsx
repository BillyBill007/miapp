// src/components/FormRegistro.jsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Ficha from './Ficha'; // Importar Ficha

function FormRegistro2() {
  const [datos, setDatos] = useState({ nombre: '', raza: '' });
  const [registrado, setRegistrado] = useState(false); // Nuevo estado

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistrado(true); // Marcar como registrado
  };

  const manejarCambioNombre = (e) => {
    setDatos({ ...datos, nombre: e.target.value });
  };

  const manejarCambioRaza = (e) => {
    setDatos({ ...datos, raza: e.target.value });
  };

  return (
    <Container>
      <Paper elevation={3} square={false} sx={{ textAlign: 'center' }}>
        <Typography variant='h6' color='primary' sx={{ mt: 2, mb: 2 }}>
          Registra tu mascota
        </Typography>
        <Box component='form' onSubmit={handleSubmit} sx={{ p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label='Nombre de mascota'
                variant='outlined'
                fullWidth
                value={datos.nombre}
                onChange={manejarCambioNombre}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label='Raza'
                variant='outlined'
                fullWidth
                value={datos.raza}
                onChange={manejarCambioRaza}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='outlined' fullWidth>
                Registrar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      {registrado && (
        <Box sx={{ mt: 4 }}>
          <Ficha nombre={datos.nombre} raza={datos.raza} />
        </Box>
      )}
    </Container>
  );
}

export default FormRegistro2;
