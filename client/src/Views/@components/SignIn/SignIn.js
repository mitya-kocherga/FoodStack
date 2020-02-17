import React, { Fragment, useState } from 'react'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  Grid,
  TextField,
  Typography
} from '@material-ui/core'

export const SignIn = ({ classes, signing, actions: { signInRequest, setSigning } }) => {
  const [ userName, setUserName ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPass, setConfirmPassword ] = useState('')


  const checkValidation = () => confirmPass === password && !!userName.trim()

  return (
    <Fragment>
      <Button variant="outlined" onClick={ () => setSigning(true) }>
        Sign in!
      </Button>
      <Dialog
        PaperProps={ {
          className: classes.paperMain
        } }
        open={ signing }
        onClose={ () => setSigning(false) }
      >
        <Typography variant="h5" className={ classes.headerTypo }>
          Sign up
        </Typography>
        <Divider variant="middle" style={ { height: 2 } }/>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your name & choose password.
          </DialogContentText>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <TextField
                label="Name"
                onChange={ e => setUserName(e.target.value) }
                margin="normal"
                variant="outlined"
                className={ classes.textField }
              />
            </Grid>
            <Grid item>
              <TextField
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                onChange={ e => setPassword(e.target.value) }
                className={ classes.textField }
              />
            </Grid>
            <Grid item>
              <TextField
                label="Confirm password"
                type="password"
                margin="normal"
                variant="outlined"
                onChange={ e => setConfirmPassword(e.target.value) }
                className={ classes.textField }
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions classes={ { action: classes.actions } }>
          <Button variant="contained" onClick={ () => signInRequest(userName, password) }
                  disabled={ !checkValidation() }>
            Sign me
          </Button>
          <Button variant="outlined" onClick={ () => setSigning(false) }>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}
