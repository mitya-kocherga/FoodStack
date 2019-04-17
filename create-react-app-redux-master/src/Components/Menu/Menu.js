import React, { Component, Fragment }  from 'react'
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

    componentDidMount() {
        /**
         * здесь долджен быть запрос который загружает меню на определенную дату
         */

       /* fetch('/orders')
          .then(res => res.json())
          .then(orders => this.setState({ orders }))
          .catch(error => console.error(error));
          */
      }
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
    comon(choice) {//запрос для добавления заказа
        fetch( 'orders/add-order', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({ userName: 'WasyanPRRO$$$', choice, userID: '5cb6de0241fe3b7eb59c5db2'})
        }).catch(error => console.error(error));        
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
                            <TableCell align="center">Course</TableCell>
                            <TableCell align="center">Dishes</TableCell>
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
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => this.comon( firstCouresSelectors )}//запрос для добавления заказа
                >
                    comon i want it!
                </Button>
            </Paper>   
        )
    }
}