import React from 'react';

import ProviderCard from '../components/ProviderCard';
import ApiService from '../utils/apiService';
import LoadingScreen from '../components/common/LoadingScreen';


class ViewProvider extends React.Component {
  state = {
    isLoading: true,
    provider: {},
  }
  componentDidMount() {
    const providerId = this.props.match.params.id;
    ApiService.get(`${ApiService.ENDPOINTS.providers}/${providerId}`)
      .then(({ data: provider }) => {
        this.setState({
          isLoading: false,
          provider
        });
      });
  }
  render () {
    const { isLoading, provider } = this.state;
    return (
      <div>
        {isLoading ? (
              <LoadingScreen />
            ) : (
              <ProviderCard
                key={provider.id}
                imageUrl={provider.imageUrl}
                address={provider.location.address}
                name={provider.name}
                rating={provider.rating}
                providerType={provider.type}
                onResultSelected={() => {}}
                cardType="bg"
              />
            )
        }
      </div>
    )
  }
}

export default ViewProvider;