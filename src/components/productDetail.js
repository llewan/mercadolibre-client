import React from 'react';
import styled from 'styled-components';
import Price from './priceBox';

const ProductDetail = ({title, description, picture, price, condition, sold_quantity}) => {
  const renderDescription = () => (
    <div className="productDetail__description">
      <h2 className="productDetail__description--title">Descripcion del producto</h2>
      <p className="productDetail__description--body">{description}</p>
    </div>
  );

  return (
    <StyledProduct className="productDetail">
      <div className="productDetail__wrapper">
        <div className="productDetail__wrapper__image"><img src={picture} /></div>
        <div className="productDetail__wrapper__details">
          <span className="productDetail__wrapper__details--condition">{condition === 'new' ? 'Nuevo' : '' } - {String(sold_quantity) } vendidos</span>
          <span className="productDetail__wrapper__details--title">{title}</span>
          <StyledPriceBox {...price} />
          <button  className="productDetail__wrapper__details--button">Comprar</button>
        </div>
      </div>
      { description ? renderDescription() : null }
    </StyledProduct>
  );
};

const StyledProduct = styled.section`
  max-width: ${props => props.theme.baseWidth}px;
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.baseSpacing * 2}px auto;
  justify-content: space-between;
  background: white;
  border-radius: 2px;
  padding: ${props => props.theme.baseSpacing * 2}px;
  box-sizing: border-box;
  .productDetail__wrapper {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    .productDetail__wrapper__image {
      display: flex;
      justify-content: center;
      max-width: 680px;
      flex: 7;
    }
    .productDetail__wrapper__details {
      flex: 3;
      display: flex;
      flex-direction: column;
      color: ${props => props.theme.primaryColor};
      .productDetail__wrapper__details--condition {
        font-size: 14px;
        margin-bottom: ${props => props.theme.baseSpacing}px;
      }
      .productDetail__wrapper__details--title {
        font-size: 24px;
        margin-bottom: ${props => props.theme.baseSpacing * 2}px;
      }
      .productDetail__wrapper__details--button {
        background: #3483FA;
        color: white;
        border: 0;
        border-radius: 4px;
        padding: 0.8em 0;
      }
    }
  }
  .productDetail__description {
    .productDetail__description--title {
      font-size: 28px;
      color: #666666;
      font-weight: normal;
      margin: ${props => props.theme.baseSpacing * 2}px 0;
    }
    .productDetail__description--body {
      font-size: 16px;
      color: #999999;
      margin: 0;
    }
  }
`;

const StyledPriceBox = styled(Price)`
  font-size: 46px;
  margin-bottom: ${props => props.theme.baseSpacing * 2}px;
  color: ${props => props.theme.main};
  .decimals {
    vertical-align: super;
    font-size: 0.5em;
  }
`;

export default ProductDetail;