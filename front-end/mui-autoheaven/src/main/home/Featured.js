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
const Featured = (props) => {
	const { posts } = props;
	return (
		<>
			<br />
			<Grid container spacing={2}>
				{posts.map((item) => (
					<Grid item key={item.id} xs={12} md={6}>
						<CardActionArea
							LinkComponent={Link}
							to='/viewProduct'
							onClick={() => props.getSingleProduct(item.productId)}
						>
							<Card key={item.id} elevation={6} sx={{ display: 'flex' }}>
								<CardContent sx={{ flex: 1 }}>
									<Typography component='h2' variant='h5'>
										{item.productName}
									</Typography>
									<Typography variant='subtitle1' color='text.secondary'>
										{item.productYear}
									</Typography>
									<Typography variant='subtitle1' paragraph>
										{item.productDescription}
									</Typography>
									<Typography variant='subtitle1' color='primary'>
										Continue reading...
									</Typography>
								</CardContent>
								<CardMedia
									component='img'
									sx={{ width: '45%', display: { xs: 'flex', sm: 'block' } }}
									image={item.productImage}
									alt={'post.imageLabel'}
								/>
							</Card>
						</CardActionArea>
					</Grid>
				))}
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
