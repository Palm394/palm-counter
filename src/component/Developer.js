import { Typography, makeStyles} from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        color: theme.palette.text.main,
    },
    text: {
        textAlign: 'center',
    }
}))

const Developer = () => {
    const classes = useStyle()
    return (
        <footer className={classes.root}>
            <Typography className={classes.text} variant='h5'>By Palm-Counter team</Typography>
        </footer>
    )
}

export default Developer