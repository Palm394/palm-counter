import { Card, makeStyles, Typography } from '@material-ui/core'

const useStyle = makeStyles({
    root: {
        width: 210,
        height: 140,
        margin: '2em',
        borderRadius: '25px',
        backgroundColor: '#DDDBDB',
        boxShadow: '#4E4E4E 7px 7px',
        paddingBottom: '10px',
    },
    header: {
        color: 'white',
        backgroundColor: '#777777',
        paddingTop: '0.2em',
        paddingBottom: '0.2em',
        marginBottom: '0.4em',
    }
})

const Player = ({ name , pts }) => {
    const classes = useStyle()

    return (
        <Card variant="outlined" className={classes.root}>
            <Typography className={classes.header} align='center' variant='h4'>{name}</Typography>
            <Typography align='center' variant='h2'>{pts}</Typography>
        </Card>
    )
}

export default Player
