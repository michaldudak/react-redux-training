import React, { Component } from 'react';

export default class NotFoundPage extends Component {
	render() {
		document.title = "Page not found | React Store";
		return <h2>Page not found :(</h2>
	}
}
