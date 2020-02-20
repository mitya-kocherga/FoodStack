import React, { Fragment, useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Table from '@material-ui/core/Table'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { TableHead } from '@material-ui/core'


import { showNamesOfOrderedCourses } from './showNamesOfOrderedCourses'
import { ModalWindow } from './ModalWindow'


export const OrderMeal = (props) => {
  const typeOfButton = ["edit", "add"]

  const handleAddAction = (course, item) => {
    props.actions.addCoursesAction({
      type: item,
      name: course.name,
      price: course.price,
      value: course.value
    })
  }

  const handleDeleteAction = (item, id) => {
    props.actions.deleteItemFromOrderAction({
      item,
      id
    })
  }

  const handleChangeAction = () => {

  }

  return (
    <Fragment>
      <Table className={ props.classes.Table }>
        <TableBody>
          <TableHead>
            <TableCell component="th" scope="row" align="center">Блюдо: </TableCell>
            <TableCell component="th" scope="row" align="center">Предварительный заказ: </TableCell>
          </TableHead>
          { props.menuList.length ? props.menuList.map((item, i) => {
            return (
              <TableRow key={ i }>
                <TableCell component="th" scope="row" align="center">{ item } </TableCell>
                { props.dishesOptions[item] && props.dishesOptions[item].length !== 0 ? (
                  <Fragment>
                    <ModalWindow
                      typeOfButton = { typeOfButton[1] }
                      item={ item }
                      addCoursesAction={ props.actions.addCoursesAction }
                      options={ props.dishesOptions[item] }
                      header="Добавить еду"
                      icon={ <AddIcon/> }
                      handleAddAction={ handleAddAction }
                    />
                    <ModalWindow
                      typeOfButton = { typeOfButton[0]}
                      handleDeleteAction = { handleDeleteAction}
                      item={ item }
                      options={ props.dishesOptions[item] }
                      header='изменить выбор'
                      iconDelete={ <DeleteIcon/>}
                      icon={ <EditIcon/> }
                      color="primary"
                      listOfOrder={props.listOfOrder}
                    />
                    <TableRow>
                      <p>
                        Выбранное блюдо: { showNamesOfOrderedCourses(item, props) }
                      </p>
                    </TableRow>
                  </Fragment>
                ) : 'there is no dishes this type for today' }
              </TableRow>
            )
          }) : 'Tut nichego net' }
          <TableRow align="center">
            <TableCell>
              <Button
                color="secondary"
                variant="contained"
                // onClick={() => this.addMenu(firstCourseSelectors)}//запрос для добавления заказа
              >
                Заказать
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Fragment>
  )
}



