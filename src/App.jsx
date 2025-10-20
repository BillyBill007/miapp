import './App.css'
import { useState } from 'react'
//import FormRegistro2 from './components/FormRegistro2.jsx';
import Ficha from './components/Ficha.jsx';
import {cat, dog, bird, turtle } from './assets/index.js'

function App() {
  const animals = [
    {
      id: 0,
      animal: 'gato',
      atribute: 'feliz',
      Image: cat,
      imageSize: 150,
      description: 'Gato común',
    },
    {
      id: 1,
      animal: 'perro',
      atribute: 'bello',
      Image: dog,
      imageSize: 150,
      description: 'Perro callejero',
    },
    {
      id: 2,
      animal: 'loro',
      atribute: 'hablador',
      Image: bird,
      imageSize: 150,
      description: 'Loro de la jungla',
    },
    {
      id: 3,
      animal: 'tortuga',
      atribute: 'perezosa',
      Image: turtle,
      imageSize: 150,
      description: 'Tortuga',
    },
  ];


  return (
    <>
    {/* Lo mismo que esta hacho pero en horizontal
    <Stack
    direction="row"
    spacing={2}
    sx={{
    justifyContent: "center",
    alignItems: "center",
    }}></Stack>*/}

      {/* <FormRegistro2 />*/}
      
       <div>
      <h1>Ficha de animales</h1>
      {animals.map((animal) => 
        <Ficha
          key={animal.id}
          animal={animal.animal}
          atribute={animal.atribute}
          Image={animal.Image}
          imageSize={animal.imageSize}
          description={animal.description}
        />
      )}
    </div>
    </>
  )
}


export default App


