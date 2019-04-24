import React, { Component, Fragment }  from 'react'

import ListOrder from '../ListOrder'
import Menu from '../Menu'
import Login from '../Login'

export default class Admin extends Component {
  state = {
    orders: [],
    users:[],
  }

/**
 * пока просто отоюражает все компоненты 
 */
  render() {
    const { classes } = this.props;
    
    return (
        <Fragment>
            
            <Login />
            <ListOrder />
            <Menu />

      </Fragment>
      )
  }
}