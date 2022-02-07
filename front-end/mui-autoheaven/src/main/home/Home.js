import { Container, Slide, SliderRoot } from '@mui/material';
import { useEffect } from 'react';
import Footer from '../navigation/Footer';
import NavigationBar from '../navigation/NavigationBar';
import Featured from './Featured';
import MyCarousel from './MyCarousel';
import { connect } from 'react-redux';
import Actions from '../dataStorage/Actions';

const Home = (props) => {
	useEffect(() => {
		props.getAllProducts();
	});
	return (
		<>
			<NavigationBar />
			<Container>
				<MyCarousel />
				<Featured />
				<Footer />
			</Container>
		</>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	getAllProducts: () => dispatch(Actions.getAllProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
