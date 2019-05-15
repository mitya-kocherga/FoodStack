import React, {useState} from 'react';

import { FormControl, FormControlLabel, RadioGroup, Radio, Paper, } from '@material-ui/core';

export const RadioControl = ({classes, firstRadio, secondRadio}) => {
    const [ value, setValue ] = useState(firstRadio.value); //времменная мера, нужно перенести логику в редакс
    return (
        <Paper elevation={0} className={classes.wrapper}>
            <FormControl component="fieldset" className={classes.formControl}>
                <RadioGroup
                    name="payment"
                    className={classes.group}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                >
                    <FormControlLabel classes={{label: classes.redText}} value={firstRadio.value} control={<Radio color="default" />} label={firstRadio.name} />
                    <FormControlLabel classes={{label: classes.redText}} value={secondRadio.value} control={<Radio color="default" />} label={secondRadio.name} />
                </RadioGroup>
            </FormControl>
        </Paper>
    );
};


        