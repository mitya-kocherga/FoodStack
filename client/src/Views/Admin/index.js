import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux'

import Admin from "./Admin";
import { styles } from "./styles";

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Admin));
