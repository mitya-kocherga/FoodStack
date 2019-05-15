import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';

import { styles } from './styles';
import Menu from './Menu';

import { fetchMenus } from '@store/Menus/thunk';
import { date, menu } from '@store/Menus';


const mapStateToProps = createStructuredSelector({
  date,
  menu
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchMenus,
    },
    dispatch
  ),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withStyles(styles, { withTheme: true })(Menu));

