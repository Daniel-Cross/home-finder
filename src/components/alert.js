import React from 'react';
import '../styles/alert.css';

const Alert = (props) => {
	return (
		<div id="Alert">
			{props.isError ? (
				<div>
					<p className="error"> {props.alertMessage}</p>
				</div>
			) : null}
			{props.isSuccess ? (
				<div>
					<p className="success"> {props.alertMessage}</p>
				</div>
			) : null}
		</div>
	);
};

export default Alert;
