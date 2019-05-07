import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core';

export default class Login extends Component {

  state = {
    password: '',
    userName: '',
  };

  handleLogIn = () => this.props.actions.logIn(this.state.userName, this.state.password);

  render() {
    
    const { classes, rememberMeValue } = this.props;
    const { rememberMe } = this.props.actions
    return (
        <Paper className={classes.paperMain} elevation={1}>
          <Grid container  direction="column" alignItems="center">
            <Grid item className={classes.header}>
              <Typography variant="h5" className={classes.headerTypo}>
                Sign up
              </Typography>
              <Divider variant="middle" style={{height: 2}}/>
            </Grid>
            <Grid item className={classes.root}>
              <TextField
                id="outlined-name"
                label="Name"
                onChange={ e => this.setState({ userName: e.target.value })}
                margin="normal"
                variant="outlined"
                className={classes.textField}
              />
            </Grid>
            <Grid item>
              <TextField
              id="outlined-password-input"
              label="Password"
              autoComplete="current-password"
              type="password"
              margin="normal"
              variant="outlined"
              onChange={ e => this.setState({ password: e.target.value })}
              className={classes.textField}
              />
            </Grid>
            <Grid item className={classes.root}>
              <FormControlLabel classes={{label: classes.chkLabel}}
                control={
                  <Checkbox color="default" checked={rememberMeValue} onChange={rememberMe}/>
                }
                label="Remember me?"
              />
            </Grid>
            <Grid item>
              <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
                <Grid item>
                  <Button variant="contained" onClick={ this.handleLogIn }>
                    Log in!
                  </Button>
                </Grid>
                <Grid item>
                  <Typography>
                    or
                  </Typography>
                </Grid>
                <Grid item>
                  <Button variant="outlined" onClick={ () => console.log('sign in popup') }>
                      Sign in!
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      </Paper> 
    );
  }
}
