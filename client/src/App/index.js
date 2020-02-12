import React, { Fragment } from 'react'
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';

import Login from '../Views/Login';
import ListOrder from '../Views/ListOrder';
import Menu from '../Views/Menu';
import Admin from '../Views/Admin';
import { styles } from './styles';

import { isLogin } from '../@store/Auth';
import { checkTokenRequest } from '../@store/Auth/thunk';
import NavDropDown from '../Views/@components/NavDropDown';


class App extends React.Component {

  componentDidMount() {
    this.props.actions.checkToken();
  } 

  render() {
    const { classes, isLogin } = this.props;
    return (
        <div>
        { !isLogin ? <Login /> :
        (
          <Fragment>
            <header className={classes.headerAll}>
              <NavDropDown />
            </header>

            <main className={classes.main}>
              <Route exact path="/orders" component={ListOrder} />
              <Route exact path="/Menu-us" component={Menu} />
              <Route exact path="/Admin" component={Admin} />
            </main>
        </Fragment>
        )}
      </div>
    )
  }
}
const mapStatetoProps = createStructuredSelector({
  isLogin
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      checkToken: checkTokenRequest
    },
    dispatch
  ),
});


export default  withRouter(connect(mapStatetoProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(App)))
