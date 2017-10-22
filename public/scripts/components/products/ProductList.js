import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import { connect } from 'react-redux';
import { addToCart } from "../../store/store";
import PropTypes from 'prop-types';

class ProductList extends Component {

	render() {
		return (
			<table className='products'>
				<tbody>
					{this.props.products && this.props.products.map(p => <ProductDetails key={p.id} product={p} onAddedToCart={() => this.props.addToCart(p)} />)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		products: state.products
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addToCart: (product) => {
			dispatch(addToCart(product))
		}
	};
}

ProductList.propTypes = {
	products: PropTypes.array.isRequired,
	addToCart: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);