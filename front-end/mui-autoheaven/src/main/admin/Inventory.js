import { Button, Paper } from '@mui/material';
import { connect } from 'react-redux';
import Actions from '../dataStorage/Actions';
import { DataGrid } from '@mui/x-data-grid';
import { Delete, Edit } from '@mui/icons-material';

const Inventory = (props) => {
	const { rows } = props;

	rows.map((item) => (item.id = item.productId));
	const columns = [
		{
			field: 'productId',
			headerName: 'ID',
			width: 50,
		},
		{
			field: 'productName',
			headerName: 'Name',
		},
		{
			field: 'productManufacturer',
			headerName: 'Manufacturer',
		},
		{
			field: 'productModel',
			headerName: 'Model',
		},
		{
			field: 'productEngine',
			headerName: 'Engine',
		},
		{
			field: 'productTransmission',
			headerName: 'Transmission',
		},
		{
			field: 'productBodyType',
			headerName: 'Body Type',
		},
		{
			field: 'productPrice',
			headerName: 'Price',
		},
		{
			field: 'productYear',
			headerName: 'Year',
			width: 70,
		},
		{
			field: 'productStatus',
			headerName: 'Status',
		},
		{
			field: 'unitInStock',
			headerName: 'Units in stock',
			width: 70,
		},
		{
			field: 'action',
			headerName: 'Actions',
			width: 110,
			renderCell: (cellValues) => {
				return (
					<>
						<Button
							variant='outlined'
							size='small'
							color='success'
							sx={{ minWidth: 'unset !important', marginRight: '5px' }}
							onClick={() => {
								props.updateSelectedTab('editProduct');
								props.setEditProduct(cellValues.row);
							}}
						>
							<Edit />
						</Button>
						<Button
							variant='outlined'
							size='small'
							color='error'
							sx={{ minWidth: 'unset !important' }}
							onClick={() => {
								props.deleteProduct(cellValues.row.productId);
							}}
						>
							<Delete />
						</Button>
					</>
				);
			},
		},
	];

	return (
		<>
			<Paper elevation={6}>
				<DataGrid
					autoHeight
					rows={rows}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
					sortModel={[{ sort: 'desc', field: 'productId' }]}
				/>
			</Paper>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		rows: state.featuredPosts,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateProduct: (field, value) =>
			dispatch(Actions.updateNewProduct(field, value)),
		getAllProducts: () => dispatch(Actions.getAllProducts()),
		deleteProduct: (id) => dispatch(Actions.deleteProduct(id)),
		updateSelectedTab: (value) => dispatch(Actions.updateAdminTab(value)),
		setEditProduct: (product) => dispatch(Actions.setEditProduct(product)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
