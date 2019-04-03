import React, { Component }  from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


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
        const { classes, } = this.props;
        
        return (
            <Paper className={classes.root} elevation={1}>
                <Grid container  direction="column" alignItems="center">
                    <Grid item> 
                        <TextField
                            id="standard-name"
                            label="Name"
                            className={classes.textField}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item> 
                        <TextField
                            id="standard-name"
                            label="Password"
                            className={classes.textField}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item> 
                        <Button
                        color="secondary"
                        variant="contained"
                        >
                           Sign in
                        </Button>
                    </Grid>
                    <Grid item> 
                        <Typography
                        color="secondary"
                        variant="contained"
                        >
                           Sign up
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>   
        )
    }
}