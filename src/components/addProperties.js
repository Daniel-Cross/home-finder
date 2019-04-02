import React, { Component } from 'react';
import Alert from './Alert';
import axios from 'axios';
import '../styles/addProperties.css';

class AddProperties extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: {
				title: '',
				type: 'Apartment',
				bedrooms: 0,
				bathrooms: 0,
				price: 0,
				city: 'Manchester',
				email: '',
			},
			isSuccess: false,
			isError: false,
			alertMessage: '',
		};
	}

	handleChange = (e) => {
		this.setState({
			fields: {
				...this.state.fields,
				[e.target.name]: e.target.value,
			},
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post('https://surreal-estate-db.herokuapp.com/api/v1/PropertyListing', this.state.fields)
			.then(() => {
				this.setState({ isSuccess: true, alertMessage: 'Property added.' });
			})
			.catch((err) => {
				this.setState({
					alertMessage: 'Server error. Please try again later',
					isError: true,
				});
			});
		// .get(`https://surreal-estate-db.herokuapp.com/api/v1/PropertyListing/${query}`)
		// .then(function(response) {
		// 	const parsedData = response;
		// 	console.log(parsedData);
		// })
		// .catch(function(error) {
		// 	console.log(error);
		// });
	};

	handleAlert = () => {};

	render() {
		const { title, type, bedrooms, bathrooms, price, city, email } = this.state.fields;

		const { alertMessage, isSuccess, isError } = this.state;

		console.log(alertMessage);

		return (
			<div id="AddProperties">
				<form onSubmit={this.handleSubmit}>
					<h1>Add Your Property</h1>
					{this.state.isSuccess || this.state.isError ? (
						<Alert alertMessage={alertMessage} isSuccess={isSuccess} isError={isError} />
					) : null}
					<label htmlFor="title">Title:</label>
					<input type="text" onChange={this.handleChange} value={title} name="title" />
					<label htmlFor="type">Type:</label>

					<select value={type} onChange={this.handleChange} name="type">
						<option value="apartment">Apartment</option>
						<option value="house">House</option>
						<option value="bungalow">Bungalow</option>
						<option value="castle">Castle</option>
					</select>
					<label htmlFor="bedrooms">Number of Bedrooms:</label>

					<input type="number" value={bedrooms} onChange={this.handleChange} name="bedrooms" />
					<label htmlFor="bathrooms">Bathrooms:</label>

					<input type="number" value={bathrooms} onChange={this.handleChange} name="bathrooms" />
					<label htmlFor="price">Price:</label>

					<input type="number" value={price} onChange={this.handleChange} name="price" />
					<label htmlFor="city">City:</label>

					<select value={city} onChange={this.handleChange} name="city">
						<option value="Manchester">Manchester</option>
						<option value="Liverpool">Liverpool</option>
						<option value="Leeds">Leeds</option>
						<option value="Sheffield">Sheffield</option>
					</select>
					<label htmlFor="email">Email:</label>

					<input type="email" value={email} onChange={this.handleChange} name="email" />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default AddProperties;
