import { AppBar, Container, Typography } from '@material-ui/core'
import React from 'react'
import Player from './component/Player.js'

function App() {
  return (
    <>
        <AppBar position='relative' color='primary'>
          <Typography variant='h3' align='center'>Palm - Counter</Typography>
        </AppBar>

        <Container style={{display:'flex',flexWrap:'wrap'}}>
          <Player name="Arsonist" />
          <Player name="Catalyst" />
          <Player name="Inhibitor" />
          <Player name="Detective" />
          <Player name="(Another) ByStander" />
          <Player name="Palm" />
        </Container>
          
    </>
  );
}

export default App;
