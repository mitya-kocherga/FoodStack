// import TextField from '@material-ui/core/TextField'
// import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import TableCell from '@material-ui/core/TableCell'
// import FormControl from '@material-ui/core/FormControl'
// import Select from '@material-ui/core/Select'
// import MenuItem from '@material-ui/core/MenuItem'
// import Button from '@material-ui/core/Button'
// import Grid from '@material-ui/core/Grid'
// import Fab from '@material-ui/core/Fab'
// import AddIcon from '@material-ui/icons/Add'
// import Avatar from '@material-ui/core/Avatar';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemText from '@material-ui/core/ListItemText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import PersonIcon from '@material-ui/icons/Person';
// import { blue } from '@material-ui/core/colors';
// import { Dialog } from '@material-ui/core'


export const ModalMenu = (props) => {
  return (
    <Grid item>
      <Fab
        color="primary"
        aria-label="add"
        // onClick={ () => () }
      >
        <AddIcon/>
      </Fab>
    </Grid>
  )

}
