import React from 'react'

export const showOrderedCourses = (item, props) => {

  switch (item) {
    case 'firstDish':
      return props.orderedFirstDishes && props.orderedFirstDishes.map((dish, i) => item === dish.type ?
        <span key={i}>{ dish.name }, </span> : '')
    case 'secondDish':
      return props.orderedSecondDishes && props.orderedSecondDishes.map((dish, i) => item === dish.type ?
        <span key={i}>{ dish.name }, </span> : '')
    case 'dietDish':
      return props.orderedDietDishes && props.orderedDietDishes.map((dish, i) => item === dish.type ?
        <span key={i}>{ dish.name }, </span> : 'nothing here')
    case 'desertDish':
      return props.orderedDesertDishes && props.orderedDesertDishes.map((dish, i) => item === dish.type ?
        <span key={i}>{ dish.name }, </span> : 'nothing here')
    case 'salad':
      return props.orderedSaladDishes && props.orderedSaladDishes.map((dish, i) => item === dish.type ?
        <span key={i}>{ dish.name }, </span> : 'nothing here')
    default:
      return (<span> </span>)
  }
}