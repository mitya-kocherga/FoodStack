import React from 'react'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Table from "@material-ui/core/Table";
import Button from "@material-ui/core/Button";
// import {addSecondSelectorAction, addSelectorFirstAction} from "../../../@store/course";


export const ModalMenu = (props) => {
	const [open, setOpen] = React.useState(false);
	const [selectedValue, setSelectedValue] = React.useState('');

	const handleClickOpen = () => {
		setOpen(true)
	};

	const handleClose = value => {
		setOpen(false);
		setSelectedValue(value)
	};

	return (
		<div>
			<Table>
				<TableBody>
					<TableRow>
						<TableCell>
							<Typography variant="subtitle1">
								Выбранное кушац: {selectedValue}
							</Typography>
						</TableCell>
						<TableCell>
							<Fab
								color="primary"
								aria-label="add"
								onClick={handleClickOpen}
							>
								<AddIcon/>
							</Fab>
						</TableCell>
					</TableRow>
					<TableRow>
						{/*//Delete second component*/}
						<SimpleDialog
							// addSelectorFirstAction={props.addSelectorFirstAction}
							setSelectedValue={setSelectedValue}
							selectedValue={selectedValue}
							open={open}
							onClose={handleClose}
							firstCourseOption={props.firstCourseOption}
							secondCourseOption={props.secondCourseOption}
						/>
					</TableRow>

					<TableRow align="center">
						<Button
							color="secondary"
							variant="contained"
							// onClick={() => this.addMenu(firstCourseSelectors)}//запрос для добавления заказа
						>
							Заказать
						</Button>
					</TableRow>
				</TableBody>
			</Table>
		</div>)
};
// actions: {addSelectorFirstAction}
const SimpleDialog = ({selectedValue, setSelectedValue, open, onClose, firstCourseOption, secondCourseOption}) => {

	const handleChange = (e, value) => {

		// addSelectorFirstAction({
		// 	id: value.index,
		// 	value: value.name})

		setSelectedValue(value.name);
	};
	const handleClose = () => {
		onClose(selectedValue);
	};

	const handleSubmit = () => {
		onClose(selectedValue)
	};

	return (
		<div >
			<Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
				<DialogTitle id="simple-dialog-title">Выбирайте кушац</DialogTitle>
				<table>
					<TableBody>
						<TableRow>
							<TableCell component="th" scope="row" align="center">Первое блюдо</TableCell>
							<TableCell align="center">
								<Autocomplete
									onChange={handleChange}
									options={firstCourseOption}
									getOptionLabel={option => option.name}
									style={{width: 300, padding: '10px'}}
									renderInput={params => {
										return (
											<TextField
												{...params}
												variant="outlined"
												label="Первое"
												fullWidth
											/>
										)
									}}
								/>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row" align="center">Второе блюдо</TableCell>
							<TableCell align="center">
								<Autocomplete
									onChange={handleChange}
									disableCloseOnSelect
									id="combo-box-demo"
									options={secondCourseOption}
									getOptionLabel={option => option.name}
									style={{width: 300, padding: '10px'}}
									renderInput={(params, index) => (
										<TextField
											{...params}
											variant="outlined"
											label="Второе"
											fullWidth
										/>
									)}
								/>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<Grid>
									<button
										onClick={() => handleSubmit()}>
										стартуем
									</button>
								</Grid>
							</TableCell>
						</TableRow>
					</TableBody>
				</table>
			</Dialog>
		</div>
	)
}


