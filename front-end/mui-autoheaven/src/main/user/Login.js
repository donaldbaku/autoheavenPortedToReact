import NavigationBar from '../navigation/NavigationBar';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Footer from '../navigation/Footer';
import { Container } from '@mui/material';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Login = (props) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		// eslint-disable-next-line no-console
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};
	return (
		<>
			<NavigationBar />
			<Container>
				<Grid container>
					<Container component={Paper} elevation={12} maxWidth='xs'>
						<Box
							sx={{
								my: 2,
								mx: 2,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
								<LockOutlinedIcon />
							</Avatar>
							<Typography component='h1' variant='h5'>
								Sign in
							</Typography>
							<Box
								component='form'
								noValidate
								onSubmit={handleSubmit}
								sx={{ mt: 1 }}
							>
								<TextField
									margin='normal'
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
									autoFocus
								/>
								<TextField
									margin='normal'
									required
									fullWidth
									name='password'
									label='Password'
									type='password'
									id='password'
									autoComplete='current-password'
								/>
								<FormControlLabel
									control={<Checkbox value='remember' color='primary' />}
									label='Remember me'
								/>
								<Button
									type='submit'
									fullWidth
									variant='contained'
									sx={{ mt: 3, mb: 2 }}
								>
									Sign In
								</Button>
								<Grid container>
									<Grid item xs>
										<Button
											LinkComponent={Link}
											to='/resetPassword'
											variant='text'
										>
											<Typography fontSize={14} variant='body2'>
												Forgot password?
											</Typography>
										</Button>
									</Grid>
									<Grid item>
										<Button
											LinkComponent={Link}
											to='/signup'
											variant='outlined'
										>
											<Typography fontSize={14} variant='button'>
												Sign Up
											</Typography>
										</Button>
									</Grid>
								</Grid>
							</Box>
						</Box>
					</Container>
				</Grid>
				<Footer />
			</Container>
		</>
	);
};

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
