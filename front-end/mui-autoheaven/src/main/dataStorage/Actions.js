import update from 'immutability-helper';
import axios from 'axios';
import React from 'react';

const EnumDispatcherAction = Object.freeze({
	GET_ALL_PRODUCTS: 'EnumDispatcherAction.UPDATE_REDUCER',
	UPDATE_NEW_PRODUCT: 'EnumDispatcherAction.UPDATE_NEW_PRODUCT',
	GET_PRODUCT: 'EnumDispatcherAction.GET_PRODUCT',
	SET_ADMIN_TAB: 'EnumDispatcherAction.SET_ADMIN_TAB',
	SET_NAV_TAB: 'EnumDispatcherAction.SET_NAV_TAB',
	SET_EDIT_PRODUCT: 'EnumDispatcherAction.SET_EDIT_PRODUCT',
	UPDATE_EDIT_PRODUCT: 'EnumDispatcherAction.UPDATE_EDIT_PRODUCT',
	TOGGLE_DARK_MODE: 'EnumDispatcherAction.TOGGLE_DARK_MODE',
	TOGGLE_LOADER: 'EnumDispatcherAction.TOGGLE_LOADER',
	OPEN_NOTIFICATION: 'EnumDispatcherAction.OPEN_NOTIFICATION',
	CLOSE_NOTIFICATION: 'EnumDispatcherAction.CLOSE_NOTIFICATION',
	UPDATE_SEARCH_FIELD: 'EnumDispatcherAction.UPDATE_SEARCH_FIELD',
	SEARCH_RESULTS: 'EnumDispatcherAction.SEARCH_RESULTS',
	SHOW_LOADER: 'EnumDispatcherAction.SHOW_LOADER',
	SET_USER: 'EnumDispatcherAction.SET_USER',
});
export { EnumDispatcherAction };
class Actions extends React.Component {
	constructor(props) {
		super(props);
		console.log('Actions Called');
	}

	getAllProducts() {
		return (dispatch, getState) => {
			axios
				.get('/products/allProducts', {
					method: 'GET',
					mode: 'cors',
					headers: { 'Access-Control-Allow-Origin': true },
				})
				.then((response) => {
					dispatch({
						type: EnumDispatcherAction.GET_ALL_PRODUCTS,
						result: response.data,
					});
				})
				.catch((error) => {
					dispatch(this.openNotification('error', error.message));
				});
		};
	}

	updateNewProduct(field, value) {
		return (dispatch, getState) => {
			let newProduct = getState().newProduct;
			newProduct = update(newProduct, {
				[field]: { $set: value },
			});
			dispatch({
				type: EnumDispatcherAction.UPDATE_NEW_PRODUCT,
				result: newProduct,
			});
		};
	}
	updateEditedProduct(field, value) {
		return (dispatch, getState) => {
			let editableProduct = getState().editableProduct;
			editableProduct = update(editableProduct, {
				[field]: { $set: value },
			});
			dispatch({
				type: EnumDispatcherAction.UPDATE_EDIT_PRODUCT,
				result: editableProduct,
			});
		};
	}

	saveNewProduct() {
		return (dispatch, getState) => {
			let product = getState().newProduct;
			axios
				.request({
					method: 'POST',
					url: '/admin/addProduct',
					data: JSON.stringify(product),
					mode: 'cors',
					headers: {
						'Access-Control-Allow-Origin': true,
						'content-type': 'application/json',
					},
				})
				.then((response) => {
					dispatch({
						type: EnumDispatcherAction.GET_ALL_PRODUCTS,
						result: response.data,
					});
					dispatch(
						this.openNotification('success', 'Product was added successfully')
					);
					dispatch(this.updateAdminTab('inventory'));
				}).catch(error => {
					dispatch(this.openNotification('error', error.message))
				})
		};
	}
	updateProduct() {
		return (dispatch, getState) => {
			let product = getState().editableProduct;
			axios
				.request({
					method: 'POST',
					url: '/admin/editProduct',
					data: JSON.stringify(product),
					mode: 'cors',
					headers: {
						'Access-Control-Allow-Origin': true,
						'content-type': 'application/json',
					},
				})
				.then((response) => {
					dispatch({
						type: EnumDispatcherAction.GET_ALL_PRODUCTS,
						result: response.data,
					});
					dispatch(
						this.openNotification(
							'success',
							'Product was modified successfully'
						)
					);
					dispatch(this.updateAdminTab('inventory'));
				}).catch(error => {
					dispatch(this.openNotification('error', error.message))
				})
		};
	}

