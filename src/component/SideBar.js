import React from 'react'
import { Button, Hidden} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useParams,Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#C4C4C4',
        minHeight: '83vh',
        width:'18vw',
    },
    tabNon: {
        backgroundColor: '#677DF5',
        color: 'white',
        fontSize:'30px',
        width:'90%',
        height:'1.5em',
        borderRadius:'0 10px 10px 0',
    },
    tabFocus: {
        backgroundColor:'white',
        color:'#677DF5',
        fontSize:'30px',
        width:'90%',
        height:'3em',
        borderRadius:'0 10px 10px 0',
    }
}))

const LAST_SS = parseInt(process.env.REACT_APP_LAST_SS)

const SideBar = () => {
    const classes = useStyles()

    const { ss } = useParams()
    let t = []
    for(let i=1;i <= LAST_SS;i++){
        let style
        if(parseInt(ss) === i){
            style = classes.tabFocus
        }else{
            if(ss === undefined && i === LAST_SS){
                style = classes.tabFocus
            }else{
                style = classes.tabNon
            }
        }
        t.push(<Button component={RouterLink} key={i} to={`/season/${i}`} className={style}>
            {`Season ${i}`}
        </Button>)
    }

    return (
        <Hidden smDown>
            <div className={classes.root}>
                {t}
            </div>
        </Hidden>
    )
}

export default SideBar
