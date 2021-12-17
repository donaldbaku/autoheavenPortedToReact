import { Container, Paper, Tab } from '@mui/material';
import { TabPanel, TabContext, TabList } from '@mui/lab';
import NavigationBar from '../navigation/NavigationBar';
import { connect } from 'react-redux';
import Actions from '../dataStorage/Actions';
import AddProduct from './AddProduct';
import Inventory from './Inventory';
import EditProduct from './EditProduct';

const Admin = (props) => {
	const { adminSelectedTab } = props;
	return (
		<>
			<NavigationBar />

			<Container>
				<TabContext value={adminSelectedTab}>
					<Paper elevation={12}>
						<TabList centered>
							<Tab
								label='Product Inventory'
								value='inventory'
								onClick={(event) => props.updateSelectedTab('inventory')}
							/>
							<Tab
								label='Add Product'
								value='addProduct'
								onClick={(event) => props.updateSelectedTab('addProduct')}
							/>
							<Tab
								label='Edit Product'
								value='editProduct'
								onClick={(event) => props.updateSelectedTab('editProduct')}
							/>
						</TabList>
					</Paper>

					<TabPanel value='inventory'>
						<Inventory />
					</TabPanel>
					<TabPanel value='addProduct'>
						<AddProduct />
					</TabPanel>
					<TabPanel value='editProduct'>
						<EditProduct />
					</TabPanel>
				</TabContext>
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
		updateSelectedTab: (value) => dispatch(Actions.updateAdminTab(value)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
