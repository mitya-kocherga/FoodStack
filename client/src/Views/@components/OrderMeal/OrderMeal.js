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


import { showOrderedCourses } from './showOrderedCourses'
import { ModalWindow } from './ModalWindow'


export const OrderMeal = (props) => {

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
                <TableCell>
                  <p>
                    Выбранное кушац: { showOrderedCourses(item, props) }
                  </p>
                  { props.dishesOptions[item] && props.dishesOptions[item].length !== 0 ? (
                    <Fragment>
                      <ModalWindow
                        item={ item }
                        addCoursesAction={ props.actions.addCoursesAction }
                        options={ props.dishesOptions[item] }
                        header="Добавить еду"
                        icon={ <AddIcon/> }
                        // textFieldLabel={}
                        handleAddAction={ handleAddAction }
                      />
                      <ModalWindow
                        handleDeleteAction = { handleDeleteAction}
                        item={ item }
                        options={ props.dishesOptions[item] }
                        header='изменить выбор'
                        iconDelete={ <DeleteIcon/>}
                        icon={ <EditIcon/> }
                        color="primary"
                        listOfOrder={props.listOfOrder}
                        // textFieldLabel={}
                      />
                    </Fragment>
                  ) : 'there is no dishes this type for today' }
                </TableCell>
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
// actions: {addSelectorFirstAction}
//   props.orderedFirstDishes && props.orderedFirstDishes.map(dish => (
//   item === 'firstDish' ? <span>{dish.name}</span> : 'pusto'
// ))
//   switch (item): {
//   case 'firstDish': props.orderedFirstDishes && props.orderedFirstDishes.map(dish => item === dish.type ? <span>{ dish.name }</span> : 'nothing here');
//   case 'secondDish': ;
//   case 'dietDish': ;
//   case 'desertDish': ;
//   case 'salad': ;
//   default: '' }



