import { Alert, AlertTitle, Snackbar } from '@mui/material';
import { green } from '@mui/material/colors';
import { connect } from 'react-redux';
import Actions from './dataStorage/Actions';

const Notifications = (props) => {
	const { showNotification, severity, message } = props;
	return (
		<Snackbar
			open={showNotification}
			onClose={() => props.closeNotification()}
			autoHideDuration={7000}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
		>
			<Alert
				onClose={() => props.closeNotification()}
				variant='filled'
				severity={severity}
			>
				{message}
			</Alert>
		</Snackbar>
	);
};

const mapStateToProps = (state) => ({
	showNotification: state.notification.showNotification,
	severity: state.notification.severity,
	message: state.notification.message,
});
const mapDispatchToProps = (dispatch) => ({
	closeNotification: () => dispatch(Actions.closeNotification()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
