import React from 'react';
import { Link } from 'react-router-dom';

export default function MainNavigation() {
	return (
		<div className="menu">
			<Link to='/'><i className="fa fa-home" title="Home"></i></Link>
			<Link to='/cart'><i className="fa fa-shopping-cart" title="Shopping cart"></i></Link>
		</div>
	);
}
