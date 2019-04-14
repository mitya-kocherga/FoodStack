import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import Login from '../Login'
import ListOrder from '../ListOrder'
import Menu from '../Menu'
import { styles } from './styles'
import { isLogin } from '../../Store/Auth'
import { withRouter } from 'react-router'

class App extends React.Component {

  render() {
    const { classes, isLogin } = this.props;
    return (
        <div>
        { !isLogin ? <Login /> :
        (
          <Fragment>
            <header className={classes.headerAll}>
              <Typography variant="inherit" className={classes.headerMenu}>
                <Link to="/">ListOrder</Link>
              </Typography>
              
              <Typography variant="inherit" className={classes.headerMenu}>
                <Link to="/Menu-us">Menu</Link>
              </Typography>
            </header>

            <main className={classes.main}>
              <Route exact path="/" component={ListOrder} />
              <Route exact path="/Menu-us" component={Menu} />
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

export default  withRouter(connect(mapStatetoProps)(withStyles(styles, { withTheme: true })(App)))
