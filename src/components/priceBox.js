import React from 'react';
import Constants from '../constants';

const PriceBox = ({ className, children, amount, decimals, currency }) => {
	const format = (n = 0) => {
		const calc = (digit, i) => (i && i % 3 == 0) ? `${digit}.` : digit;
		return n.toString().split('').reverse().map(calc).reverse().join('');
	};
	const renderDecimals = () => decimals ? <span className="decimals">{decimals}</span> : null;
	const mapCurrency = (key = 'USD') => Constants.CURRENCY_VALUES[key];

	return (
		<div className={className}>
			{ mapCurrency(currency) }
			{ format(amount) }
			{ renderDecimals() } 
			{ children }
		</div>
	);
};

export default PriceBox;