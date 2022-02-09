import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Actions from '../dataStorage/Actions';
import { Slide } from '@mui/material';

const Featured = (props) => {
	const { posts } = props;
	return (
		<>
			<br />
			<Grid container spacing={2}>
				{posts.map((item, index) =>
					index % 2 !== 0 ? (
						<Grid item key={item.id} xs={12} md={12}>
							<Slide
								in={true}
								direction='right'
								{...(true ? { timeout: 1000 } : {})}
							>
								<CardActionArea
									LinkComponent={Link}
									to='/viewProduct'
									onClick={() => props.getSingleProduct(item.productId)}
								>

									<Card
										key={item.id}
										elevation={12}
										sx={{
											display: { xs: 'block', md: 'flex' },
										}}
									>
										<CardMedia
											component='img'
											sx={{
												height: '300px',
												width: { sx: '100%', md: '60%' },
											}}
											image={item.productImagePath}
											alt={'post.imageLabel'}
										/>
										<CardContent
											sx={{
												flex: 1,
												alignSelf: 'flex-end',
											}}
										>
											<Typography
												variant='subtitle1'
												color='text.secondary'
												align='right'
											>
												<b>{item.productYear}</b>
											</Typography>
											<Typography variant='h4' align='right'>
												<b>{item.productName}</b>
											</Typography>

											<Typography
												variant='subtitle1'
												color='green'
												paragraph
												align='right'
											>
												<b>{item.productDescription}</b>
											</Typography>
											<Typography
												variant='subtitle1'
												color='primary'
												align='right'
											>
												Continue reading...
											</Typography>
										</CardContent>
									</Card>
								</CardActionArea>
							</Slide>
						</Grid>
					) : (
						<Grid item key={item.id} xs={12} md={12}>
							<Slide
								in={true}
								direction='left'
								{...(true ? { timeout: 1000 } : {})}
							>
								<CardActionArea
									LinkComponent={Link}
									to='/viewProduct'
									onClick={() => props.getSingleProduct(item.productId)}
								>
									<Card
										key={item.id}
										elevation={12}
										sx={{ display: { xs: 'block', md: 'flex' } }}
									>
										<CardContent
											sx={{
												flex: 1,
												alignSelf: 'flex-end',
											}}
										>
											<Typography variant='subtitle1' color='text.secondary'>
												<b>{item.productYear}</b>
											</Typography>
											<Typography variant='h4'>
												<b>{item.productName}</b>
											</Typography>

											<Typography variant='subtitle1' color='green' paragraph>
												<b>{item.productDescription}</b>
											</Typography>
											<Typography variant='subtitle1' color='primary'>
												Continue reading...
											</Typography>
										</CardContent>
										<CardMedia
											component='img'
											sx={{
												height: '300px',
												width: { sx: '100%', md: '60%' },
											}}
											src={item.productImagePath}
											alt={'post.imageLabel'}
										/>
									</Card>
								</CardActionArea>
							</Slide>
						</Grid>
					)
				)}
			</Grid>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		posts: state.featuredPosts,
	};
};

const mapDispatchToProps = (dispatch) => ({
	getSingleProduct: (id) => dispatch(Actions.getSingleProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
