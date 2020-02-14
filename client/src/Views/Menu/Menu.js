import React, {Component, Fragment} from 'react'
import Paper from '@material-ui/core/Paper'


import ModalMenu from '../@components/selectMenuModal'
import {getToken} from '../../@common/getToken'


export default class Menu extends Component {
	state = {
		selectedDate: new Date()
	};

	componentDidMount() {
		this.props.actions.getOptions()
	}

	// changeHandler(e, index) {
	// 	e.stopPropagation()
	// 	e.preventDefault()
	// 	this.props.actions.changeSelectorFirstAction({
	// 		id: index,
	// 		value: e.target.value
	// 	})
	// }

	// changeSecondHandler(e, index) {
	// 	e.stopPropagation();
	// 	e.preventDefault();
	// 	this.props.actions.changeSelectorSecondAction({
	// 		id: index,
	// 		value: e.target.value
	// 	})
	// }

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
		const {classes, firstCourseSelectors} = this.props;
		const {addSelectorAction} = this.props.actions;
		const {firstCourseOption, secondCourseOption} = this.props;

		// const { dataSelectionFirstDishes } = this.props.firstCourseOption;

		return (
			<Fragment>
				<h1 style={{align: 'center'}}>Меню</h1>

				<ModalMenu/>
			</Fragment>
		)
	}
}