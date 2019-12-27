import React, {Component} from "react";

export class Editor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Bob",
			flavor: "Vanilla",
			toppings: ["Strawberries"],
			twoScoops: false
		}
		this.flavors = ["Chocolate", "Double Chocolate", "Triple Chocolate", "Vanila"];
		this.toppings = ["Sprinkles", "Fudge Sauce", "Strawberries", "Maple Syrup"];
	}

	updateFormValue = (event) => {
		this.setState({ [event.target.name]: event.target.value },
		() => this.props.submit(this.state));
	}

	updateFormValueOptions = (event) => {
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
	}

	render() {
		return <div className="h5 bg-info text-white p-2">
			<div className="form-group">
				<label>Name</label>
				<input className="form-control" name="name" value={this.state.name} onChange={this.updateFormValue} />
			</div>
			<div className="form-group">
				<label>Ice cream flavors</label>
				{this.flavors.map(flavor => 
					<div className="form-check" key={flavor}>
					<input className="form-input-check" type="radio" name="flavor" value={flavor}
						checked={this.state.flavor === flavor} onChange={this.updateFormValue} />
					<label className="form-check-label">{flavor}</label>
					</div>)}
			</div>
			<div className="form-group">
				<label>Ice Cream Toppings</label>
				{this.toppings.map(top => 
					<div className="form-check" key={top}>
						<input className="form-check-input" type="checkbox" name={top} value={this.state[top]}
							checked={this.state.toppings.indexOf(top) > -1} onChange={this.updateFormValueCheck} />
						<label className="form-check-label">{ top }</label>
					</div>
				)}
			</div>
		</div>
	}
}