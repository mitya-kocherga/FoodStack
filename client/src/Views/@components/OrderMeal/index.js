import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux'

import { OrderMeal } from './OrderMeal'

import {
  changeFirstAction,
  changeSecondAction,
  addCoursesAction,
  firstCourseOption,
  secondCourseOption,
  listOfOrder,
  menuList
} from '../../../@store/course'


import { withStyles } from '@material-ui/core/styles'

import { styles } from './styles'

const mapStateToProps = createStructuredSelector({
  firstCourseOption,
  secondCourseOption,
  addCoursesAction,
  listOfOrder,
  menuList
});


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        addCoursesAction,
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
)(withStyles(styles, { withTheme: true })(OrderMeal))