	getSingleProduct(id) {
		return (dispatch) => {
			axios
				.request({
					method: 'GET',
					url: `/products/getProduct`,
					params: { id: JSON.stringify(id) },
					mode: 'cors',
					headers: {
						'Access-Control-Allow-Origin': true,
						'content-type': 'application/json',
					},
				})
				.then((response) => {
					dispatch({
						type: EnumDispatcherAction.GET_PRODUCT,
						result: response.data,
					});
				});
		};
	}
	updateAdminTab(value) {
		return (dispatch) => {
			dispatch({
				type: EnumDispatcherAction.SET_ADMIN_TAB,
				result: value,
			});
		};
	}
	setEditProduct(value) {
		return (dispatch) => {
			dispatch({
				type: EnumDispatcherAction.SET_EDIT_PRODUCT,
				result: value,
			});
		};
	}

	deleteProduct(id) {
		return (dispatch) => {
			axios
				.request({
					method: 'POST',
					url: `/admin/deleteProduct`,
					params: { id: JSON.stringify(id) },
					mode: 'cors',
					headers: {
						'Access-Control-Allow-Origin': true,
						'content-type': 'application/json',
					},
				})
				.then((response) => {
					dispatch({
						type: EnumDispatcherAction.GET_ALL_PRODUCTS,
						result: response.data,
					});
					dispatch(
						this.openNotification(
							'success',
							'Product with ID: ' + id + ' was deleted'
						)
					);
				}).catch(error => {
					dispatch(this.openNotification('error', error.message))
				})
		};
	}

	toggleDarkMode() {
		return (dispatch, getState) => {
			dispatch({
				type: EnumDispatcherAction.TOGGLE_DARK_MODE,
				result: !getState().appActions.darkMode,
			});
		};
	}

	toggleLoader() {
		return (dispatch, getState) => {
			console.log('Show Loader: ' + getState().isLoading);
			dispatch({
				type: EnumDispatcherAction.TOGGLE_LOADER,
				result: !getState.appActions.isLoading,
			});
		};
	}

	openNotification(severity, message) {
		return (dispatch) => {
			dispatch({
				type: EnumDispatcherAction.OPEN_NOTIFICATION,
				severity: severity,
				message: message,
			});
		};
	}

	closeNotification() {
		return (dispatch) => {
			dispatch({
				type: EnumDispatcherAction.CLOSE_NOTIFICATION,
			});
		};
	}

	updateSearchField(text) {
		return (dispatch) => {
			dispatch({
				type: EnumDispatcherAction.UPDATE_SEARCH_FIELD,
				result: text,
			});
		};
	}

	showLoader(val) {
		return (dispatch) => {
			dispatch({
				type: EnumDispatcherAction.SHOW_LOADER,
				result: val,
			});
		};
	}

	searchDatabase() {
		return (dispatch, getState) => {
			let searchData = getState().searchData;
			axios
				.request({
					method: 'GET',
					url: `/products/searchResults`,
					params: { searchData: searchData },
					mode: 'cors',
					headers: {
						'Access-Control-Allow-Origin': true,
						'content-type': 'application/json',
					},
				})
				.then((response) => {
					dispatch({
						type: EnumDispatcherAction.SEARCH_RESULTS,
						result: response.data,
					});
				})
				.catch((error) => {
					dispatch(this.openNotification('error', error.message));
				});
		};
	}

	signUp(user) {
		return (dispatch) => {
			axios
				.request({
					method: 'POST',
					url: `/user/signup`,
					data: user,
					mode: 'cors',
					headers: {
						'Access-Control-Allow-Origin': true,
						'content-type': 'application/json',
					},
				})
				.then((resolve) => {
					dispatch(
						this.openNotification(
							'success',
							'Account was registered successfully'
						)
					);
				})
				.catch((error) => {
					dispatch(this.openNotification('error', error.message));
				});
		};
	}

	logIn(user) {
		return (dispatch) => {
			axios
				.request({
					method: 'GET',
					url: `/user/login`,
					params: {
						email: user.email,
						password: user.password,
					},
				})
				.then((resolve) => {
					if (Object.entries(resolve.data).length === 0) {
						dispatch(this.setUser(null));
						dispatch(this.openNotification('error', 'Wrong credentials'));
					} else {
						dispatch(this.setUser(resolve.data));
						dispatch(
							this.openNotification(
								'success',
								`Welcome ${resolve.data.firstName}`
							)
						);
					}
				})
				.catch((error) => {
					dispatch(this.openNotification('error', error.message));
				});
		};
	}

	setUser(user) {
		return (dispatch) => {
			dispatch({
				type: EnumDispatcherAction.SET_USER,
				result: user,
			});
		};
	}
}

export default Actions = new Actions();
