import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
	return (
		<div id="Navbar">
			<div className="title">
				<i className="fab fa-fort-awesome fa-4x" />
				<h1>MY NEW HOME</h1>
			</div>
			<ul>
				<li>Home</li>
			</ul>
		</div>
	);
};

export default Navbar;
