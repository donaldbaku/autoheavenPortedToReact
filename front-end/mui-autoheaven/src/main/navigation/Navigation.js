import { Redirect, Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Products from '../products/Products';
import AboutUs from '../AboutUs';
import Login from '../user/Login';
import Signup from '../user/Signup';
import Admin from '../admin/Admin';
import ViewProduct from '../products/ViewProduct';

const Routing = () => {
	return (
		<Switch>
			<Route path='/home' component={Home} />
			<Route path='/products' component={Products} />
			<Route path='/about' component={AboutUs} />
			<Route path='/login' component={Login} />
			<Route path='/signup' component={Signup} />
			<Route path='/admin' component={Admin} />
			<Route path='/viewProduct' component={ViewProduct} />
			<Redirect from='/' to='/home' />
		</Switch>
	);
};

const Navigation = () => {
	return <Routing />;
};

export default Navigation;
