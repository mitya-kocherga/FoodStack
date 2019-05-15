import React, { Component, Fragment }  from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton, Paper, InputLabel, Table, TableBody, TableCell, TableRow, FormControl,  Select, MenuItem, Button, Grid, Typography  } from '@material-ui/core';


import RadioControl from '@components/common/RadioControl'

export default class Menu extends Component {

    componentDidMount() {
        this.props.actions.fetchMenus(this.props.date)          
    };
    getSelector (item) {
        const { classes } = this.props;
        return (
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor={item.name + '-variants'}>Age</InputLabel>
                <Select
                    value={'none'}
                    onChange={()=>{}}
                    inputProps={{
                    name: `${item.name}-variants`,
                    id: `${item.name}-variants-id`,
                    }}
                >
                    <MenuItem value="">
                        None
                    </MenuItem>
                    { item.variants.map( (variant, index) => 
                        <MenuItem key={index} value={variant}>{variant}</MenuItem>
                    )}
                </Select>
            </FormControl>
        );
    };

    getMenuTable (menu) {
        const { classes } = this.props;
        return (
            <Paper elevation={0} className={classes.tableStyle}>
                <Table padding="dense">
                    <TableBody>
                        {menu.map((menuItem, index) => (
                            <TableRow hover key={index}>
                                <TableCell>
                                    {menuItem.name}
                                </TableCell>
                                <TableCell>
                                    {menuItem.price}
                                </TableCell>
                                <TableCell>
                                    {this.getSelector(menuItem)}
                                </TableCell>
                                <TableCell>
                                    <IconButton>
                                        <AddIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );    
    };

    getOrderTable (menu) {
        const { classes } = this.props;
        return (
            <Paper elevation={0} className={classes.tableStyle}>
                <Table padding="dense">
                    <TableBody>
                        {menu.map((menuItem, index) => (
                            <TableRow key={index} className={classes.tableRowBorderBottom}>
                                <TableCell>
                                    {menuItem.name}
                                </TableCell>
                                <TableCell>
                                    {menuItem.price}
                                </TableCell>
                                <TableCell>
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    };
    
    render() {
        const { classes, menu } = this.props;
        const radioData = {
            first: {firstRadio: {name: 'Оплачено', value: 'paid'}, secondRadio: {name: 'Оплачу позже', value: 'later'}},
            second: {firstRadio: {name: 'Карта', value: 'card'}, secondRadio: {name: 'Наличные', value: 'cash'}}
        };

        return (
            <Fragment>
            {menu && menu.length === 0 ? 
                <Typography> loading... </Typography>
                :
                <Paper className={classes.root} >
                    <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                        <Grid item container direction="column" justify="center" alignItems="center" style={{width:'50%'}}>
                            <Grid item>
                                <Typography className={classes.redText} variant="h3">
                                    Меню на {menu.created_for.split('T')[0]} {/*TODO: здесь должэен быть селектор с возможностью выбора дыты!*/}
                                </Typography>
                            </Grid>
                            <Grid item>
                                {this.getMenuTable(menu.menu)}
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" justify="space-between" alignItems="center" style={{width:'50%'}}>
                            <Grid item>
                                <Typography className={classes.redText} variant="h3">
                                    Ваш заказ:
                                </Typography>
                            </Grid>
                            <Grid item>
                                {this.getOrderTable(menu.menu)}
                            </Grid>
                            <Grid item container direction="row" justify="space-around" alignItems="center" >
                                <RadioControl {...radioData.first}/>
                                <RadioControl {...radioData.second} />
                            </Grid>
                            <Grid item container direction="row" justify="space-evenly" alignItems="center" >
                                <Button variant="outlined" color="primary" onClick={()=>{}}>
                                    Сделать заказ
                                </Button>
                                <Typography variant="h4">
                                    Цена: {'100500p'}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            }
        </Fragment>
        );
    };
};
