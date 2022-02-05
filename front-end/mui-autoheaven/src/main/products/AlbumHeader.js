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
	const { searchData } = props;
	return (
		<>
			<Card elevation={0}>
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
							sx={{ display: { xs: 'none', sm: 'block' } }}
						>
							Browse our products
						</Typography>
					</Box>
					<Box>
						<TextField
							label='Search'
							size='small'
							sx={{ marginRight: '3px' }}
							autoFocus
							value={searchData}
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
	return {
		searchData: state.searchData,
	};
};

const mapDispatchToProps = (dispatch) => ({
	updateSearchField: (text) => dispatch(Actions.updateSearchField(text)),
	searchDatabase: () => dispatch(Actions.searchDatabase()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumHeader);
