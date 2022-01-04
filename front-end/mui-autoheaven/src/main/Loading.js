import { Backdrop, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { connect } from 'react-redux';

const Loading = (props) => {
	const [isLoading, setIsLoading] = useState(false);

	axios.interceptors.request.use(
		function (config) {
			setIsLoading(true);
			return config;
		},
		function (error) {
			setIsLoading(true);
			return Promise.reject(error);
		}
	);
	axios.interceptors.response.use(
		function (response) {
			setIsLoading(false);
			return response;
		},
		function (error) {
			setIsLoading(false);
			return Promise.reject(error);
		}
	);
	return (
		<Backdrop open={isLoading}>
			<CircularProgress color='inherit' />
		</Backdrop>
	);
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
