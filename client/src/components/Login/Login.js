import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core';

export default class Login extends React.Component {

  state = {
    password: '',
    userName: '',
  };

  handleLogIn = () => this.props.actions.logIn(this.state.userName, this.state.password);

  render() {
    
    const { classes } = this.props;
    console.log(this.props);
    
    return (
        <Paper className={classes.paperMain} elevation={1}>
          <Grid container  direction="column" alignItems="center">
            <Grid item className={classes.root}>
              <Typography variant="h5">
                Sign up
              </Typography>
              <Divider />
            </Grid>
            <Grid item className={classes.root}>
              <TextField
                id="outlined-name"
                label="Name"
                className={classes.textField}
                //value={}
                onChange={ e => this.setState({ userName: e.target.value })}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item className={classes.root}>
              <TextField
              id="outlined-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              onChange={ e => this.setState({ password: e.target.value }) }
              />
            </Grid>
            <Grid item className={classes.root}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={true}
                    onChange={() => {}}
                    color="primary"
                  />
                }
                label="Remember me?"
              />
            </Grid>
            <Grid item> 
                <Button
                color="secondary"
                variant="contained"
                onClick={ this.handleLogIn }>
                    Sign in
                </Button>
            </Grid>
            <Grid item> 
                <Button
                color="primary"
                variant="text"
                onClick={() => fetch('users/add-user',{
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'application/json',
                    },
                    body : JSON.stringify({userName:  this.state.userName, isAdmin: false, password: this.state.password })
                    }).catch(error => console.error(error))
                    /**этот запрос добавляет юзера  */
                }
                >
                    add user
                </Button>
            </Grid>
        </Grid>
      </Paper> 
    );
  }
}
