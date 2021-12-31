import { Container } from '@mui/material';
import Footer from '../navigation/Footer';
import NavigationBar from '../navigation/NavigationBar';
import Album from './Album';
import AlbumHeader from './AlbumHeader';

const Products = () => {
	return (
		<>
			<NavigationBar />
			<Container>
				<AlbumHeader />
				<Album />
				<Footer />
			</Container>
		</>
	);
};

export default Products;
