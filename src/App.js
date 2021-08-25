import { Container,Box } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';

import React from 'react'
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom'

import { Players, Header, Developer , LastScore, SideBar } from './component/index.js'
import { theme } from './config/theme.js'

function App() {

  return (
    <ThemeProvider theme={theme}>
            <Header />
            <Router>
              <Box style={{display:'flex'}}>
                <Container style={{displat:'flex',flexDirection:'column',justifyContent:'space-around'}}>
                  <LastScore />
                  <Box style={{display:'flex',flexWrap:'wrap',justifyContent:'center',padding:'0 2vw'}}>
                      <Switch>
                        <Route path='/season/:ss' component={Players} />
                        <Route path='/' component={Players} />
                      </Switch>
                  </Box>
                  <Developer />
                </Container>
                  <Switch>
                    <Route path='/season/:ss' component={SideBar} />
                    <Route path='/' component={SideBar} />
                  </Switch>
              </Box> 
            </Router>
    </ThemeProvider>
  );
}

export default App;
