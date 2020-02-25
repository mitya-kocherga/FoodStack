import React from 'react'

export const showNamesOfOrderedCourses = (item, props) => {

  switch (item) {
    case 'firstDish':
      return props.orderedFirstDishes && props.orderedFirstDishes.map((dish, i) => item === dish.type ?
         `${dish.name} ${dish.price} руб.,`  : '')
    case 'secondDish':
      return props.orderedSecondDishes && props.orderedSecondDishes.map((dish, i) => item === dish.type ?
        `${dish.name} ${dish.price} руб.,` : '')
    case 'dietDish':
      return props.orderedDietDishes && props.orderedDietDishes.map((dish, i) => item === dish.type ?
        `${dish.name} ${dish.price} руб.,` : 'nothing here')
    case 'desert':
      return props.orderedDesertDishes && props.orderedDesertDishes.map((dish, i) => item === dish.type ?
        `${dish.name} ${dish.price} руб.,` : 'nothing here')
    case 'salad':
      return props.orderedSaladDishes && props.orderedSaladDishes.map((dish, i) => item === dish.type ?
        `${dish.name} ${dish.price} руб.,` : 'nothing here')
    default:
      return (<p> </p>)
  }
}