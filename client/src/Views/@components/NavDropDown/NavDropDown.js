import React, { Fragment, useState } from 'react';

import { Button, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const NavDropDown = ({classes,  actions: {logOut}}) => {
    const [anchorEl, setAnchor] = useState(null);

  return (
    <Fragment>
        <Button variant="outlined" onClick={e => setAnchor(e.currentTarget)}>
            Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchor(null)}
        >
            <MenuItem onClick={() => setAnchor(null)}>
                <Link to="/orders">ListOrder</Link>
            </MenuItem>
            <MenuItem onClick={() => setAnchor(null)}>
                <Link to="/Menu-us">Menu</Link>
            </MenuItem>
          <MenuItem
            onClick={() => {
              setAnchor(null);
              logOut();
            }}>
                Log Out
            </MenuItem>
        </Menu>
    </Fragment>
  );
};

/**
 * TODO: create style for this btn
 */