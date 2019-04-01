import axios from 'axios';

const postHome = (data) => {
	return axios
		.post('https://surreal-estate-db.herokuapp.com/api/v1/PropertyListing', data)
		.then(() => {
			console.log('Property successfully added to database');
		})
		.catch((err) => {
			console.log(err);
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

export default postHome;
