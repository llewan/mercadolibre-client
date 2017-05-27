import React from 'react';
import { Route } from 'react-router';
import SearchResultsController from './components/searchResultsController';
import ProductDetailController from './components/productDetailController';
import App from './components/app';

const routes = (
	<Route path="/" component={App}>
		<Route path="/items" component={SearchResultsController} />
		<Route path="/items/:id" component={ProductDetailController} />
	</Route>
);

export default routes;