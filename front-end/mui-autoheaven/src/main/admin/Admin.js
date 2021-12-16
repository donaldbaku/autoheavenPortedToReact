import { Container, Paper, Tabs, Tab } from '@mui/material';
import NavigationBar from '../navigation/NavigationBar';
import { connect } from 'react-redux';
import Actions from '../dataStorage/Actions';
import AddProduct from './AddProduct';

const Admin = (props) => {
	const { adminSelectedTab } = props;
	return (
		<>
			<NavigationBar />

			<Container>
				<Paper elevation={12}>
					<Tabs value={adminSelectedTab} centered>
						<Tab label='Product Inventory' value='inventory' />
						<Tab label='Add Product' value='addProduct'>
							<AddProduct />
						</Tab>
					</Tabs>
				</Paper>
			</Container>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		adminSelectedTab: state.adminSelectedTab,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateSelectedTab: (value) => dispatch(Actions.updateSelectedTab(value)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
