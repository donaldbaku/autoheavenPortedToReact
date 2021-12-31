import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Card, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { connect } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavigationBar from '../navigation/NavigationBar';
import Footer from '../navigation/Footer';
import Carousel from 'react-bootstrap/Carousel';

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
									<Typography variant='h4' color='green'>
										<b>{product.productName}</b>
									</Typography>

									<Typography variant='h6' color='gray'>
										{product.productDescription}
									</Typography>
								</Container>
							</Paper>
						</Grid>
						<br />
						<Grid item elevation={12}>
							{/* <Card
								elevation={12}
								sx={{
									height: '100%',
									display: 'flex',
									flexDirection: 'column',
								}}
							>
								<CardMedia
									component='img'
									height='400px'
									image={audi}
									alt={'card.name'}
								/>
							</Card> */}
							<Card elevation={12}>
								<Carousel>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src={product.productImagePath}
											alt='First slide'
										/>
									</Carousel.Item>
								</Carousel>
							</Card>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={12} md={4}>
						<Grid item key={product.productDescription}>
							<Paper elevation={12}>
								<Container>
									<br />

									<Typography variant='h6'>
										<b>General Specifications</b>
									</Typography>

									<hr />
									<Grid container>
										<Grid item xs={6} sm={6} md={6}>
											<Typography variant='h6'>Manufacturer:</Typography>
											<Typography variant='h6'>Model:</Typography>
											<Typography variant='h6'>Engine:</Typography>
											<Typography variant='h6'>Transmission:</Typography>
											<Typography variant='h6'>Body Type:</Typography>
											<Typography variant='h6'>Price:</Typography>
											<Typography variant='h6'>Year:</Typography>
											<Typography variant='h6'>Condition:</Typography>
											<Typography variant='h6'>Units in stock:</Typography>{' '}
										</Grid>
										<Grid item xs={6} sm={6} md={6}>
											<Typography variant='h6' color='green'>
												<b>{product.productManufacturer}</b>
											</Typography>
											<Typography variant='h6' color='green'>
												<b>{product.productModel}</b>
											</Typography>
											<Typography variant='h6' color='green'>
												<b>{product.productEngine}</b>
											</Typography>
											<Typography variant='h6' color='green'>
												<b>{product.productTransmission}</b>
											</Typography>
											<Typography variant='h6' color='green'>
												<b>{product.productBodyType}</b>
											</Typography>
											<Typography variant='h6' color='green'>
												<b>{'€ ' + product.productPrice}</b>
											</Typography>
											<Typography variant='h6' color='green'>
												<b>{product.productYear}</b>
											</Typography>
											<Typography variant='h6' color='green'>
												<b>{product.productStatus}</b>
											</Typography>
											<Typography variant='h6' color='green'>
												<b>{product.unitInStock}</b>
											</Typography>{' '}
										</Grid>
									</Grid>
									<br />
									<br />
								</Container>
							</Paper>
						</Grid>
						<br />
						<Paper elevation={6}>
							<Button variant='contained' fullWidth color='success'>
								Add to Cart
							</Button>
						</Paper>
					</Grid>
					<Grid item>
						<Card elevation={12}>
							<Container>{product.productLongDescription}</Container>
						</Card>
					</Grid>
				</Grid>
			</Container>
			<Footer />
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
