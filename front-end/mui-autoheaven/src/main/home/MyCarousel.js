import { Card, Button, Typography, Grid, Container } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Actions from '../dataStorage/Actions';
import audi from '../../images/1.jpg';

const MyCarousel = (props) => {
	const { posts } = props;

	return (
		<Carousel
			NextIcon={<NavigateNextIcon color='primary' />}
			PrevIcon={<NavigateBeforeIcon color='primary' />}
			swipe={true}
			animation='slide'
			duration={2000}
			interval={10000}
			stopAutoPlayOnHover={true}
			indicators={false}
		>
			{posts.map((item, i) => (
				<Item key={i} item={item} />
			))}
		</Carousel>
	);
};

const Item = (props) => {
	return (
		<Grid item xs={12} md={12}>
			<Card sx={{ backgroundImage: `url('../../images/3.jpg')` }}>
				<div style={{ height: '350px' }} />
				<Grid container justifyContent='space-between' alignItems='flex-end'>
					<Container>
						<Grid item>
							<Typography sx={{ color: 'white' }} variant='p'>
								{props.item.productDescription}
							</Typography>
							<Typography sx={{ color: 'white' }} variant='h4'>
								{props.item.productName}
							</Typography>
						</Grid>
					</Container>
				</Grid>
			</Card>
		</Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyCarousel);
