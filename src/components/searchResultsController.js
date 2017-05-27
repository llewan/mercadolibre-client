import React from 'react';
import api from '../api';
import SearchResults from './searchResults';

/* eslint-disable no-console */
class SearchResultsContainer extends React.Component {
	constructor(props) {
		super(props);
		const search = props.location.query.search;
		this.fetch = this.fetch.bind(this);
		this.state = { 
			items: [], 
			categories: [],
			isLoading: false, 
			search  
		};
	}

	componentDidMount() {
		this.fetch(this.state.search);
	}

	componentWillReceiveProps(newProps) {
		const search = newProps.location.query.search;
		if (search !== this.state.search) this.fetch(search);
	}

	fetch(search) {
		this.setState({ isLoading: true });
		api.search(search).then(response => this.setState({ items: response.items, categories: response.categories, isLoading: false }))
			.catch((err) => console.log(err));
	}

	render() {
		const { items, categories, search, isLoading } = this.state;
		return !isLoading && <SearchResults items={items} search={search} categories={categories} />;
	}
}
export default SearchResultsContainer;