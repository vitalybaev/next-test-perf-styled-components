import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  padding: 20px;
  border-bottom: 1px #ccc solid;
`;

const Link = styled.a`
  color: ${(props) => props.price > 15000 ? 'red' : 'green'};
`;

const Title = styled.span`
  font-size: 20px;
`;

const Price = styled.div`
  font-weight: 800;
  margin-top: 15px;
`

const ProductCard = ({ product }) => {
  return (
    <Wrapper>
      <Link price={product.price}>
        <Title>{product.name}</Title>
      </Link>
      <Price>
        {product.price}
      </Price>
    </Wrapper>
  );
};

ProductCard.propTypes = {
  //
};

ProductCard.defaultProps = {
  //
};

export default ProductCard;
