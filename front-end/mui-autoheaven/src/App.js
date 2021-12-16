import { CssBaseline } from '@material-ui/core';
import { darkTheme, lightTheme } from './theme/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './main/navigation/Navigation';
import { connect } from 'react-redux';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/';
axios.defaults.headers = 'Access-Control-Allow-Origin';

function App(props) {
	const selectedTheme = props.theme === 'dark' ? { darkTheme } : { lightTheme };
	return (
		<BrowserRouter>
			<ThemeProvider theme={lightTheme}>
				<CssBaseline />
				<Navigation />
			</ThemeProvider>
		</BrowserRouter>
	);
}

const mapStateToProps = (state) => {
	return {
		theme: state.theme,
	};
};

export default connect(mapStateToProps)(App);
