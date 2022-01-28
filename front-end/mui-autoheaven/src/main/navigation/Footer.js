import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import { FormControlLabel, Switch } from '@mui/material';
import Actions from '../dataStorage/Actions';
import { connect } from 'react-redux';

const Copyright = () => {
	return (
		<Button variant='text' fullWidth>
			<Typography variant='body2' color='text.secondary' align='center'>
				{'© '}
				<Link color='inherit' href='https://www.github.com/donaldbaku/'>
					Donald Baku
				</Link>{' '}
				{new Date().getFullYear()}
				{'.'}
			</Typography>
		</Button>
	);
};

const Footer = (props) => {
	const { description, title } = props;

	return (
		<Box component='footer' sx={{ py: 6 }}>
			<Container maxWidth='xs'>
				<Copyright />
				<Button variant='text' fullWidth onClick={() => props.toggleDarkMode()}>
					{props.darkMode ? 'Light Theme' : 'Dark Theme'}
				</Button>
			</Container>
		</Box>
	);
};
const mapStateToProps = (state) => {
	return {
		darkMode: state.appActions.darkMode,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleDarkMode: () => dispatch(Actions.toggleDarkMode()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
