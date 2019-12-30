import React, {Component} from "react";
import { FormValidator } from "./FormValidator";
import { ValidationMessage } from "./ValidationMessage";

export class Editor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Bob",
			email: "",
			order: ""
		}
		this.rules = {
			name: {required: true, minlength: 3, alpha: true},
			email: {required: true, email: true},
			order: {required: true}
		}
	}

	updateFormValue = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	/*updateFormValueOptions = (event) => {
		let options = [...event.target.options].filter(o=>o.selected).map(o => o.value);
		this.setState({ [event.target.name]: options }, () => this.props.submit(this.state));
	}

	updateFormValueCheck = (event) => {
		event.persist();
		this.setState(state => {
			if (event.target.checked) {
				state.toppings.push(event.target.name);
			} else {
				let index = state.toppings.indexOf(event.target.name);
				state.toppings.splice(index, 1);
			}
		}, () => this.props.submit(this.state));
	}*/

	render() {
		return <div className="h5 bg-info text-white p-2">
				<FormValidator data={ this.state } rules={ this.rules } submit={ this.props.submit }>
					<div className="form-group">
						<label>Name</label>
						<input className="form-control" name="name" value={ this.state.name } 
							onChange={ this.updateFormValue } />
						<ValidationMessage field="name" />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input className="form-control" name="email" value={ this.state.email }
							onChange={ this.updateFormValue } />
						<ValidationMessage field="email" />
					</div>
					<div className="form-group">
						<label>Order</label>
						<textarea className="form-control" name="order" value={ this.state.order }
							onChange={ this.updateFormValue } />
						<ValidationMessage field="order" />
					</div>
				</FormValidator>
			</div>
	}
}