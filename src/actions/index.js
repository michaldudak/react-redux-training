export const actionTypes = {
	ADD_TO_CART: "ADD_TO_CART",
	LOAD_PRODUCTS_SUCCESS: "LOAD_PRODUCTS_SUCCESS"
};

export function addToCart(product) {
	return {
		type: actionTypes.ADD_TO_CART,
		product: product
	};
}

export function loadProductsSuccess(products) {
	return {
		type: actionTypes.LOAD_PRODUCTS_SUCCESS,
		products
	};
}

export function loadProducts() {
	return function(dispatch) {
		return fetch('/products')
			.then(response => response.json())
			.then(products => { dispatch(loadProductsSuccess(products)) })
			.catch(err => { throw(err); });
	};
}
