import { Button ,Container,TextField } from '@material-ui/core'
import React from 'react'

function Admin() {
    return (
        <Container>
            <TextField label="ID" variant='standard' />
            <Button>Login</Button>
        </Container>
    )
}

export default Admin
