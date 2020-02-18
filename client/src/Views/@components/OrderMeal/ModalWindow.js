import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Grid from '@material-ui/core/Grid'
import React, { useState } from 'react'
import Fab from '@material-ui/core/Fab'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'


export const ModalWindow = ({ listOfOrder, color, handleAddAction, handleDeleteAction, textFieldLabel, header, item, options, icon, iconDelete }) => {

  const [ isOpen, setOpen ] = useState(false)
  const [ course, setCourse ] = useState({
    name: '',
    price: '',
    value: ''
  })
  const handleClose = () => setOpen(!isOpen)

  const handleSubmitAction = (course, item) => {
    handleAddAction(course, item)
    setOpen(!isOpen)
  }
  const handleDelete = (item, id) => {
    handleDeleteAction(item, id)
  }

  const handleChange = (e, value) => {
    setCourse({
      name: value.name,
      price: value.price,
      value: value.value
    })
  }
  return (
    <div>
      <Fab
        color={ color }
        aria-label="add"
        size="small"
        onClick={ handleClose }
      >
        { icon }
      </Fab>
      <Dialog onClose={ handleClose } open={ isOpen }>
        <DialogTitle> { header } </DialogTitle>
        <table>
          <TableBody>
            <TableRow>
              { listOfOrder && listOfOrder.map((item, i) =>
                <TableCell key={ i }>
                  { item.name }
                  <TableRow>
                    <Fab
                      size="small"
                      onClick={ () => handleDelete(item.name, i) }
                    >{ iconDelete }
                    </Fab>
                  </TableRow>
                  <hr/>
                  <button
                    onClick={ handleClose }
                  >Закрой меня
                  </button>
                </TableCell>
              ) }

              <TableCell align="center">
                <TableRow>
                  <Autocomplete
                    onChange={ handleChange }
                    options={ options }
                    getOptionLabel={ option => option.name }
                    renderInput={ params => (
                      <TextField
                        { ...params }
                        variant="outlined"
                        label={ textFieldLabel }
                        fullWidth
                      />) }
                  />
                </TableRow>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Grid>
                  <button
                    onClick={ () => handleSubmitAction(course, item) }>
                    Подтвердить
                  </button>
                </Grid>
              </TableCell>
            </TableRow>
          </TableBody>
        </table>
      </Dialog>
    </div>
  )
}