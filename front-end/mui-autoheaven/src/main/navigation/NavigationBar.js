import {
	AppBar,
	useTheme,
	useMediaQuery,
	Box,
	Typography,
	Toolbar,
	Tabs,
	Tab,
	Button,
} from '@mui/material';
import { green } from '@mui/material/colors';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Actions from '../dataStorage/Actions';
import DrawerForMobileView from './DrawerForMobileView';
import UserMenu from './UserMenu';

const NavigationBar = (props) => {

	const { user } = props;
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	let selectedTab = useLocation().pathname;
	// if (
	// 	selectedTab !== '/home' &&
	// 	selectedTab !== '/products' &&
	// 	selectedTab !== '/about'
	// ) {
	// 	selectedTab = '/home';
	// }

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar color='inherit' enableColorOnDark position='static'>
					<Toolbar>
						{isMobile ? (
							<>
								<DrawerForMobileView />
								<Button
									color='success'
									variant='text'
									to='/home'
									LinkComponent={Link}
									sx={{flexGrow: 1}}
								>
									<Typography  variant='h5'>
										<b>AutoHeaven</b>
									</Typography>
								</Button>
								<UserMenu />
							</>
						) : (
							<>
								<Button
									color='success'
									variant='text'
									to='/home'
									LinkComponent={Link}
								>
									<Typography variant='h5'>
										<b>AutoHeaven</b>
									</Typography>
								</Button>
								<Tabs value={selectedTab} sx={{ flexGrow: 1 }} centered>
									<Tab
										to='/home'
										value='/home'
										LinkComponent={Link}
										label='Home'
									/>
									<Tab
										to='/products'
										value='/products'
										LinkComponent={Link}
										label='Products'
									/>
									<Tab
										to='/about'
										value='/about'
										LinkComponent={Link}
										label='About Us'
									/>
								</Tabs>

								
								<UserMenu />
							</>
						)}
					</Toolbar>
				</AppBar>
			</Box>
			<br />
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.appActions.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleDarkMode: () => dispatch(Actions.toggleDarkMode()),
		setUser: (user) => dispatch(Actions.setUser(user)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
