import React from 'react';
import PropTypes from 'prop-types';
import ProviderCard from './ProviderCard';

const ProviderList = ({ providers, onResultSelected }) => (
  <ul className="provider-list">
    {providers.length === 0 ? (
      <li>
        <p>No Providers Found.</p>
      </li>
    )
      : providers.map(provider => (
        <ProviderCard
          key={provider.id}
          id={provider.id}
          address={provider.location.address}
          imageUrl={provider.imageUrl}
          name={provider.name}
          rating={provider.rating}
          providerType={provider.type}
          onResultSelected={onResultSelected}
          cardType="sm"
        />
      ))
    }
  </ul>
);

ProviderList.propTypes = {
  providers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    address: PropTypes.string,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    rating: PropTypes.number,
    providerType: PropTypes.string
  })).isRequired
};

export default ProviderList;
