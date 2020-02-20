import React, { Fragment, useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import { TableHead } from '@material-ui/core'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'


const StyledTableCell = withStyles(theme => ({
  body: {
    fontSize: 14
  }
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow)

const useStyles = makeStyles({
  rootDialog: {},
  listOfOrderModal: {
    width: 400,
    margin: 20
  },
  divButtonAdd: {
    margin: 10,
    textAlign: 'center'
  },
  buttonAdd: {
    backgroundColor: '#BCF5BB'
  },
  tableTitle: {
    textAlign: 'center'
  },
  tableItem: {
    textAlign: 'end'
  }
})

export const ConfirmOrderModalTable = ({ listOfOrder }) => {
  const [ isOpen, setOpen ] = useState(false)
  const classes = useStyles()
  const handleOpenAndClose = () => setOpen(!isOpen)

  const totalPrice = () => {
    let sum = 0
    for (let i = 0; i < listOfOrder.length; i++) {
      sum += listOfOrder[i].price
    }
    return (<p>Общая стоимость: { sum } рубасиков</p>)
  }

  return (
    <Fragment>
      <Button
        className={ classes.buttonAdd }
        variant="contained"
        onClick={ handleOpenAndClose }
      >
        Заказать
      </Button>
      <Dialog onClose={ handleOpenAndClose } open={ isOpen } className={ classes.rootDialog }>
        { listOfOrder.length !== 0 ?
          <div>
            <TableContainer className={ classes.listOfOrderModal } component={ Paper }>
              <Table className={ classes.table }>
                <TableHead>
                  <TableRow className={ classes.tableTitle }>Важ заказ </TableRow>
                </TableHead>
                <TableBody>
                  { listOfOrder.map((item, i) =>
                    <StyledTableRow className={ classes.listOfOrderModal } key={ i }>
                      <StyledTableCell component="th" scope="row">{ item.name } </StyledTableCell>
                      <StyledTableCell className={ classes.tableItem } component="th"
                                       scope="row">{ item.price } руб. </StyledTableCell>
                    </StyledTableRow>
                  ) }
                  <TableRow>
                    <TableCell align="end">{ totalPrice() }</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <div className={classes.divButtonAdd}>
              <Button className={ classes.buttonAdd }
                // onClick={() => addMenu(firstCourseSelectors)}//запрос для добавления заказа
              >
                Подтвердить заказ
              </Button>
            </div>
          </div>
          : 'Tuta nichego' }
      </Dialog>
    </Fragment>
  )
}