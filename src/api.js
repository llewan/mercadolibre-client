const api = {
	__proto__: null,
	base: 'http://localhost:3000/api/items',
	fetch: fetch.bind(this),
	resolver(response) {
		const promise = response.json(); 
		return response.ok ? promise : promise.then(error => Promise.reject(error)); 
	},
	search(value) {
		return api.fetch(`${api.base}?search=${value}`).then(api.resolver);
	},
	get(value) {
		return api.fetch(`${api.base}/${value}`).then(api.resolver);
	},
};

export default api;