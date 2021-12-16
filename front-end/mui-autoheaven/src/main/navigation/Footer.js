import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Copyright = () => {
	return (
		<Typography variant='body2' color='text.secondary' align='center'>
			{'© '}
			<Link color='inherit' href='https://www.github.com/donaldbaku/'>
				Donald Baku
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};

const Footer = (props) => {
	const { description, title } = props;

	return (
		<Box component='footer' sx={{ py: 6 }}>
			<Container maxWidth='lg'>
				<Typography variant='h6' align='center' gutterBottom>
					{title}
				</Typography>
				<Typography
					variant='subtitle1'
					align='center'
					color='text.secondary'
					component='p'
				>
					{description}
				</Typography>
				<Copyright />
			</Container>
		</Box>
	);
};

export default Footer;
