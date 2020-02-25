import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';

import Login from './Login';
import { logInRequest } from '../../@store/Auth/thunk';
import { rememberMeClick, rememberMe } from '../../@store/Auth';
import { styles } from './styles';



const mapStateToProps = createStructuredSelector({
  rememberMeValue: rememberMe
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        logIn: logInRequest,
        rememberMe: rememberMeClick,
      },
      dispatch
    ),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withStyles(styles, { withTheme: true })(Login));

