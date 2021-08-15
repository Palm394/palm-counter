import { AppBar, Container, Typography } from '@material-ui/core'
import React, {useState,useEffect} from 'react'
import Player from './component/Player.js'
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom'
import axios from 'axios'

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
    <>
        <Router>
            <AppBar position='relative' color='primary'>
              <Typography variant='h3' align='center'>Palm - Counter</Typography>
            </AppBar>
            <Switch>
                <Route exact path='/'>
                  <Container style={{display:'flex',flexWrap:'wrap'}}>
                    {Object.entries(score).map(([key,value]) => <Player key={key} name={key} pts={value}/>)}
                  </Container>
                </Route>
            </Switch>
        </Router>
          
          
    </>
  );
}

export default App;
