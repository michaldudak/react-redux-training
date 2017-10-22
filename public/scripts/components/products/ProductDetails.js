import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProgressBar from './ProgressBar';
import QuantityIndicator from "./QuantityIndicator";

export default class ProductDetails extends Component {

	constructor(props) {
		super(props);

		this.state = {
			detailsVisible: false
		};
	}

	toggleDetails = () => {
		this.setState({
			detailsVisible: !this.state.detailsVisible
		});
	};

	render() {
		return (
			<tbody>
				<tr>
					<td>{this.props.product.title}</td>
					<td>
						<div>
							{this.props.product.price.toFixed(2)} EUR
						</div>
						<div>
							<QuantityIndicator count={this.props.product.stockQuantity} />
							<ProgressBar value={this.props.product.stockQuantity} maxValue={100} />
						</div>
						<div>
							<button onClick={this.toggleDetails}>Toggle details</button>
							<button onClick={this.props.onAddedToCart}>Add to cart</button>
						</div>
					</td>
				</tr>
				{this.state.detailsVisible && <tr><td colSpan='2'>
					<p><img src={'/images/' + this.props.product.images[0]} /></p>
					<p>{this.props.product.description}</p>
				</td></tr>}
			</tbody>
		)
	}
}

ProductDetails.propTypes = {
	product: PropTypes.object.isRequired,
	onAddedToCart: PropTypes.func
};