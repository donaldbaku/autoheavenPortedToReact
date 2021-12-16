import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { connect } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavigationBar from '../navigation/NavigationBar';
import Actions from '../dataStorage/Actions';
import Image from '../../images/3.jpg';

const theme = createTheme();

const ViewProduct = (props) => {
	const { product } = props;
	return (
		<>
			<NavigationBar />
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={12} md={8}>
						<Grid item>
							<Paper elevation={12}>
								<Container>
									<Typography variant='h4'>
										{product.productStatus === 'new'
											? 'The all new ' + product.productName
											: product.productName}
									</Typography>
								</Container>
							</Paper>
						</Grid>
						<br />
						<Grid item>
							<Paper elevation={12}>
								<Container>
									<Typography variant='h6'>
										{product.productDescription}
									</Typography>
								</Container>
							</Paper>
						</Grid>
						<br />
						<Grid
							item
							component={Paper}
							elevation={12}
							sx={{
								backgroundImage: `${Image}`,
								backgroundRepeat: 'no-repeat',
							}}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={4}>
						<Grid item key={product.productDescription}>
							<Paper elevation={12}>
								<Container>
									<Typography variant='h6'>
										Manufacturer: <b>{product.productManufacturer}</b>
									</Typography>
									<Typography variant='h6'>
										Model:
										<b>{product.productModel}</b>
									</Typography>
									<Typography variant='h6'>
										Engine:
										<b>{product.productEngine}</b>
									</Typography>
									<Typography variant='h6'>
										Transmission:
										<b>{product.productTransmission}</b>
									</Typography>
									<Typography variant='h6'>
										Body Type:
										<b>{product.productBodyType}</b>
									</Typography>

									<Typography variant='h6'>
										Price:
										<b>{product.productPrice}</b>
									</Typography>
									<Typography variant='h6'>
										Year:
										<b>{product.productYear}</b>
									</Typography>
									<Typography variant='h6'>
										Status:
										<b>{product.productStatus}</b>
									</Typography>
									<Typography variant='h6'>
										Units in stock:
										<b>{product.unitInStock}</b>
									</Typography>
								</Container>
							</Paper>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		product: state.singleProduct,
	};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);
