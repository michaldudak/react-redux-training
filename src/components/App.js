import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import MainNavigation from './commons/MainNavigation';
import ProductsPage from './products/ProductsPage';
import CartPage from './cart/CartPage';
import NotFoundPage from './commons/NotFoundPage';

export default class App extends Component {

	render() {
		return (
			<div className='page'>
				<header>
					<h1><Link to='/'>React Store</Link></h1>
					<MainNavigation />
				</header>

				<Switch>
					<Route exact path='/' component={ProductsPage} />
					<Route path='/cart' component={CartPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		)
	}
}
