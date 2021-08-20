import { Container } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import React, {useState,useEffect} from 'react'
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom'

import { Player, Header } from './component/index.js'

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
            <Header />
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
