import update from 'immutability-helper';
import { EnumDispatcherAction } from './Actions';

const defaultState = {
	appActions: {
		darkMode: false,
		isLoading: false,
		user: null,
		notification: {
			showNotification: true,
			severity: 'success',
			message: 'Welcome to AutoHeaven',
		},
	},

	searchData: '',
	featuredPosts: [],
	searchResults: [],
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
		case EnumDispatcherAction.TOGGLE_DARK_MODE:
			return update(state, {
				appActions: { darkMode: { $set: action.result } },
			});
		case EnumDispatcherAction.SHOW_LOADER:
			return update(state, {
				appActions: { isLoading: { $set: action.result } },
			});
		case EnumDispatcherAction.UPDATE_SEARCH_FIELD:
			return update(state, { searchData: { $set: action.result } });
		case EnumDispatcherAction.SEARCH_RESULTS:
			return update(state, { featuredPosts: { $set: action.result } });

		case EnumDispatcherAction.CLOSE_NOTIFICATION:
			return update(state, {
				appActions: {
					notification: {
						showNotification: { $set: false },
					},
				},
			});
		case EnumDispatcherAction.OPEN_NOTIFICATION:
			return update(state, {
				appActions: {
					notification: {
						showNotification: { $set: true },
						severity: { $set: action.severity },
						message: { $set: action.message },
					},
				},
			});

		case EnumDispatcherAction.SET_USER:
			return update(state, {
				appActions: {
					user: { $set: action.result },
				},
			});

		default:
			return { ...state };
	}
};

export default reducer;
