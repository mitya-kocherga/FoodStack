import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux'

import { ModalMenu } from './ModalMenu'
import {
  addSecondSelectorAction,
  addSelectorAction,
  changeSelectorFirstAction, changeSelectorSecondAction,
  firstCourseOption,
  secondCourseOption, setOptionAction
} from '../../../@store/course'
import { getOptions } from '../../../@store/course/thunk'
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../../Menu/styles'


const mapStateToProps = createStructuredSelector({
  firstCourseOption,
  secondCourseOption,
})

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getOptions,
        setOptionAction,
        changeSelectorFirstAction,
        changeSelectorSecondAction,
        addSelectorAction,
        addSecondSelectorAction
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(ModalMenu))

