import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div id="Navbar">
			<div className="title">
				<i className="fab fa-fort-awesome fa-4x" />
				<h1>MY NEW HOME</h1>
			</div>
			<ul>
				<Link className="links" to="/">
					View Properties
				</Link>
				<Link className="links" to="/add-property">
					Add Property
				</Link>
			</ul>
		</div>
	);
};

export default Navbar;
