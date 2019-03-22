// import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";

import { styles } from "./styles";
import Menu from './Menu';
import {
    FirstCourse,
    SecondCourse,
    mainCourse,
    secondCourse,
    changeSelectorAction,
    changeSelectorSecondAction,
    addSelectorAction,
    addSecondSelectorAction,
    sel,
    sec,
} from '../course';


const mapStateToProps = createStructuredSelector({
    FirstCourse,
    SecondCourse,
    mainCourse,
    secondCourse,
    sel,
    sec
  });

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(
        {
            changeSelectorAction,
            changeSelectorSecondAction,
            addSelectorAction,
            addSecondSelectorAction
        },
        dispatch
      ),
    };
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withStyles(styles, { withTheme: true })(Menu));

