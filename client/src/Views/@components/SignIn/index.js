import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';

import { SignIn } from './SignIn';
import { signInRequest } from '../../../@store/Auth/thunk';
import { signing, setSigning } from '../../../@store/Auth';
import { styles } from './styles';



const mapStateToProps = createStructuredSelector({
  signing
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        signInRequest,
        setSigning
      },
      dispatch
    ),
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withStyles(styles, {withTheme: true})(SignIn));

