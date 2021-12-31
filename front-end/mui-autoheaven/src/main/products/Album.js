import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { connect } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Actions from '../dataStorage/Actions';
import { Link } from 'react-router-dom';

const theme = createTheme();

const Album = (props) => {
	const { cards } = props;
	return (
		<Grid container spacing={4}>
			{cards.map((card) => (
				<Grid item key={card.productId} xs={12} sm={6} md={4}>
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
							height='200px'
							image={card.productImagePath}
							alt={card.name}
						/>
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography gutterBottom variant='h5' component='h2'>
								{card.productName}
							</Typography>
							<Typography>{card.productDescription}</Typography>
						</CardContent>
						<CardActions>
							<Button
								size='small'
								LinkComponent={Link}
								to='/viewProduct'
								onClick={() => props.getSingleProduct(card.productId)}
							>
								View
							</Button>
							<Button size='small'>Add to cart</Button>
						</CardActions>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

const mapStateToProps = (state) => {
	return {
		cards: state.featuredPosts,
	};
};

const mapDispatchToProps = (dispatch) => ({
	getSingleProduct: (id) => dispatch(Actions.getSingleProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);
