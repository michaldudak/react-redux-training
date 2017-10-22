export const actionTypes = {
	ADD_TO_CART: "ADD_TO_CART",
	LOAD_PRODUCTS: "LOAD_PRODUCTS"
};

export function addToCart(product) {
	return {
		type: actionTypes.ADD_TO_CART,
		product: product
	};
}

export function loadProducts() {
	return {
		type: actionTypes.LOAD_PRODUCTS
	}
}