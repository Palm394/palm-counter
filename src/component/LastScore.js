import { Typography,makeStyles } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import axios from 'axios'

const useStyle= makeStyles((theme) => ({
    text: {
        color: theme.palette.text.main,
        marginTop: '16px',
        marginBottom: '8px',
    },
}))

const LastScore = () => {
    const classes = useStyle()
    const [data,setData] = useState({})

    async function callAPI(){
        const result = await axios(`${process.env.REACT_APP_API}/last-score`)
        setData(result.data)
    }

    useEffect(() => {
        callAPI()
    },[])

    return (
        <Typography className={classes.text} variant='h5'>last score by {data.name}, at {data.time} {data.date}</Typography>
    )
}

export default LastScore
