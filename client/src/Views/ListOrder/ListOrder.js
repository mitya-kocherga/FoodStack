import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'

import { getToken } from '../../@common/getToken'

export default class ListOrder extends Component {
  state = {
    orders: []
  }

  componentDidMount() {
    /**
     * запрос который загружает все заказы
     */
    fetch('/orders', { headers: { token: getToken() } })
      .then(res => res.json())
      .then(orders => this.setState({ orders }))
      .catch(error => console.error(error))
  }


  render() {
    const { classes } = this.props

    return (
      <Paper className={ classes.root }>
        <h1>Home</h1>
        <Table className={ classes.table }>
          <TableHead>
            <TableRow>
              <TableCell align="center">Who</TableCell>
              <TableCell align="center">What</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { this.state.orders.map((order, index) => (
              <TableRow key={ index }>
                <TableCell component="th" scope="row" align="center">{ order.userName }</TableCell>
                <TableCell component="th" scope="row" align="center">{ order.choice.map(m =>
                  <Typography>
                    { m.value }
                  </Typography>)
                }</TableCell>
                <TableCell component="th" scope="row" align="center"><Button onClick={ () => (
                  /**это запрос для удаления конкретного заказа */
                  fetch('orders/remove-order', {
                    method: 'DELETE',
                    headers: {
                      'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: order._id })
                  }).catch(error => console.error(error)))
                }>{ order._id }</Button></TableCell>
              </TableRow>
            )) }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}