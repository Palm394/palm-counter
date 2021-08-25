import React from 'react'
import { AppBar, Typography } from '@material-ui/core'

function Header() {
    return (
        <AppBar style={{height:'fit-content',paddingTop: '10px',paddingBottom: '20px'}} position='relative' color='primary'>
              <Typography variant='h2' align='center'>Palm - Counter</Typography>
              <Typography variant='h5' align='center'>“Wait.. When did Palm comes?”</Typography>
        </AppBar>
    )
}

export default Header
