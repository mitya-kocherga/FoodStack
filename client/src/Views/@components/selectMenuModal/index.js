import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux'

import { ModalMenu } from './ModalMenu'
import {
  changeSelectorFirstAction,
  changeSelectorSecondAction,
  addSelectorFirstAction,
  addSecondSelectorAction,
  firstCourseOption,
  secondCourseOption,
} from '../../../@store/course'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../Menu/styles'
import { getOptions } from '../../../@store/course/thunk'


const mapStateToProps = createStructuredSelector({
  firstCourseOption,
  secondCourseOption,
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        addSelectorFirstAction,
        addSecondSelectorAction,
        changeSelectorFirstAction,
        changeSelectorSecondAction,
      },
      dispatch
    )
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(ModalMenu))

