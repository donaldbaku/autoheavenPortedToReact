import update from 'immutability-helper';
import axios from 'axios';
import React from 'react';

const EnumDispatcherAction = Object.freeze({
	GET_ALL_PRODUCTS: 'EnumDispatcherAction.UPDATE_REDUCER',
	UPDATE_NEW_PRODUCT: 'EnumDispatcherAction.UPDATE_NEW_PRODUCT',
	GET_PRODUCT: 'EnumDispatcherAction.GET_PRODUCT',
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
}

export default Actions = new Actions();
