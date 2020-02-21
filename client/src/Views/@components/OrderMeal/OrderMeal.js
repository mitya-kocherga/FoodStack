import React, { Fragment, useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Table from '@material-ui/core/Table'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'


import { showNamesOfOrderedCourses } from './common/showNamesOfOrderedCourses'
import { ModalWindow } from './ModalWindow'
import { ConfirmOrderModalTable } from './confirmOrderModalTable'

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

export const OrderMeal = (props) => {
  const [ address, setAddress ] = useState('')

  const handleChangeAddress = (e) => {
    setAddress(e.target.value)
  }

  const handleAddAction = (course, item) => {
    props.actions.addCoursesAction({
      type: item,
      ...course
    })
  }

  const handleMakeOrderAction = (payload) => {
    props.actions.makeOrder(payload)
  }

  const handleDeleteAction = (item, id) => {
    props.actions.deleteItemFromOrderAction({
      item,
      id
    })
  }
  return (
    <TableContainer className={ props.classes.paperDefault } component={ Paper }>
      <Table className={ props.classes.mainTable }>
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

              <StyledTableRow key={ i } size="small" hover="true">
                <StyledTableCell className={ props.classes.tableCellTypeOfDish } component="th"
                                 scope="row">{ item } </StyledTableCell>
                { props.dishesOptions[item] && props.dishesOptions[item].length !== 0 ? (
                    <Fragment>
                      <StyledTableCell className={ props.classes.tableCellDishes } align="center">
                        <TableRow>{ showNamesOfOrderedCourses(item, props) }</TableRow>
                      </StyledTableCell>
                      <StyledTableCell className={ props.classes.tableCellButtons } align="right">
                        <ModalWindow
                          classes={ props.classes }
                          item={ item }
                          addCoursesAction={ props.actions.addCoursesAction }
                          options={ props.dishesOptions[item] }
                          header={ 'Добавить блюдо' }
                          icon={ <AddIcon/> }
                          handleAddAction={ handleAddAction }
                        />
                        <ModalWindow
                          classes={ props.classes }
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
                  <StyledTableCell align="center">
                    'there is no dishes this type for today'
                  </StyledTableCell>
                }
              </StyledTableRow>
            )
          }) : 'Tut nichego net' }
          <TableRow>
            <TableCell>
              <p>Адрес доставки</p>
              <TextField
                onChange={ e => handleChangeAddress(e) }
                label="Введите адрес"
              />
            </TableCell>
            <TableCell/>
            <TableCell/>
          </TableRow>
          <StyledTableRow>
            <StyledTableCell/>
            <StyledTableCell align="center">
              <ConfirmOrderModalTable
                classes={ props.classes }
                handleMakeOrderAction={ handleMakeOrderAction }
                address={ address }
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



