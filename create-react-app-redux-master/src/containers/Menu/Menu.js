import React, { Component }  from 'react'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';


export default class Menu extends Component {
    changeHandler( e ,index) {
        e.stopPropagation();
        e.preventDefault()
        this.props.actions.changeSelectorAction({
            id: index,
            value: e.target.value,
        })
    }

    changeSecondHandler( e ,index) {
        e.stopPropagation();
        e.preventDefault()
        this.props.actions.changeSelectorSecondAction({
            id: index,
            value: e.target.value,
        })
    }
    
    render() {
        const { classes, SecondCourse, firstCouresSelectors, secondCouresSelectors } = this.props;
        const { dataSelectionMainDishes, } = this.props.mainCourse;
        const { dataSelectionSecondDishes, } = this.props.secondCourse;
        const { addSecondSelectorAction, addSelectorAction } = this.props.actions;
        
        return (
            <Paper className={classes.root} elevation={1}>
                    <h1>Menu</h1>
                    <p>Do you want to order food?</p>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="centre">Course</TableCell>
                            <TableCell align="centre">Dishes</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row" align="center">Main Course</TableCell>
                            <TableCell align="center">
                                {
                                firstCouresSelectors.map( (item, index) => (
                                    <FormControl className={classes.formControl}>
                                        <Select key={index}
                                            value={item.value}
                                            onChange={ e => this.changeHandler(e,index)}
                                            inputProps={{
                                            name: "dataSelectionMainDishes",
                                            id: "id-dataSelectionMainDishes",
                                            }}
                                            >
                                            <MenuItem> choose </MenuItem>
                                            {dataSelectionMainDishes.map(item => (
                                                <MenuItem key={item.key} value={item.name}>{item.name}</MenuItem>
                                                ))}
                                        </Select>))
                                    </FormControl>
                                ))}
                                <Grid item> 
                                    <Button
                                    color="secondary"
                                    variant="contained"
                                    onClick={() => addSelectorAction()}
                                    >
                                        Add row
                                    </Button>
                                </Grid> 
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row" align="center">The Second Course</TableCell>
                            <TableCell align="center">
                            {
                                secondCouresSelectors.map( (item, index) => (
                                    <FormControl className={classes.formControl}>
                                        <Select key={index}
                                            value={item.value}
                                            onChange={ e => this.changeSecondHandler(e,index)}
                                            inputProps={{
                                            name: "dataSelectionSecondDishes",
                                            id: "id-dataSelectionSecondDishes",
                                            }}
                                            >
                                            <MenuItem> choose </MenuItem>
                                            {dataSelectionSecondDishes.map(item => (
                                                <MenuItem key={item.key} value={item.name}>{item.name}</MenuItem>
                                                ))}
                                        </Select>))
                                    </FormControl>
                                ))}
                                    <Grid item> 
                                        <Button
                                            color="secondary"
                                            variant="contained"
                                            onClick={() => addSecondSelectorAction()}
                                            >
                                            Add row
                                        </Button>
                                    </Grid> 
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>   
        )
    }
}