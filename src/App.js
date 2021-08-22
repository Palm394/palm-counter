import { Container,Box } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';

import React, {useState,useEffect} from 'react'
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom'

import { Player, Header, Developer , LastScore, SideBar } from './component/index.js'
import { theme } from './config/theme.js'

import axios from 'axios'

function App() {

  const [score, setScore] = useState([]) 

  async function callAPI(){
    const result = await axios(`${process.env.REACT_APP_API}/score?season=${process.env.REACT_APP_LAST_SS}`)
    setScore(result.data)
  }
  useEffect(() => {
    callAPI()
  },[])

  return (
    <ThemeProvider theme={theme}>
        <Router>
            <Header />
            <Box style={{width: '80%'}}>
              
            </Box>
            <Switch>
                <Route exact path='/'>
                  <Box style={{display:'flex'}}>
                    <Container style={{width:'74vw',height:'80vh'}}>
                      <LastScore />
                      <Container style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
                        {Object.entries(score).map(([key,value]) => <Player key={key} name={key} pts={value}/>)}
                      <Developer />
                      </Container>
                    </Container>
                    <SideBar />
                  </Box>
                </Route>
            </Switch>
        </Router>
    </ThemeProvider>
  );
}

export default App;
