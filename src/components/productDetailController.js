import React, {Component} from 'react';
import api from '../api';
import ProductDetail from './productDetail';

/* eslint-disable no-console */
class ProductDetailController extends Component {
	constructor(props) {
		super(props);
		this.productId = props.params.id;
		this.state = { product: null, isLoading: false };
	}

	componentDidMount() {
		this.setState({ isLoading: true });
		api.get(this.productId).then(response => this.setState({ product: response.item, isLoading: false }))
			.catch((error) => console.log(error));
	}

	render() {
		const { product, isLoading } = this.state;
		return !isLoading && React.Children.only(<ProductDetail {...product} />);
	}
}

export default ProductDetailController;