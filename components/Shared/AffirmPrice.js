import affirm from '@utils/affirm';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const AffirmWrapper = styled.div`
  font-size: 1rem;
  .affirm-ala-price {
    font-weight: bold;
  }
  a {
    font-weight: bold;
    color: black;
    text-transform: capitalize;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const AffirmCartPrice = ({ totalAmount, flow, affirmType }) => {
  useEffect(() => {
    if (affirm?.ui?.refresh) {
      affirm.ui.refresh();
    }
  }, [totalAmount]);

  return (
    <AffirmWrapper>
      <small>
        <p
          className={`affirm-${affirmType}`}
          data-page-type={flow}
          data-amount={(parseFloat(totalAmount) * 100).toString()}
        />
      </small>
    </AffirmWrapper>
  );
};

AffirmCartPrice.propTypes = {
  totalAmount: PropTypes.number,
  flow: PropTypes.string,
  affirmType: PropTypes.string,
};
AffirmCartPrice.defaultProps = {
  totalAmount: 0,
  flow: 'product',
  affirmType: 'as-low-as',
};

export default AffirmCartPrice;
