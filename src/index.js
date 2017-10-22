import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import App from './components/App';
import configureStore from "./store/store";
import {loadProducts} from "./actions";

if (module.hot) {
	module.hot.accept();
}

const store = configureStore();
store.dispatch(loadProducts());

let root = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(root, document.getElementById('app'));
