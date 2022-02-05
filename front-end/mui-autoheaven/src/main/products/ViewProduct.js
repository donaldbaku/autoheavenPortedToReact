import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { connect } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavigationBar from '../navigation/NavigationBar';
import Footer from '../navigation/Footer';
import Carousel from 'react-bootstrap/Carousel';

const theme = createTheme();

const ViewProduct = (props) => {
	const { product, user } = props;
	return (
		<>
			<NavigationBar />
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Card elevation={24}>
							<Container>
								<Typography variant='h4' color='green'>
									<b>{product.productName}</b>
								</Typography>
								<Typography variant='h6' color='gray'>
									{product.productDescription}
								</Typography>
							</Container>
						</Card>
					</Grid>
					<Grid item>
						<Grid item>
							<Card
								key={product.id}
								elevation={12}
								sx={{
									display: { xs: 'block', md: 'flex' },
								}}
							>
								<CardMedia
									component='img'
									sx={{
										height: '500px',
										width: { sx: '100%', md: '70%' },
									}}
									image={product.productImagePath}
									alt={'post.imageLabel'}
								/>
								<CardContent
									sx={{
										flex: 1,
										alignSelf: 'flex-end',
									}}
								>
									<Grid
										container
										spacing={2}
										justifyContent='center'
										alignItems='flex-end'
									>
										<Grid item>
											<Card elevation={12}>
												<Typography
													variant='h6'
													color='green'
													sx={{ margin: '10px' }}
												>
													<b>{product.productManufacturer}</b>
												</Typography>
											</Card>
										</Grid>
										<Grid item>
											<Card elevation={12}>
												<Typography
													variant='h5'
													color='green'
													sx={{ margin: '10px' }}
												>
													<b>{product.productModel}</b>
												</Typography>
											</Card>
										</Grid>
										<Grid item>
											<Card elevation={12}>
												<Typography
													variant='body1'
													color='green'
													sx={{ margin: '10px' }}
												>
													<b>{product.productEngine}</b>
												</Typography>
											</Card>
										</Grid>
										<Grid item>
											<Card elevation={12}>
												<Typography
													variant='body1'
													color='green'
													sx={{ margin: '10px' }}
												>
													<b>{product.productTransmission}</b>
												</Typography>
											</Card>
										</Grid>
										<Grid item>
											<Card elevation={12}>
												<Typography
													variant='body1'
													color='green'
													sx={{ margin: '10px' }}
												>
													<b>{product.productBodyType}</b>
												</Typography>
											</Card>
										</Grid>
										<Grid item>
											<Card elevation={12}>
												<Typography
													variant='body1'
													color='green'
													sx={{ margin: '10px' }}
												>
													{'Starting from: '}
													<b>{'€ ' + product.productPrice}</b>
												</Typography>
											</Card>
										</Grid>
										<Grid item>
											<Card elevation={12}>
												<Typography
													variant='body1'
													color='green'
													sx={{ margin: '10px' }}
												>
													{'Produced in '}
													<b>{product.productYear}</b>
												</Typography>
											</Card>
										</Grid>
										<Grid item>
											<Card elevation={12}>
												<Typography
													variant='body1'
													color='green'
													sx={{ margin: '10px' }}
												>
													{'Condition: '} <b>{product.productStatus}</b>
												</Typography>
											</Card>
										</Grid>
										<Grid item>
											<Card elevation={12}>
												<Typography
													variant='body1'
													color='green'
													sx={{ margin: '10px' }}
												>
													<b>{product.unitInStock}</b>
													{' units left in stock'}
												</Typography>
											</Card>
										</Grid>
										<Grid item xs={12}>
											<Button disabled={user ? false : true} variant='contained' fullWidth color='success'>
												Add to Cart
											</Button>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>
					</Grid>

					<Grid item xs={12}>
						<Paper elevation={24}>
							<Container sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
								<Typography variant='h5' color='gray'>
									{'Overview'}
								</Typography>
								<hr />
								<Typography variant='h6' color='gray'>
									{product.longDescription}
								</Typography>
							</Container>
						</Paper>
					</Grid>

					<Grid item xs={12} sm={6} md={6}>
						<Card
							elevation={12}
							sx={{
								height: '100%',
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<CardMedia
								component='img'
								height='300px'
								image={product.interiorImagePath}
								alt={'interior image'}
							/>
							<CardContent sx={{ flexGrow: 1 }}>
								<Typography gutterBottom variant='h5' component='h2'>
									Interior, Comfort, and Cargo
								</Typography>
								<hr />
								<Typography>{product.interiorDescription}</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<Card
							elevation={12}
							sx={{
								height: '100%',
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<CardMedia
								component='img'
								height='300px'
								image={product.exteriorImagePath}
								alt={'exterior image'}
							/>
							<CardContent sx={{ flexGrow: 1 }}>
								<Typography gutterBottom variant='h5' component='h2'>
									Engine, Transmission, and Performance
								</Typography>
								<hr />
								<Typography>{product.exteriorDescription}</Typography>
							</CardContent>
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
		user: state.appActions.user,

	};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);
