import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'

import { styles } from './styles'
import Menu from './Menu'
import {
  FirstCourse,
  SecondCourse,
  optionMainCourse,
  optionSecondCourse,
  changeSelectorAction,
  changeSelectorSecondAction,
  addSelectorAction,
  addSecondSelectorAction,
  firstCourseSelectors,
  secondCourseSelectors
} from '../../@store/course'


const mapStateToProps = createStructuredSelector({
  FirstCourse,
  SecondCourse,
  optionMainCourse,
  optionSecondCourse,
  firstCourseSelectors,
  secondCourseSelectors
})

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        changeSelectorAction,
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
)(withStyles(styles, { withTheme: true })(Menu))

