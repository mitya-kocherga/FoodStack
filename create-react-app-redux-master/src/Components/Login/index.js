import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";

import { styles } from "./styles";
import Login from './Login';


const mapStateToProps = createStructuredSelector({
  });

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(
        {
        },
        dispatch
      ),
    };
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withStyles(styles, { withTheme: true })(Login));

