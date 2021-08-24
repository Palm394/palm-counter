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
              <Box style={{display:'flex'}}>
                <Container style={{width:'74vw'}}>
                  <LastScore />
                  <Container style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
                    <Router>
                      <Switch>
                        <Route path='/season/:ss' component={Players} />
                        <Route exact path='/' component={Players} />
                      </Switch>
                    </Router>
                  <Developer />
                  </Container>
                </Container>
                <Router>
                  <Switch>
                    <Route path='/season/:ss' component={SideBar} />
                    <Route exact path='/' component={SideBar} />
                  </Switch>
                </Router>
            
              </Box> 
    </ThemeProvider>
  );
}

export default App;
