import React from 'react';
import PropTypes from 'prop-types';
import ProviderCard from './ProviderCard';

const ProviderGrid = ({ providers, onResultSelected }) => (
  <div className="provider-grid">
    {providers.length === 0 ? (
      <div className="center" style={{ width: '100%' }}>
        <p>No Providers Found.</p>
      </div>
    )
      : providers.map(provider => (
        <ProviderCard
          key={provider.id}
          id={provider.id}
          imageUrl={provider.imageUrl}
          address={provider.location.address}
          name={provider.name}
          rating={provider.rating}
          providerType={provider.type}
          onResultSelected={onResultSelected}
          cardType="bg"
        />
      ))
    }
  </div>
);

ProviderGrid.propTypes = {
  providers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    address: PropTypes.string,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    rating: PropTypes.number,
    type: PropTypes.string
  })).isRequired
};

export default ProviderGrid;
