import React, { Component } from 'react';
import ProductList from './ProductList';

export default class ProductsPage extends Component {
	render() {
		document.title = "Products | React Store";

		return (
			<div>
				<h2>Products</h2>
				<ProductList />
			</div>
		)
	}
}
