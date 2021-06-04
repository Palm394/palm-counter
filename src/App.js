import { AppBar, Container, Typography } from '@material-ui/core'
import React from 'react'
import Player from './component/Player.js'
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom'
import Admin from './component/Admin.js'

function App() {
  return (
    <>
        <Router>
            <AppBar position='relative' color='primary'>
              <Typography variant='h3' align='center'>Palm - Counter</Typography>
            </AppBar>
            <Switch>
                <Route exact path='/'>
                  <Container style={{display:'flex',flexWrap:'wrap'}}>
                    <Player name="Arsonist" />
                    <Player name="Catalyst" />
                    <Player name="Inhibitor" />
                    <Player name="Detective" />
                    <Player name="(Another) ByStander" />
                    <Player name="Palm" />
                  </Container>
                </Route>
                <Route path='/admin'>
                  <Admin />
                </Route>
            </Switch>
            

          
        </Router>
          
          
    </>
  );
}

export default App;
