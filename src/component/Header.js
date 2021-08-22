import React from 'react'
import { AppBar , makeStyles, Typography } from '@material-ui/core'

const useStyle = makeStyles(() => ({
    typoMain:{
        fontSize: '4vw'
    },
    typoSecond: {
        fontSize: '2.1vw'
    }
}))

function Header() {
    const classes = useStyle()
    return (
        <AppBar style={{height:'fit-content',paddingTop: '10px',paddingBottom: '20px'}} position='relative' color='primary'>
              <Typography className={classes.typoMain} align='center'>Palm - Counter</Typography>
              <Typography className={classes.typoSecond} variant='h5' align='center'>“Wait.. When did Palm comes?”</Typography>
        </AppBar>
    )
}

export default Header
