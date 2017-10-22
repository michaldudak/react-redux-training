import React, { Component } from 'react';
import ProductList from './products/ProductList';
import MainNavigation from './commons/MainNavigation';

export default class App extends Component {

	render() {
		return (
			<div className='page'>
				<header>
					<h1><a href="/">React Store</a></h1>
					<MainNavigation />
				</header>
				<ProductList />
			</div>
		)
	}
}
