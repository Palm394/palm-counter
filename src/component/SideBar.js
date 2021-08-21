import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#C4C4C4',
        height: '82vh',
        width:'26vw',
    },
    tab: {
        backgroundColor: '#677DF5',
        margin:'0 auto',
        color: 'white',
        width:'100%',
        fontSize:'30px'
    }
}))

const SideBar = () => {
    const classes = useStyles()
    let t = []
    for(let i=1;i <= 2;i++){
        t.push(<Tab key={i} className={classes.tab} label={`Season ${i}`} />)
    }

    return (
    <Tabs className={classes.root} orientation="vertical">
        {t}
    </Tabs>
    )
}

export default SideBar
