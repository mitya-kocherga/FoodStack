import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'

import ListOrder from "./ListOrder";
import { styles } from "./styles";

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../../modules/counter'

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/Menu-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(ListOrder));
