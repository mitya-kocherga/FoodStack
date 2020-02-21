import React, {Component, Fragment} from 'react'
import OrderMeal from '../@components/OrderMeal'


export default class Menu extends Component {
	state = {
		selectedDate: new Date()
	};
	componentDidMount() {
		this.props.actions.getOptions()
	}
	render() {

		return (
			<Fragment>
				<h1 style={{align: 'center'}}>Меню</h1>

				<OrderMeal/>
			</Fragment>
		)
	}
}
//
// if (props.listOfOrder.length) {
// 	const chosenCourse = props.menuList.dishes.filter(e => e === dish)
// 	console.log('A TUTA SHO??: ', props.menuList.dishes[0].filter(e => e === dish))
// 	return chosenCourse.length ? chosenCourse[0].name : null