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

const AddProduct = (props) => {
	const { newProduct } = props;

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
			<br />
			<Container component={Paper} elevation={12}>
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
									required
									fullWidth
									autoFocus
									id='name'
									label='Full Name'
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
									onChange={(event) =>
										props.updateProduct('productStatus', event.target.value)
									}
								/>
							</Grid>

							<Grid item xs={12} sm={12} md={6}>
								<FilledInput
									required
									fullWidth
									variant='filled'
									type='file'
									accept='image/*'
									id='image'
									label='Images'
									onChange={(event) => handleImageUpload(event)}
								/>
							</Grid>
						</Grid>

						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
							onClick={() => props.saveNewProduct()}
						>
							Add Product
						</Button>
					</Box>
				</Box>
			</Container>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		newProduct: state.newProduct,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateProduct: (field, value) =>
			dispatch(Actions.updateNewProduct(field, value)),
		getAllProducts: () => dispatch(Actions.getAllProducts()),
		saveNewProduct: () => dispatch(Actions.saveNewProduct()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
