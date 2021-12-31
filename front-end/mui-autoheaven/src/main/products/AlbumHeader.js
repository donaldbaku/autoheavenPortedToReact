import {
	Typography,
	Container,
	Stack,
	Box,
	Button,
	Card,
	TextField,
} from '@mui/material';
import { connect } from 'react-redux';
import Actions from '../dataStorage/Actions';

const AlbumHeader = (props) => {
	return (
		<>
			<Card elevation={12}>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
					sx={{ margin: '5px' }}
				>
					<Box>
						<Typography
							color='green'
							variant='button'
							fontSize='large'
							alignItems='baseline'
						>
							Browse our products
						</Typography>
					</Box>
					<Box>
						<TextField
							label='Search'
							size='small'
							sx={{ marginRight: '3px' }}
							onChange={(event) => {
								props.updateSearchField(event.target.value);
							}}
						/>
						<Button
							variant='contained'
							onClick={() => {
								props.searchDatabase();
							}}
						>
							Search
						</Button>
					</Box>
				</Stack>
			</Card>
			<br />
		</>
	);
};

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => ({
	updateSearchField: (text) => dispatch(Actions.updateSearchField(text)),
	searchDatabase: () => dispatch(Actions.searchDatabase()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumHeader);
