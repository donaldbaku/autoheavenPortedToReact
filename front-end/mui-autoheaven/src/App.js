import { BrowserRouter } from 'react-router-dom';
import Navigation from './main/navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { dark, light } from '@mui/material/styles/createPalette';
import CssBaseline from '@mui/material/CssBaseline';
import {
	Alert,
	Backdrop,
	CircularProgress,
	createTheme,
	Snackbar,
	SnackbarContent,
	ThemeProvider,
} from '@mui/material';
import Actions from './main/dataStorage/Actions';
import Notifications from './main/Notifications';
import { useState } from 'react';

function App(props) {
	// const [isLoading, setIsLoading] = useState(false);

	axios.defaults.baseURL = 'http://localhost:8080/';
	// axios.interceptors.request.use(
	// 	function (config) {
	// 		setIsLoading(true);
	// 		return config;
	// 	},
	// 	function (error) {
	// 		return Promise.reject(error);
	// 	}
	// );
	// axios.interceptors.response.use(
	// 	function (response) {
	// 		setIsLoading(false);
	// 		return response;
	// 	},
	// 	function (error) {
	// 		return Promise.reject(error);
	// 	}
	// );
	const theme = createTheme({
		palette: props.darkMode ? dark : light,
	});
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Navigation />
				<Notifications />
				<Backdrop open={false}>
					<CircularProgress color='inherit' />
				</Backdrop>
			</ThemeProvider>
		</BrowserRouter>
	);
}

const mapStateToProps = (state) => {
	return {
		darkMode: state.darkMode,
		isLoading: state.isLoading,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		toggleLoader: () => dispatch(Actions.toggleLoader()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
