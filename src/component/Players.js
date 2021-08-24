import React, {useEffect , useState} from 'react'
import Player from './Player.js'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Players = () => {

    const { ss } = useParams()
    const [score, setScore] = useState([]) 

    useEffect(() => {
        async function callAPI(){
            const result = await axios(`${process.env.REACT_APP_API}/score?season=${ss === undefined ? process.env.REACT_APP_LAST_SS : ss}`)
            setScore(result.data)
          }
        callAPI()
    },[ss])

    return (
        <>
            {Object.entries(score).map(([key,value]) => <Player key={key} name={key} pts={value}/>)}
        </>
    )
}

export default Players
