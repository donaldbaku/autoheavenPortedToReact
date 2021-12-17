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
				});
		};
	}
	updateProduct() {
		return (dispatch, getState) => {
			let product = getState().editableProduct;
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
				});
		};
	}
}

export default Actions = new Actions();
