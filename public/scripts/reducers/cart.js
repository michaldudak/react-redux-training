import {actionTypes} from "../actions";

export default function cartReducer(state = {}, action) {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			return Object.assign({}, state, { [action.product.id]: action.product });
	}

	return state;
}
