import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Navbar from './components/Navbar';
import Properties from './components/Properties';
import AddProperties from './components/AddProperties';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/" component={Properties} />
						<Route exact path="/add-property" component={AddProperties} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
