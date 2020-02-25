import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux'

import { OrderMeal } from './OrderMeal'


import {

  addCoursesAction,
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
import { makeOrder } from '../../../@store/order/thunk/makeOrder'
import { usersOrderSelector } from '../../../@store/order'
import { ModalWindow } from './ModalWindow'

const mapStateToProps = createStructuredSelector({
  usersOrderSelector,
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
        deleteItemFromOrderAction,
        makeOrder
      },
      dispatch
    )
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(OrderMeal))

