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
});
export { EnumDispatcherAction };
class Actions extends React.Component {
	constructor() {
		super();
		console.log('Actions Called');
	}

	getAllProducts() {
		return (dispatch, getState) => {
			axios
				.get('/allProducts', {
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
				});
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
				});
		};
	}

	getSingleProduct(id) {
		return (dispatch) => {
			axios
				.request({
					method: 'GET',
					url: `/getProduct`,
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
				});
		};
	}

	toggleDarkMode() {
		return (dispatch, getState) => {
			dispatch({
				type: EnumDispatcherAction.TOGGLE_DARK_MODE,
				result: !getState().darkMode,
			});
		};
	}

	toggleLoader() {
		return (dispatch, getState) => {
			console.log('Show Loader: ' + getState().isLoading);
			dispatch({
				type: EnumDispatcherAction.TOGGLE_LOADER,
				result: !getState.isLoading,
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

	searchDatabase() {
		return (dispatch, getState) => {
			let searchData = getState().searchData;
			axios
				.request({
					method: 'POST',
					url: `/searchResults`,
					params: { searchData: JSON.stringify(searchData) },
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
				});
		};
	}
}

export default Actions = new Actions();
