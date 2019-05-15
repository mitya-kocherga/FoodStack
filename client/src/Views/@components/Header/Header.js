import React from 'react';

import { Grid } from '@material-ui/core';

import NavDropDown from '@components/NavDropDown';
import { LunchTimePic } from '@img/LunchTimePic';

export const Header = ({classes}) => (
  <Grid  container direction="row" justify="space-between" alignItems="center">
    <Grid item>
      {/*somepicture*/}
    </Grid>
    <Grid item>
      <LunchTimePic />
    </Grid>
    <Grid item>
      <NavDropDown />
    </Grid>
  </Grid>
);

/**
 * TODO: create style for this btn
 */