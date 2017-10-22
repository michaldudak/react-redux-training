import React, { Component } from 'react';

export default class ProductDetails extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.calculateRatio(this.props);
	}

	componentWillReceiveProps(newProps) {
		this.calculateRatio(newProps);
	}

	calculateRatio(props) {
		var ratio = (props.value / props.maxValue) * 100;
		ratio = Math.min(ratio, 100);
		this.setState({
			width: ratio + '%'
		})
	}

	render() {
		return (
			<div className='progressBar'>
				<div className='fill' style={this.state} />
			</div>
		)
	}
}