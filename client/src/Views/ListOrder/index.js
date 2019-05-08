import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from "reselect";

import ListOrder from "./ListOrder";
import { styles } from "./styles";

const mapStateToProps = createStructuredSelector({})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(ListOrder));
