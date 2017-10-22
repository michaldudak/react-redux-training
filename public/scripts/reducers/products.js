import {actionTypes} from "../actions";

export default function productsReducer(state = [], action) {
	switch (action.type) {
		case actionTypes.LOAD_PRODUCTS:
			return [
				{ id: 1, title: 'P1', stockQuantity: 1, price: 29.90 },
				{ id: 2, title: 'P3', stockQuantity: 0, price: 29.90 },
				{ id: 3, title: 'P4', stockQuantity: 3, price: 29.90 }
			];
	}

	return state;
}