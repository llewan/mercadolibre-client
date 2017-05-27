import React from 'react';
import Item from './item';
import Breadcrums from './breadcrums';
import styled from 'styled-components';

const SearchResults = ({ items, categories }) => {
  const renderNoSearchResults = () => <span>No se encontraron resultados</span>;
  const renderItem = (item, index) => <Item key={index} {...item} />;
  const renderSearchResults = () => items.map(renderItem);
  return (
    <Section className="searchResults">
      <Breadcrums categories={categories} />
      <ul className="searchResults__itemContainer">{ items.length ? renderSearchResults() : renderNoSearchResults() }</ul>
    </Section>
  );
};

const Section = styled.section`
  max-width: ${props => props.theme.baseWidth}px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: ${props => props.theme.baseSpacing * 2}px;
  justify-content: space-between;
  .searchResults__itemContainer {
    background: white;
    border-radius: 2px;
    padding: 0 ${props => props.theme.baseSpacing}px;
  }
`;

export default SearchResults;