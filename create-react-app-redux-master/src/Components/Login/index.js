import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";

import { styles } from "./styles";
import Login from './Login';
import { logIn } from "../../Store/Auth";


const mapStateToProps = createStructuredSelector({
  });

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(
        {
          logIn
        },
        dispatch
      ),
    };
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withStyles(styles, { withTheme: true })(Login));

