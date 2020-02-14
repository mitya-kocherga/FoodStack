import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'

import { styles } from './styles'
import Menu from './Menu'
import {
  setOptionAction,
  changeSelectorFirstAction,
  changeSelectorSecondAction,
  addSecondSelectorAction,
  firstCourseOption,
  secondCourseOption,
} from '../../@store/course'

import { getOptions } from '../../@store/course/thunk';


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
        addSecondSelectorAction
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Menu))

