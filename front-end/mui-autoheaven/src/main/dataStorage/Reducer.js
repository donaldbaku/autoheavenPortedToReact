import update from 'immutability-helper';
import { EnumDispatcherAction } from './Actions';

const defaultState = {
	theme: 'dark',
	featuredPosts: [],
	newProduct: {},
	singleProduct: {},
	adminSelectedTab: 'inventory',
	editableProduct: {},
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case EnumDispatcherAction.GET_ALL_PRODUCTS:
			return update(state, { featuredPosts: { $set: action.result } });
		case EnumDispatcherAction.UPDATE_NEW_PRODUCT:
			return update(state, { newProduct: { $set: action.result } });
		case EnumDispatcherAction.UPDATE_EDIT_PRODUCT:
			return update(state, { editableProduct: { $set: action.result } });
		case EnumDispatcherAction.GET_PRODUCT:
			return update(state, { singleProduct: { $set: action.result } });
		case EnumDispatcherAction.SET_ADMIN_TAB:
			return update(state, { adminSelectedTab: { $set: action.result } });
		case EnumDispatcherAction.SET_EDIT_PRODUCT:
			return update(state, { editableProduct: { $set: action.result } });

		default:
			return { ...state };
	}
};

export default reducer;
