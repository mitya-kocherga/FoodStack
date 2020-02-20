import React, { Fragment, useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Table from '@material-ui/core/Table'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import { withStyles, makeStyles } from '@material-ui/core/styles'

import { showNamesOfOrderedCourses } from './showNamesOfOrderedCourses'
import { ModalWindow } from './ModalWindow'
import { ConfirmOrderModalTable } from './confirmOrderModalTable'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#BCF5BB'
  },
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
  table: {
    width: 1000,
    maxWidth: 1200
  },
  buttonAdd: {
    backgroundColor: '#BCF5BB'
  },
  paperDefault: {
    width: 1000,
    maxWidth: 1200,
    margin: 'auto'
  }
})

export const OrderMeal = (props) => {
  const classes = useStyles()

  const handleAddAction = (course, item) => {
    props.actions.addCoursesAction({
      type: item,
      ...course
    })
  }

  const handleDeleteAction = (item, id) => {
    props.actions.deleteItemFromOrderAction({
      item,
      id
    })
  }

  const totalPrice = () => {
    let sum = 0
    for (let i = 0; i < props.listOfOrder.length; i++) {
      sum += props.listOfOrder[i].price
    }
    return (<p>Общая стоимость: { sum } рубасиков</p>)
  }
  return (
    <TableContainer className={ classes.paperDefault } component={ Paper }>
      <Table className={ classes.table }>
        <TableHead>
          <TableRow>
            <StyledTableCell>Блюдо: </StyledTableCell>
            <StyledTableCell align="center">Предварительный заказ: </StyledTableCell>
            <StyledTableCell/>
          </TableRow>
        </TableHead>
        <TableBody>
          { props.menuList.length ? props.menuList.map((item, i) => {
            return (

              <StyledTableRow key={ i }>
                <StyledTableCell component="th" scope="row">{ item } </StyledTableCell>
                { props.dishesOptions[item] && props.dishesOptions[item].length !== 0 ? (
                    <Fragment>
                      <StyledTableCell align="center">
                        Выбранное блюдо:
                        <TableRow>{ showNamesOfOrderedCourses(item, props) }</TableRow>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <ModalWindow
                          item={ item }
                          addCoursesAction={ props.actions.addCoursesAction }
                          options={ props.dishesOptions[item] }
                          header={ 'Добавить блюдо' }
                          icon={ <AddIcon/> }
                          handleAddAction={ handleAddAction }
                        />
                        <ModalWindow
                          currentDish={ props.currentDish[item] }
                          props={ props }
                          handleDeleteAction={ handleDeleteAction }
                          item={ item }
                          options={ props.dishesOptions[item] }
                          header='Изменить выбор'
                          iconDelete={ <DeleteIcon/> }
                          icon={ <EditIcon/> }
                          color="primary"
                          listOfOrder={ props.listOfOrder }
                        />
                      </StyledTableCell>
                    </Fragment>
                  ) :
                  <StyledTableCell align="center">'there is no dishes this type for today' </StyledTableCell>
                }
              </StyledTableRow>
            )
          }) : 'Tut nichego net' }
          <StyledTableRow>
            <StyledTableCell/>
            <StyledTableCell/>
            <StyledTableCell align="right">{ totalPrice() }</StyledTableCell>
          </StyledTableRow>
          <TableRow>
            <TableCell>
              <p>Адрес доставки</p>
              <TextField id="standard-basic" label="Standard"/>
            </TableCell>
            <TableCell/>
            <TableCell/>
          </TableRow>
          <StyledTableRow>
            <StyledTableCell/>
            <StyledTableCell align="center">

              <ConfirmOrderModalTable
                listOfOrder={ props.listOfOrder }
              />

            </StyledTableCell>
            <StyledTableCell/>

          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}



