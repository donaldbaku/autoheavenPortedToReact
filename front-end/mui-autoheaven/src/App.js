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
import Rest from './main/Loading';
import Loading from './main/Loading';

function App(props) {
	axios.defaults.baseURL = 'http://localhost:8080/';

	const theme = createTheme({
		palette: props.darkMode ? dark : light,
	});
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Navigation />
				<Notifications />
				<Loading />
			</ThemeProvider>
		</BrowserRouter>
	);
}

const mapStateToProps = (state) => {
	return {
		darkMode: state.appActions.darkMode,
		isLoading: state.appActions.isLoading,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		toggleLoader: () => dispatch(Actions.toggleLoader()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
