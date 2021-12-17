import {
	Container,
	TextField,
	Grid,
	Box,
	Paper,
	Typography,
	Button,
	Input,
	FilledInput,
	Tabs,
	Tab,
} from '@mui/material';
import NavigationBar from '../navigation/NavigationBar';
import { connect } from 'react-redux';
import axios from 'axios';
import Actions from '../dataStorage/Actions';

const EditProduct = (props) => {
	const { editableProduct } = props;

	const handleImageUpload = (event) => {
		event.preventDefault();
		let file = event.target.files[0];
		let imageData = new FormData();
		imageData.append('imageFile', file);
		props.updateProduct('productImage', imageData);
		console.log(imageData);
	};
	return (
		<>
			<Container component={Paper} elevation={6}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					{/* <Typography component='h1' variant='h6'>
										Add a new product to the database
									</Typography> */}
					<Box sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6} md={3}>
								<TextField
									fullWidth
									autoFocus
									disabled
									id='name'
									label='ID'
									value={editableProduct.productId}
									onChange={(event) =>
										props.updateProduct('productName', event.target.value)
									}
								/>
							</Grid>

							<Grid item xs={12} sm={6} md={3}>
								<TextField
									required
									fullWidth
									id='name'
									label='Full Name'
									value={editableProduct.productName}
									onChange={(event) =>
										props.updateProduct('productName', event.target.value)
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<TextField
									required
									fullWidth
									id='manufacturer'
									label='Manufacturer'
									value={editableProduct.productManufacturer}
									onChange={(event) =>
										props.updateProduct(
											'productManufacturer',
											event.target.value
										)
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<TextField
									required
									fullWidth
									id='model'
									label='Model'
									value={editableProduct.productModel}
									onChange={(event) =>
										props.updateProduct('productModel', event.target.value)
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<TextField
									required
									fullWidth
									id='engine'
									label='Engine'
									value={editableProduct.productEngine}
									onChange={(event) =>
										props.updateProduct('productEngine', event.target.value)
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<TextField
									required
									fullWidth
									id='transmission'
									label='Transmission'
									value={editableProduct.productTransmission}
									onChange={(event) =>
										props.updateProduct(
											'productTransmission',
											event.target.value
										)
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<TextField
									required
									fullWidth
									id='bodyType'
									label='Body Type'
									value={editableProduct.productBodyType}
									onChange={(event) =>
										props.updateProduct('productBodyType', event.target.value)
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<TextField
									required
									fullWidth
									id='description'
									label='Description'
									value={editableProduct.productDescription}
									onChange={(event) =>
										props.updateProduct(
											'productDescription',
											event.target.value
										)
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<TextField
									required
									fullWidth
									type='number'
									id='price'
									label='Price'
									value={editableProduct.productPrice}
									onChange={(event) =>
										props.updateProduct('productPrice', event.target.value)
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<TextField
									required
									fullWidth
									type='number'
									id='year'
									label='Year'
									value={editableProduct.productYear}
									onChange={(event) =>
										props.updateProduct('productYear', event.target.value)
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<TextField
									required
									fullWidth
									id='status'
									label='Status'
									value={editableProduct.productStatus}
									onChange={(event) =>
										props.updateProduct('productStatus', event.target.value)
									}
								/>
							</Grid>

							<Grid item xs={12} sm={6} md={3}>
								<FilledInput
									required
									fullWidth
									variant='filled'
									type='file'
									accept='image/*'
									id='image'
									label='Images'
									value={editableProduct.productImage}
									onChange={(event) => handleImageUpload(event)}
								/>
							</Grid>
						</Grid>

						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
							onClick={() => props.updateProductREST()}
						>
							Save Edited Product
						</Button>
					</Box>
				</Box>
			</Container>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		editableProduct: state.editableProduct,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateProduct: (field, value) =>
			dispatch(Actions.updateEditedProduct(field, value)),
		getAllProducts: () => dispatch(Actions.getAllProducts()),
		updateProductREST: () => dispatch(Actions.updateProduct()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
