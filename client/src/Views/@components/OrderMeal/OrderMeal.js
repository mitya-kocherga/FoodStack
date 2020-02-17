import React, { Fragment, useState } from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Table from '@material-ui/core/Table'
import Button from '@material-ui/core/Button'
import { ModalWindow } from './ModalWindow'
import { TableHead } from '@material-ui/core'


export const OrderMeal = (props) => {

  const [ open, setOpen ] = useState({ isOpen: false, course: 0 })

  console.log('OPEN STATE ASDASDASd1111', open)

  const handleClickOpen = (course) => {
    setOpen({ isOpen: true, course: course })
  }

  const handleClose = () => {
    setOpen({ isOpen: false, course: 0 })
  }
  const showChosenCourse = (dish) => {
    if (props.listOfOrder.list.length) {
      const chosenCourse = props.listOfOrder.list.filter(e => e.type === dish)
      console.log('A TUTA SHO? filter listOfOrder: ', props.listOfOrder.list.filter(e => e === dish))
      //change below
      return chosenCourse.length ? chosenCourse[0].name : null
    }
  }

  return (
    <Fragment>
      <Table>
        <TableBody>
          <TableHead>
            <TableCell component="th" scope="row" align="center">Блюдо: </TableCell>
            <TableCell component="th" scope="row" align="center">Предварительный заказ: </TableCell>
          </TableHead>
          { props.menuList.dishes.length ? props.menuList.dishes.map((item, i) => {
            return (
              <TableRow key={ i }>
                <TableCell component="th" scope="row" align="center">{ item } </TableCell>
                <TableCell>
                  <p>
                    Выбранное кушац: { showChosenCourse(item) }
                  </p>
                  <Fab
                    color="primary"
                    aria-label="add"
                    size="small"
                    onClick={ () => handleClickOpen(item) }
                  >
                    <AddIcon/>
                  </Fab>
                </TableCell>
              </TableRow>
            )
          }) : 'Tut nichego net' }
          <ModalWindow
            addCoursesAction={ props.actions.addCoursesAction }
            open={ open }
            onClose={ handleClose }
            firstCourseOption={ props.firstCourseOption }
            secondCourseOption={ props.secondCourseOption }
          />
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



