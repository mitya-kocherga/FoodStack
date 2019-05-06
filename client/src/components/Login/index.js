import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";

import { styles } from "./styles";
import Login from './Login';
import { logInRequest } from "../../Store/Auth/thunk";


const mapStateToProps = createStructuredSelector({
  });

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(
        {
          logIn: logInRequest
        },
        dispatch
      ),
    };
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withStyles(styles, { withTheme: true })(Login));

