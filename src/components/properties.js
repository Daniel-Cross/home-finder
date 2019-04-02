import React, { Component } from 'react';
import PropertyTile from './PropertyTile';

class Properties extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div id="Properties">
				<h1>Current Available Properties</h1>
				<PropertyTile />
			</div>
		);
	}
}

export default Properties;
