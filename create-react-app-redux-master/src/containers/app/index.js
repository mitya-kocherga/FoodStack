import React from 'react'
import { Route, Link } from 'react-router-dom'
import ListOrder from '../ListOrder'
import Menu from '../Menu'

const App = () => (
  <div>
    <header>
      <Link to="/">ListOrder</Link>
      <Link to="/Menu-us">Menu</Link>
    </header>

    <main>
      <Route exact path="/" component={ListOrder} />
      <Route exact path="/Menu-us" component={Menu} />
    </main>
  </div>
)

export default App
