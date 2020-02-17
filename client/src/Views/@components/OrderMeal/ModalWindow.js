import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import React from 'react'


export const ModalWindow = ({ addCoursesAction, open, onClose, firstCourseOption, secondCourseOption }) => {

  const handleChange = (e, value) => {
    value.name !== '' ? (
    addCoursesAction({
      type: open.course,
      name: value.name,
      price: value.price,
      value: value.value
    })) : alert('ne rabotaet udalenie :((((')
  }

  const handleClose = () => {
    onClose()
  }

  const handleSubmit = () => {
    onClose()
  }

  return (
    <div>
      <Dialog onClose={ handleClose } open={ open.isOpen }>
        <DialogTitle> Выбирайте кушац </DialogTitle>
        <table>
          <TableBody>
            { open.course === 'firstDish' ? (
              <TableRow>
                <TableCell component="th" scope="row" align="center">Первое блюдо</TableCell>
                <TableCell align="center">
                  <Autocomplete
                    onChange={ handleChange }
                    options={ firstCourseOption }
                    getOptionLabel={ option => option.name }
                    renderInput={ params => (
                      <TextField
                        { ...params }
                        variant="outlined"
                        label="Первое"
                        fullWidth
                      />
                    )
                    }
                  />
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell component="th" scope="row" align="center">Второе блюдо</TableCell>
                <TableCell align="center">
                  <Autocomplete
                    onChange={ handleChange }
                    options={ secondCourseOption }
                    getOptionLabel={ option => option.name }
                    renderInput={ params => (
                      <TextField
                        { ...params }
                        variant="outlined"
                        label="Второе"
                        fullWidth
                      />
                    ) }
                  />
                </TableCell>
              </TableRow>) }
            <TableRow>
              <TableCell>
                <Grid>
                  <button
                    onClick={ () => handleSubmit() }>
                    стартуем
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