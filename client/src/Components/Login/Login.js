import React, { Component } from 'react';
import classNames from 'classnames';
import Select from 'react-select';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';


function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

export default class Login extends React.Component {

  /** в логине используется автозаполнение, это его функции написаны выше.
   * можно начать вводить имя юзера и оно отфильтрует запрос
   * 
   */
  state = {
    single: null,
    suggestions: []
  };

  handleChange = name => value => {
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    /**запрос который возвращает всех юзеров */
    fetch('/users')
      .then(res => res.json())
      .then(suggestions => this.setState({ suggestions }))
      .catch(error => console.error(error));
  }

  render() {
    let { suggestions } = this.state; 

    suggestions = suggestions.map(suggestion => ({
      value: suggestion.userName,
      label: suggestion.userName,
    }));
    const { classes, theme } = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit',
        },
      }),
    };

    return (
        <Paper className={classes.paperMain} elevation={1}>
            <Grid container  direction="column" alignItems="center">
                <Grid item className={classes.root}>
                    <Select
                        classes={classes}
                        styles={selectStyles}
                        options={suggestions}
                        components={components}
                        value={this.state.single}
                        onChange={this.handleChange('single')}
                        placeholder="Tell me who you are.."
                        isClearable
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
                <Grid item> 
                    <Button
                    color="secondary"
                    variant="contained"
                    onClick={()=>this.props.actions.logIn({ user: this.state.single })}
                    >
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
                        body : JSON.stringify({userName: 'LittleBo$$', isAdmin: false, password: this.state.password })
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
