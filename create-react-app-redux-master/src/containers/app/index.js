import React from 'react'
import { Route, Link } from 'react-router-dom'
import ListOrder from '../ListOrder'
import Menu from '../Menu'
import { styles } from './styles'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const App = ({ classes }) => (
  <div>
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
  </div>
)

export default (withStyles(styles, { withTheme: true })(App))
