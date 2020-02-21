import React, { Fragment, useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import pic from './common/nothing_here.png'

const StyledTableCell = withStyles(theme => ({
  body: {
    fontSize: 14
  }
}))(TableCell);
const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

export const ConfirmOrderModalTable = ({ classes, handleMakeOrderAction, listOfOrder, address }) => {
  const [ isOpen, setOpen ] = useState(false);
  const handleOpenAndClose = () => setOpen(!isOpen);

  const totalPrice = () => {
    let sum = 0
    for (let i = 0; i < listOfOrder.length; i++) {
      sum += listOfOrder[i].price
    }
    return (<p>Общая стоимость: { sum } рубасиков</p>)
  };

  const addNewOrder = (payload) => {
    handleMakeOrderAction(payload)
  };

  return (
    <Fragment>
      <Button
        className={ classes.button }
        variant="contained"
        onClick={ handleOpenAndClose }
      >
        Заказать
      </Button>
      <Dialog onClose={ handleOpenAndClose } open={ isOpen } className={ classes.rootDialog }>
        { listOfOrder.length !== 0 ?
          <div>
            <p className={ classes.tableTitle }>Важ заказ </p>
            <TableContainer className={ classes.listOfOrderModal } component={ Paper }>
              <Table className={ classes.table }>
                <TableBody>
                  { listOfOrder.map((item, i) =>
                    <StyledTableRow className={ classes.listOfOrderModal } key={ i }>
                      <StyledTableCell component="th" scope="row">{ item.name } </StyledTableCell>
                      <StyledTableCell className={ classes.tableItem } component="th"
                                       scope="row">{ item.price } руб. </StyledTableCell>
                    </StyledTableRow>
                  ) }
                  <TableRow>
                    <TableCell>
                      Адрес доставки:
                      <p>
                        { address }
                      </p>
                    </TableCell>
                    <TableCell/>
                  </TableRow>
                  <StyledTableRow>
                    <StyledTableCell align="end">
                      { totalPrice() }
                    </StyledTableCell>
                    <StyledTableCell/>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <div align="center">
              <div className={ classes.divButtonAdd }>
                <Button
                  variant="contained"
                  className={ classes.button }
                  onClick={ () => addNewOrder(listOfOrder) }
                >
                  Подтвердить заказ
                </Button>
                <div className={ classes.divButtonAdd }>
                  <Button
                    className={ classes.button }
                    variant="contained"
                    onClick={ handleOpenAndClose }
                  >
                    Вернуться..
                  </Button>
                </div>
              </div>
            </div>
          </div>
          :
          <Grid
            className={ classes.modalWithoutOrder }
            container spacing={ 3 }
            justify="center"
            alignItems="center"
          >
            <Grid
              xs={ 5 }
              item>
              Сначала выбери покушац
            </Grid>
            <Grid
              item
            >
              <img className={ classes.pic } src={ pic } alt='police_from_SP'/>
            </Grid>
            <Grid
              item
            >
              <Button
                variant="contained"
                className={ classes.button }
                onClick={ handleOpenAndClose }
              >
                Вернуться..
              </Button>
            </Grid>
          </Grid>
        }
      </Dialog>
    </Fragment>
  )
}