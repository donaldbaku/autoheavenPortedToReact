import { Card, Button, Typography, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const MyCarousel = () => {
	const items = [
		{
			name: 'Random Name #1',
			description: 'Probably the most random thing you have ever seen!',
			imageUrl: 'https://picsum.photos/1500/500',
		},
		{
			name: 'Random Name #2',
			description: 'Hello World!',
			imageUrl: 'https://picsum.photos/1500/500',
		},
		{
			name: 'Random Name #3',
			description: 'Probably the most random thing you have ever seen!',
			imageUrl: 'https://picsum.photos/1500/500',
		},
		{
			name: 'Random Name #4',
			description: 'Hello World!',
			imageUrl: 'https://picsum.photos/1500/500',
		},
		{
			name: 'Random Name #5',
			description: 'Probably the most random thing you have ever seen!',
			imageUrl: 'https://picsum.photos/1500/500',
		},
		{
			name: 'Random Name #6',
			description: 'Hello World!',
			imageUrl: 'https://picsum.photos/1500/500',
		},
	];
	return (
		<Carousel
			NextIcon={<NavigateNextIcon color='primary' />}
			PrevIcon={<NavigateBeforeIcon color='primary' />}
			swipe={true}
			animation='slide'
			duration={1500}
			interval={5000}
			stopAutoPlayOnHover={true}
			indicators={false}
		>
			{items.map((item, i) => (
				<Item key={i} item={item} />
			))}
		</Carousel>
	);
};

const Item = (props) => {
	return (
		<Grid item xs={12} md={12}>
			<Card sx={{ backgroundImage: `url(${props.item.imageUrl})` }}>
				<div style={{ height: '350px' }} />
				<Grid container justifyContent='space-between' alignItems='flex-end'>
					<Grid item>
						<Typography sx={{ color: 'white' }} variant='p'>
							{props.item.description}
						</Typography>
						<Typography sx={{ color: 'white' }} variant='h4'>
							{props.item.name}
						</Typography>
					</Grid>
					<Grid item>
						<Button variant='contained'>Check it out!</Button>
					</Grid>
				</Grid>
			</Card>
		</Grid>
	);
};

export default MyCarousel;
