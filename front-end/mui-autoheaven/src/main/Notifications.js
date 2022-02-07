import { Alert, AlertTitle, Slide, Snackbar } from '@mui/material';
import { green } from '@mui/material/colors';
import { connect } from 'react-redux';
import Actions from './dataStorage/Actions';

const Notifications = (props) => {
	const { showNotification, severity, message } = props;

	function TransitionLeft(props) {
  		return <Slide {...props} direction="left" />;
	}
	return (
		<Snackbar
			open={showNotification}
			onClose={() => props.closeNotification()}
			autoHideDuration={severity === 'error' ? 10000 : 3000}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			TransitionComponent={TransitionLeft}
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
	showNotification: state.appActions.notification.showNotification,
	severity: state.appActions.notification.severity,
	message: state.appActions.notification.message,
});
const mapDispatchToProps = (dispatch) => ({
	closeNotification: () => dispatch(Actions.closeNotification()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
