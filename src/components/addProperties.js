import React, { Component } from 'react';
import '../styles/addProperties.css';

class AddProperties extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			type: 'Apartment',
			bedrooms: 0,
			bathrooms: 0,
			price: 0,
			city: '',
			email: '',
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
	};

	render() {
		const { title, type, bedrooms, bathrooms, price, city, email } = this.state;
		return (
			<div id="AddProperties">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="title">
						Title:
						<input type="text" onChange={this.handleChange} value={title} name="title" />
					</label>
					<label htmlFor="type">
						Type:
						<select value={type} onChange={this.handleChange} name="type">
							<option value="apartment">Apartment</option>
							<option value="house">House</option>
							<option value="bungalow">Bungalow</option>
							<option value="castle">Castle</option>
						</select>
					</label>
					<label htmlFor="bedrooms">
						Number of Bedrooms:
						<input type="number" value={bedrooms} onChange={this.handleChange} name="bedrooms" />
					</label>
					<label htmlFor="bathrooms">
						Bathrooms:
						<input type="number" value={bathrooms} onChange={this.handleChange} name="bathrooms" />
					</label>
					<label htmlFor="price">
						Price:
						<input type="number" value={price} onChange={this.handleChange} name="price" />
					</label>
					<label htmlFor="city">
						City:
						<input type="text" value={city} onChange={this.handleChange} name="city" />
					</label>
					<label htmlFor="email">
						Email:
						<input type="email" value={email} onChange={this.handleChange} name="email" />
					</label>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default AddProperties;
