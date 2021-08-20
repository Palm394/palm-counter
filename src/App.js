import { AppBar, Container, Typography } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React, {useState,useEffect} from 'react'
import Player from './component/Player.js'
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom'
import axios from 'axios'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Londrina Solid',
      'cursive',
    ].join(','),
  },});

function App() {

  const [score, setScore] = useState([]) 

  async function callAPI(){
    const result = await axios(`${process.env.REACT_APP_API}`)
    setScore(result.data)
  }
  useEffect(() => {
    callAPI()
  },[])

  return (
    <ThemeProvider theme={theme}>
        <Router>
            <AppBar style={{paddingTop: '10px',paddingBottom: '20px'}} position='relative' color='primary'>
              <Typography variant='h2' align='center'>Palm - Counter</Typography>
              <Typography variant='h5' align='center'>“Wait.. When did Palm comes?”</Typography>
            </AppBar>
            <Switch>
                <Route exact path='/'>
                  <Container style={{display:'flex',flexWrap:'wrap'}}>
                    {Object.entries(score).map(([key,value]) => <Player key={key} name={key} pts={value}/>)}
                  </Container>
                </Route>
            </Switch>
        </Router>
          
          
    </ThemeProvider>
  );
}

export default App;
