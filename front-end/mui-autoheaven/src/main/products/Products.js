import { Container } from '@mui/material';
import Footer from '../navigation/Footer';
import NavigationBar from '../navigation/NavigationBar';
import Album from './Album';

const Products = () => {
	return (
		<>
			<NavigationBar />
			<Container>
				<Album />
				<Footer />
			</Container>
		</>
	);
};

export default Products;
