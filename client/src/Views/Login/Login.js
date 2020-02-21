import React, { Component } from 'react';
import { Button, Checkbox, Divider, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core';

import SignIn from '../@components/SignIn';

export default class Login extends Component {

  state = {
    password: '',
    userName: '',
  };

  handleLogIn = () => this.props.actions.logIn(this.state.userName, this.state.password);

  render() {
    const { classes, rememberMeValue, actions: {rememberMe} } = this.props;

    return (
        <Paper className={classes.paperMain} elevation={1}>
          <Grid container  direction="column" alignItems="center">
            <Grid item className={classes.header}>
              <Typography variant="h5" className={classes.headerTypo}>
                Sign up
              </Typography>
              <Divider variant="middle" style={{height: 2}}/>
            </Grid>
            <Grid item>
              <TextField
                label="Name"
                onChange={ e => this.setState({userName: e.target.value})}
                margin="normal"
                variant="outlined"
                className={classes.textField}
              />
            </Grid>
            <Grid item>
              <TextField
              label="Password"
              autoComplete="current-password"
              type="password"
              margin="normal"
              variant="outlined"
              onChange={ e => this.setState({password: e.target.value})}
              className={classes.textField}
              />
            </Grid>
            <Grid item>
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
                  <Button variant="contained" onClick={this.handleLogIn}>
                    Log in!
                  </Button>
                </Grid>
                <Grid item>
                  <Typography>
                    or
                  </Typography>
                </Grid>
                <Grid item>
                  <SignIn />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      </Paper> 
    );
  };
};
