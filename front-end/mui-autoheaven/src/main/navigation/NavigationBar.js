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
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import DrawerForMobileView from './DrawerForMobileView';

const NavigationBar = (props) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const selectedTab = useLocation().pathname;

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static'>
					<Toolbar>
						{isMobile ? (
							<>
								<Typography variant='h5' sx={{ flexGrow: 1 }}>
									AutoHeaven
								</Typography>
								<DrawerForMobileView />
							</>
						) : (
							<>
								<Typography to='/home' variant='h5' sx={{ mr: 3 }}>
									AutoHeaven
								</Typography>
								<Tabs
									value={selectedTab}
									textColor='inherit'
									indicatorColor='secondary'
									sx={{ flexGrow: 1 }}
									centered
								>
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
								<Button variant='contained' LinkComponent={Link} to='/login'>
									Login
								</Button>
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
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
