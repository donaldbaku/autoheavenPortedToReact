import update from 'immutability-helper';
import { EnumDispatcherAction } from './Actions';

const defaultState = {
	theme: 'dark',
	featuredPosts: [],
	newProduct: {},
	singleProduct: {},
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case EnumDispatcherAction.GET_ALL_PRODUCTS:
			return update(state, { featuredPosts: { $set: action.result } });
		case EnumDispatcherAction.UPDATE_NEW_PRODUCT:
			return update(state, { newProduct: { $set: action.result } });
		case EnumDispatcherAction.GET_PRODUCT:
			return update(state, { singleProduct: { $set: action.result } });

		default:
			return { ...state };
	}
};

export default reducer;
