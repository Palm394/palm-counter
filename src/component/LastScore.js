import { Typography,makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle= makeStyles((theme) => ({
    text: {
        color: theme.palette.text.main,
        marginTop: '16px',
        marginBottom: '8px',
    },
}))

const LastScore = ({name='...',time='.. : ..',date='../../....'}) => {
    const classes = useStyle()
    return (
        <Typography className={classes.text} variant='h5'>last score by {name}, at {time} {date}</Typography>
    )
}

export default LastScore
