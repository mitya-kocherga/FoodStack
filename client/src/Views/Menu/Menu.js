import React, {Component, Fragment} from 'react'



import OrderMeal from '../@components/OrderMeal'
import { getToken } from '../../@common/getToken'


export default class Menu extends Component {
	state = {
		selectedDate: new Date()
	};

	componentDidMount() {
		this.props.actions.getOptions()
	}

	addMenu(choice) { //запрос для добавления заказа
		fetch('orders/add-order', {
			method: 'POST',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
				'token': getToken()
			},
			body: JSON.stringify({userName: 'WasyanPRRO$$$', choice, userID: '5cb6de0241fe3b7eb59c5db2'})
		}).catch(error => console.error(error))
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