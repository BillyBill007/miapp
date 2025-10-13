import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import animal from './assets/animal.jpg'
import { Stack } from '@mui/system';


function App() {
  const [count, setCount] = useState(0)

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

    <Stack direction={{ xs: 'row', sm: 'column' }}
    spacing={{ xs: 1, sm: 2 }} 
    sx={{justifyContent: "center",alignItems: "center"}}>
      <div>
         <Avatar sx={{height:'300px', width:'300px'}} src={animal} className="animal" alt="Animal"></Avatar>
      </div>
      <Typography variant='h2'>Rasca al animal</Typography>
      <div className="card">
        <Button size='large' variant='text' sx={{color: 'red', backgroundColor: 'black'}} onClick={() => setCount((count) => count + 1)}>
          Me has hecho {count} rascaditas
        </Button>
      </div>
      </Stack>
    </>
  )
}

export default App