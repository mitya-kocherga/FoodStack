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
    firstCouresSelectors,
    secondCouresSelectors,
} from '@store/course';


const mapStateToProps = createStructuredSelector({
    FirstCourse,
    SecondCourse,
    mainCourse,
    secondCourse,
    firstCouresSelectors,
    secondCouresSelectors
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

