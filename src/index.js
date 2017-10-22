import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import {Provider} from "react-redux";
import configureStore from "./store/store";
import {loadProducts} from "./actions";

if (module.hot) {
	module.hot.accept();
}

const store = configureStore();
store.dispatch(loadProducts());

let root = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(root, document.getElementById('app'));
