import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import React, { Fragment, useState } from 'react'
import Fab from '@material-ui/core/Fab'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { showNamesOfOrderedCourses } from './showNamesOfOrderedCourses'
import Button from '@material-ui/core/Button'


export const ModalWindow = ({ currentDish, props, listOfOrder, color, handleAddAction, handleDeleteAction, textFieldLabel, header, item, options, icon, iconDelete }) => {

  const useStyles = makeStyles(theme => ({
    listOfOrderModal: {
      flexGrow: 1,
      width: 400,
      margin: 10,
      borderRadius: 3,
      boxShadow: '0 3px 3px 0 grey'
    },
    addDishModal: {
      flexGrow: 1,
      width: 400,
      margin: 10
    },
    dish: {
      padding: theme.spacing(1),
      margin: 10
    },
    buttonDelete: {
      margin: 10
    },
    buttonClose: {
      padding: theme.spacing(1),
      textAlign: 'center'
    },
    rootDialog: {
      padding: 10
    },
    dialogTitle: {
      color: 'grey',
      textAlign: 'center'
    }
  }))

  const classes = useStyles()
  const [ isOpen, setOpen ] = useState(false)
  const [ course, setCourse ] = useState({
    name: '',
    price: '',
    value: ''
  })

  const handleOpenAndClose = () => setOpen(!isOpen)

  const handleSubmitAction = (course, item) => {
    handleAddAction(course, item)
    setOpen(!isOpen)
  }
  const handleDelete = (item, id) => {
    handleDeleteAction(item, id)
  }

  const handleChange = (e, value) => {
    setCourse({ ...value })
  }

  return (
    <Fragment>
      <Fab
        color={ color }
        aria-label="add"
        size="small"
        onClick={ handleOpenAndClose }
      >
        { icon }
      </Fab>
      <Dialog onClose={ handleOpenAndClose } open={ isOpen } className={ classes.rootDialog }>
        <DialogTitle className={ classes.dialogTitle }> { header } </DialogTitle>
        { icon.type.displayName === 'EditIcon' ? (
            <Fragment>
              { listOfOrder && currentDish.map((item, i) =>
                <Grid
                  key={ i }
                  className={ classes.listOfOrderModal }
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid
                    xs
                    item
                    className={ classes.dish }
                  >
                    { item.name }
                  </Grid>
                  <Grid>
                    { item.price } руб.
                  </Grid>
                  <Grid
                    item
                    className={ classes.buttonDelete }
                  >
                    <Fab
                      size="small"
                      onClick={ () => handleDelete(item.name, i) }
                    >{ iconDelete }
                    </Fab>
                  </Grid>
                </Grid>) }
              <div className={ classes.buttonClose }>
                <Button
                  onClick={ handleOpenAndClose }
                >Закрыть
                </Button>
              </div>
            </Fragment>
          ) :
          <Grid
            direction="row"
            justify="center"
            alignItems="center"
            className={ classes.addDishModal }
          >
            <Grid
              xs
              item
            >
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
            </Grid>
            <Grid
              item
              className={ classes.buttonClose }
            >
              <Button
                onClick={ () => handleSubmitAction(course, item) }>
                Подтвердить
              </Button>
            </Grid>
          </Grid>

        }
      </Dialog>
    </Fragment>
  )
}