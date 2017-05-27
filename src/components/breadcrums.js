import React from 'react';
import styled from 'styled-components';

const Breadcrums = ({ categories }) => {
	const renderCategoryFilter = (aCategory, index, all) => {
		return index != (all.length - 1) ? 
			<span key={index}>{aCategory}> </span> : 
			<span key={index} className="selected">{aCategory}</span>;
	};
	return (
		<StyledBreadcrums>
			{ categories.map(renderCategoryFilter) }
		</StyledBreadcrums>
	);
};

const StyledBreadcrums = styled.section`
	padding: ${props => props.theme.baseSpacing}px 0;
	color: #999999;
	font-size: 14px;
	.selected {
		color: #666666;
	}
`;

export default Breadcrums;