import React from 'react';
import { browserHistory } from 'react-router';
import styled from 'styled-components';
import Price from './priceBox';

const Item = ({ title, id, picture, price, free_shipping, condition, state }) => {
	const handleClick = (e) => {
		e.preventDefault(); 
		browserHistory.push(`/items/${id}`);
	};
	return (
		<StyledItem className="item" onClick={handleClick}>
			<img className="item__image" src={picture} />	
			<div className="item__details">
				<StyledPriceBox {...price}> { free_shipping ? <div className="shipping" /> : null} </StyledPriceBox>
				<h2 className="item__details__title">{title} {condition === 'new' ? 'Nuevo' : '' }</h2>
			</div>	
			<span className="item__location">{state}</span>	
		</StyledItem>
	);
};

const StyledItem = styled.li`
	display: flex;
	border-bottom: 1px #e9e9e9 solid;
	padding: ${props => props.theme.baseSpacing}px 0 ;
	:hover {
		cursor: pointer;
	}
	&:last-child {
		border-bottom: 0;
	}
	.item__image {
		border-radius: 4px;
		width: 180px;
		height: 180px;
		padding 0 ${props => props.theme.baseSpacing}px;
	}
	.item__details {
		flex: 7;
		padding-left: ${props => props.theme.baseSpacing}px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		.item__details__title {
			color: ${props => props.theme.primaryColor};
			font-size: 18px;
			font-weight: normal;
			margin-top: ${props => props.theme.baseSpacing * 2}px;
		}
	}
	.item__location {
		flex: 3;
		margin-top: ${props => props.theme.baseSpacing}px;
		font-size: 12px;
		color: #999999;
	}
`;

const StyledPriceBox = styled(Price)`
	color: ${props => props.theme.primaryColor};
	font-size: 24px;
	margin-top: ${props => props.theme.baseSpacing}px;
  .decimals {
		vertical-align: super;
		font-size: 0.5em;
	}
	.shipping {
		width: 18px;
		height: 18px;
		display: inline-block;
		background-image: url('../assets/ic_shipping@2x.png.png.png');
		background-size: 100% 100%;
	}
`;

export default Item;