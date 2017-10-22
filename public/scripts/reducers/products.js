import {actionTypes} from "../actions";

export default function productsReducer(state = [], action) {
	switch (action.type) {
		case actionTypes.LOAD_PRODUCTS_SUCCESS:
			return action.products;
	}

	return state;
}