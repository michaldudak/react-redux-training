import React, {Component} from 'react';

export default class QuantityIndicator extends Component {
	render() {
		var text = '';

		switch (this.props.count) {
			case 0:
				text = 'Out of stock';
				break;
			case 1:
				text = 'Just one item left!';
				break;
			default:
				text = `${this.props.count} items in stock`;
				break;
		}

		return text;
	}
}