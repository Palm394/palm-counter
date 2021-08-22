import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#C4C4C4',
        minHeight: '83vh',
        width:'26vw',
        fontSize: '3vw',
    },
}))

const SideBar_Fake = () => {
    const classes = useStyles()
    return (
        <Typography className={classes.root}>กำลังเขียนอยู่ ใจเย็นๆ</Typography>
    )
}

export default SideBar_Fake
