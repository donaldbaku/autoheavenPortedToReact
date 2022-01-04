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
	Select,
	MenuItem,
	TextareaAutosize,
	FormControl,
	FormControlLabel,
} from '@mui/material';
import NavigationBar from '../navigation/NavigationBar';
import { connect } from 'react-redux';
import axios from 'axios';
import Actions from '../dataStorage/Actions';

const AddProduct = (props) => {
	const handleImageUpload = (files) => {
		let imageData = new FormData();
		imageData.append('upload_preset', 'ivcfqk5t');
		imageData.append('cloud_name', 'drwqwqhmd');
		imageData.append('file', files[0]);
		axios
			.post('https://api.cloudinary.com/v1_1/drwqwqhmd/image/upload', imageData)
			.then((response) => {
				props.updateProduct('productImagePath', response.data.url);
				props.openNotification('success', 'Image uploaded successfully');
			})
			.catch((error) => {
				props.openNotification('error', error.message);
			});
	};
	const handleInteriorImageUpload = (files) => {
		let imageData = new FormData();
		imageData.append('upload_preset', 'ivcfqk5t');
		imageData.append('cloud_name', 'drwqwqhmd');
		imageData.append('file', files[0]);
		axios
			.post('https://api.cloudinary.com/v1_1/drwqwqhmd/image/upload', imageData)
			.then((response) => {
				props.updateProduct('interiorImagePath', response.data.url);
				props.openNotification(
					'success',
					'Interior Image uploaded successfully'
				);
			})
			.catch((error) => {
				props.openNotification('error', error.message);
			});
	};
	const handleExteriorImageUpload = (files) => {
		let imageData = new FormData();
		imageData.append('upload_preset', 'ivcfqk5t');
		imageData.append('cloud_name', 'drwqwqhmd');
		imageData.append('file', files[0]);
		axios
			.post('https://api.cloudinary.com/v1_1/drwqwqhmd/image/upload', imageData)
			.then((response) => {
				props.updateProduct('exteriorImagePath', response.data.url);
				props.openNotification(
					'success',
					'Exterior Image uploaded successfully'
				);
			})
			.catch((error) => {
				props.openNotification('error', error.message);
			});
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
									required
									fullWidth
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
									placeholder={new Date().getFullYear()}
									onChange={(event) =>
										props.updateProduct('productYear', event.target.value)
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<TextField
									select
									required
									fullWidth
									id='status'
									label='Condition'
									onChange={(event) =>
										props.updateProduct('productStatus', event.target.value)
									}
								>
									<MenuItem value={'New'}>New</MenuItem>
									<MenuItem value={'Used'}>Used</MenuItem>
								</TextField>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<TextField
									required
									fullWidth
									type='number'
									id='unitsInStock'
									label='Units to add'
									placeholder='1'
									onChange={(event) =>
										props.updateProduct('unitInStock', event.target.value)
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id='description'
									label='Short Description of Product'
									onChange={(event) =>
										props.updateProduct(
											'productDescription',
											event.target.value
										)
									}
								/>
							</Grid>

							<Grid item xs={12} sm={9}>
								<TextField
									required
									fullWidth
									id='description'
									label='Overall Description of Product'
									onChange={(event) =>
										props.updateProduct('longDescription', event.target.value)
									}
								/>
							</Grid>

							<Grid item xs={12} sm={6} md={3}>
								<FilledInput
									required
									fullWidth
									type='file'
									accept='image/*'
									id='image'
									label='Images'
									onChange={(event) => handleImageUpload(event.target.files)}
								/>
							</Grid>

							<Grid item xs={12} sm={9}>
								<TextField
									required
									fullWidth
									multiline
									id='intDescription'
									label='Interior Description'
									onChange={(event) =>
										props.updateProduct(
											'interiorDescription',
											event.target.value
										)
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<FilledInput
									required
									fullWidth
									type='file'
									accept='image/*'
									id='image'
									label='Interior Image'
									onChange={(event) =>
										handleInteriorImageUpload(event.target.files)
									}
								/>
							</Grid>
							<Grid item xs={12} sm={9}>
								<TextField
									required
									fullWidth
									multiline
									id='extDescription'
									label='Exterior Description'
									onChange={(event) =>
										props.updateProduct(
											'exteriorDescription',
											event.target.value
										)
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<FilledInput
									required
									fullWidth
									type='file'
									accept='image/*'
									id='image'
									label='Interior Image'
									onChange={(event) =>
										handleExteriorImageUpload(event.target.files)
									}
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
							Save new Product
						</Button>
					</Box>
				</Box>
			</Container>
		</>
	);
};

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateProduct: (field, value) =>
			dispatch(Actions.updateNewProduct(field, value)),
		getAllProducts: () => dispatch(Actions.getAllProducts()),
		saveNewProduct: () => dispatch(Actions.saveNewProduct()),
		openNotification: (severity, message) =>
			dispatch(Actions.openNotification(severity, message)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
