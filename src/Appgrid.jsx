// Appgrid.jsx
import React from 'react';
import { Grid } from '@mui/material';  // Usa Grid versión 2
import Button from '@mui/material/Button';

function Appgrid() {
  return (
    <>
    <br></br>
    <br></br>
    
    <Grid container spacing={2}>
      {/* Botón 1 */}
      <Grid xs={12} sm={6} md={4}>
        <Button variant="contained" fullWidth>Botón 1</Button>
      </Grid>

      {/* Botón 2 */}
      <Grid xs={12} sm={6} md={4}>
        <Button variant="contained" fullWidth>Botón 2</Button>
      </Grid>

      {/* Botón 3 */}
      <Grid xs={12} sm={12} md={4}>
        <Button variant="contained" fullWidth>Botón 3</Button>
      </Grid>
    </Grid>
    </>
  );
}

export default Appgrid;
