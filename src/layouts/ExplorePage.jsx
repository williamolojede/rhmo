import React from 'react';
import NavBar from '../components/common/NavBar';
import ProviderGrid from '../components/ProviderGrid';
import NewProvider from '../components/NewProvider';
import ApiService from '../utils/apiService';
import { jsonGet } from '../utils/utils';
import LoadingScreen from '../components/common/LoadingScreen';

class ExplorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      providers: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setLoading(true);
    ApiService.get(ApiService.ENDPOINTS.providers)
      .then(({ data: providers }) => {
        this.setState({
          isLoading: false,
          providers,
        });
      });
  }

  setLoading = (isLoading) => {
    this.setState({
      isLoading
    });
  }

  filterProviders = (event) => {
    // TASK 2:
    // On input, filter Available Providers based on Name, Address and Type
    // P.s the JSON search function you created in utils
    // can come in handy here ;)
    // i.e jsonGet(json, 'location.address') to get the address
    //
    // ============== CODE GOES BELOW THIS LINE :) ==============
    const text = event.target.value.trim();
    const providers = this.state.providers.filter((provider) => {
      const address = jsonGet(provider, 'location.address')
      const name = jsonGet(provider, 'name')
      const type = jsonGet(provider, 'type')
      const isPartOfSearch = (address === text) || (name === text) || (type === text)
      return isPartOfSearch;
      // console.log({ address, name, type });
    })

    this.setState({ providers });
  }

  render() {
    const { isLoading, providers } = this.state;
    const { history } = this.props;
    return (
      <div className="container">
        <NavBar />
        <div className="content__main">
          <section className="main__top-providers">
            <h2 className="text-header">Our Providers</h2>
            <div className="flex-row">
              <div>
                <input
                  type="text"
                  className="input__style_1 input__search"
                  placeholder="&#xf002; Search with Provider Name, Address, or Type"
                  onChange={this.filterProviders}
                  onInput={this.filterProviders}
                />
              </div>
            </div>
            {isLoading ? (
              <LoadingScreen />
            ) : (
              <ProviderGrid
                providers={providers}
                onResultSelected={id => history.push(`/providers/${id}`)}
              />
            )}
          </section>
          <section className="main__new-provider fixed">
            <NewProvider />
          </section>
        </div>
      </div>
    );
  }
}

export default ExplorePage;
