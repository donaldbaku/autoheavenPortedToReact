import update from 'immutability-helper';
import { EnumDispatcherAction } from './Actions';

const defaultState = {
	darkMode: true,
	isLoading: false,
	searchData: '',
	featuredPosts: [],
	searchResults: [],
	newProduct: {},
	singleProduct: {},
	adminSelectedTab: 'inventory',
	editableProduct: {},
	notification: {
		showNotification: true,
		severity: 'success',
		message: 'Welcome to AutoHeaven',
	},
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
		case EnumDispatcherAction.TOGGLE_DARK_MODE:
			return update(state, { darkMode: { $set: action.result } });
		case EnumDispatcherAction.SHOW_LOADER:
			return update(state, { isLoading: { $set: action.result } });
		case EnumDispatcherAction.UPDATE_SEARCH_FIELD:
			return update(state, { searchData: { $set: action.result } });
		case EnumDispatcherAction.SEARCH_RESULTS:
			return update(state, { searchResults: { $set: action.result } });
		case EnumDispatcherAction.CLOSE_NOTIFICATION:
			return update(state, {
				notification: {
					showNotification: { $set: false },
				},
			});
		case EnumDispatcherAction.OPEN_NOTIFICATION:
			return update(state, {
				notification: {
					showNotification: { $set: true },
					severity: { $set: action.severity },
					message: { $set: action.message },
				},
			});

		default:
			return { ...state };
	}
};

export default reducer;
