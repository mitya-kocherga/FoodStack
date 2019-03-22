import React, { Component }  from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper';

export default class ListOrder extends Component {

  render() {
    const { classes } = this.props;
    
    return (
      <Paper className={classes.root}>
        <h1>Home</h1>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="centre">Who</TableCell>
              <TableCell align="centre">What</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
                <TableCell component="th" scope="row" align="centre">Паша</TableCell>
                <TableCell component="th" scope="row" align="centre">Борщ</TableCell>
            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row" align="centre">Паша</TableCell>
                <TableCell component="th" scope="row" align="centre">Борщ</TableCell>
            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row" align="centre">Паша</TableCell>
                <TableCell component="th" scope="row" align="centre">Борщ</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      )
  }
}