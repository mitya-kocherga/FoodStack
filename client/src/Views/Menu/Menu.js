import React, { Component, Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

import { ModalMenu } from '../@components/selectMenuModal/ModalMenu'


export default class Menu extends Component {
  state = {
    isOpen: false,
    selectedDate: new Date()
  }

  componentDidMount() {
    this.props.actions.getOptions()
  }

  changeHandler(e, index) {
    e.stopPropagation()
    e.preventDefault()
    this.props.actions.changeSelectorFirstAction({
      id: index,
      value: e.target.value
    })
  }

  changeSecondHandler(e, index) {
    e.stopPropagation()
    e.preventDefault()
    this.props.actions.changeSelectorSecondAction({
      id: index,
      value: e.target.value
    })
  }

  addMenu(choice) { //запрос для добавления заказа
    fetch('orders/add-order', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName: 'WasyanPRRO$$$', choice, userID: '5cb6de0241fe3b7eb59c5db2' })
    }).catch(error => console.error(error))
  }

  handleClickOpen = () => {
    this.setState({ isOpen: true })
    console.log('isOPen State: ', this.state.isOpen)
  }

  render() {
    const { classes, firstCourseSelectors } = this.props;
    const { addSelectorAction } = this.props.actions;
    const { firstCourseOption, secondCourseOption } = this.props;

    // const { dataSelectionFirstDishes } = this.props.firstCourseOption;

    return (
      <Paper className={ classes.root } elevation={ 1 }>
        <h1>Меню</h1>
        <Table className={ classes.table }>
          <TableHead>
            <TableRow>
              <TableCell align="center">Course</TableCell>
              <TableCell align="center">Dishes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row" align="center">Первое блюдо</TableCell>
              <TableCell align="center">
                <FormControl className={ classes.formControl }>
                  <Select
                    onChange={ e => this.changeHandler(e) }
                    inputProps={ {
                      name: 'dataSelectionFirstDishes',
                      id: 'id-dataSelectionFirstDishes'
                    } }>
                    { firstCourseOption.map(item => (
                      <MenuItem key={ item.id } value={ item.name }> { item.name } </MenuItem>
                    )) }
                  </Select>
                </FormControl>
                <Grid item>
                  {/*<Fab*/}
                  {/*  color="primary"*/}
                  {/*  aria-label="add"*/}
                  {/*  // onClick={ handleClickOpen }*/}
                  {/*> */}
                    <ModalMenu />
                  {/*  <AddIcon/>*/}
                  {/*</Fab>*/}
                </Grid>

              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="center">Второе блюдо</TableCell>
              <TableCell align="center">
                <FormControl className={ classes.formControl }>
                  <Select
                    onChange={ e => this.changeSecondHandler(e) }
                    inputProps={ {
                      name: 'dataSelectionSecondDishes',
                      id: 'id-dataSelectionSecondDishes'
                    } }>
                    { secondCourseOption.map(item => (
                      <MenuItem key={ item.key } value={ item.name }>{ item.name }</MenuItem>
                    )) }
                  </Select>
                </FormControl>
                <Grid item>
                  <Fab
                    color="primary"
                    aria-label="add"
                    // onClick={ () => addSecondSelectorAction() }
                  >
                    <AddIcon/>
                  </Fab>
                </Grid>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button
          color="secondary"
          variant="contained"
          onClick={ () => this.addMenu(firstCourseSelectors) }//запрос для добавления заказа
        >
          Заказать
        </Button>
      </Paper>
    )
  }
}