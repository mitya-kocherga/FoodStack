import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';

import { NavDropDown } from './NavDropDown';
import { styles } from './styles';
import { logOut } from '@store/Auth';
const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        {
            logOut
        },  
        dispatch
    ),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withStyles(styles, {withTheme: true})(NavDropDown));

