import {actionTypes} from "../actions";

function cartReducer(state = {}, action) {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			console.log('Reducer fired');
			return Object.assign({}, state, { [action.product.id]: action.product });
	}

	return state;
}