import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'

import { styles } from './styles'
import Menu from './Menu'
import {
  setOptionAction,
  changeFirstAction,
  changeSecondAction,
  dishesOptions,
  // firstCourseOption,
  // secondCourseOption,
} from '../../@store/course'

import { getOptions } from '../../@store/course/thunk';


const mapStateToProps = createStructuredSelector({
  dishesOptions
  // firstCourseOption,
  // secondCourseOption,
})

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getOptions,
        setOptionAction,
        changeFirstAction,
        changeSecondAction,
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Menu))

