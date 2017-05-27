import React from 'react';
import { Link, browserHistory } from 'react-router';
import styled from 'styled-components';

const SearchPanel = ({ onChange, value }) => {
	const handleSubmit = e => { 
		e.preventDefault(); 
		browserHistory.push(`/items?search=${value}`); 
	};
	const handleChange = e => onChange(e.target.value);
	return (
		<Header class="header">
			<form className="header__wrapper" onSubmit={handleSubmit}>
				<Link to="/" className="header__logo" />
				<input 
					className="header__searchInput"
					type="text" 
					placeholder="Nunca dejes de buscar" 
					value={value} 
					onChange={handleChange} />
				<button 
					className="header__submitButton" 
					type="submit"> 
					<i className="header__submitButton__icon" />
				</button>
			</form>	
		</Header>
	);
};

const Header = styled.header`
	background: #FFE600;
	padding: ${props => props.theme.baseSpacing / 2}px;
	margin: 0 auto;
	.header__wrapper {
		max-width: ${props => props.theme.baseWidth}px;
		display: flex;
		margin: 0 auto;
		justify-content: space-between;
	}
	.header__logo { 
		width: 53px;
		height: 36px;
		background-image: url('../assets/Logo_ML@2x.png.png.png')
		background-size: 100% 100%;
	}
	.header__searchInput {
		flex: 10;
		font-size: 16px;
		margin-left: ${props => props.theme.baseSpacing}px;
		border-radius: 2px 0 0 2px;
		border: 0;
		padding: ${props => props.theme.baseSpacing / 2}px;
		&::-webkit-input-placeholder {
			color: #9C9C9C;
		}
		&:focus {
			outline: none;
		}
	}
	.header__submitButton {
		background: #EEEEEE;
		border: 0;
		border-radius: 0 2px 2px 0;
		padding: 0;
		.header__submitButton__icon {
			width: 16px;
			display: block;
			height: 16px;
			background-image: url(../assets/ic_Search@2x.png.png.png);
			background-size: 100% 100%;
			margin: 10px 12px;
		}
	}
`;  

export default SearchPanel;