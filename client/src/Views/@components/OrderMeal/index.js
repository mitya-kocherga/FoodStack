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
  menuList,
  orderedFirstDishes,
  orderedSecondDishes,
  orderedDietDishes,
  orderedDesertDishes,
  orderedSaladDishes,
  dishesOptions, deleteItemFromOrderAction, currentDish
} from '../../../@store/course'


import { withStyles } from '@material-ui/core/styles'

import { styles } from './styles'

const mapStateToProps = createStructuredSelector({
  firstCourseOption,
  secondCourseOption,
  addCoursesAction,
  listOfOrder,
  menuList,
  orderedFirstDishes,
  orderedSecondDishes,
  orderedDietDishes,
  orderedDesertDishes,
  orderedSaladDishes,
  dishesOptions,
  currentDish
});


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        addCoursesAction,
        changeFirstAction,
        changeSecondAction,
        deleteItemFromOrderAction,
      },
      dispatch
    )
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(OrderMeal))

