import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import React, { Fragment, useState } from 'react'
import Fab from '@material-ui/core/Fab'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


export const ModalWindow = ({classes, currentDish, listOfOrder, color, handleAddAction, handleDeleteAction, textFieldLabel, header, item, options, icon, iconDelete }) => {
  const [ isOpen, setOpen ] = useState(false);
  const [ course, setCourse ] = useState({
    name: '',
    price: '',
    value: ''
  });
  const handleOpenAndClose = () => setOpen(!isOpen);

  const handleSubmitAction = (course, item) => {
    handleAddAction(course, item)
    setOpen(!isOpen)
    setCourse({
      name: '',
      price: '',
      value: ''
    })
  };
  const handleDelete = (item, id) => {
    handleDeleteAction(item, id)
  };
  const handleChange = (e, value) => {
    setCourse({ ...value })
  };
  const checkValidation = () => {
    return !course.value.trim()
  };
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
              <div className={classes.gridButton}>
                <Button
                  className={ classes.button }
                  variant="contained"
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
              className={ classes.gridButton }

            >
              <Button
                variant="contained"
                className={ classes.button }
                disabled={ checkValidation() }
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