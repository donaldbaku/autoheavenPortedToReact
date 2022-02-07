import { connect } from 'react-redux';
import Actions from '../dataStorage/Actions';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Slide } from '@mui/material';

const MyCarousel = (props) => {
	const { posts } = props;

	return (
		<Slide
						in={true}
						// style={{ transformOrigin: '0 0 0' }}
						{...(true ? { timeout: 1000 } : {})}
				>
		<Card elevation={24}>
			<Carousel key={'myCarousel'}>
				{posts.map((item) => (
					<Carousel.Item key={posts.productId}>
						<img
							style={{
								height: '75vh',
								objectFit: 'cover',
							}}
							className='d-block w-100'
							src={item.productImagePath}
							alt='First slide'
						/>
						<Carousel.Caption>
							<h3>{item.productName}</h3>
							<p>{item.productDescription}</p>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
			</Card>
			</Slide>
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
