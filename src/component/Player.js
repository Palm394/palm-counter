import { Card, makeStyles, Typography } from '@material-ui/core'

const useStyle = makeStyles({
    root: {
        width: 250,
        height: 130,
        margin: '1.5em'
    },
})

const Player = ({ name , pts }) => {
    const classes = useStyle()

    return (
        <Card variant="outlined" className={classes.root}>
            <Typography align='center' variant='h5'>{name}</Typography>
            <hr />
            <Typography align='center' variant='h2'>{pts}</Typography>
        </Card>
    )
}

export default Player
