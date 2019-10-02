import React from 'react';
import NewProviderForm from './forms/NewProviderForm';

class NewProvider extends React.Component {

  render(){
    return (
      <div className="new-provider">
        <h2 className="text-header">Can't find a Provider?</h2>
        <p className="text-body">Feel free to recommend a new one.</p>
        <hr/>
        <NewProviderForm />
      </div>
    )
  }
};

export default NewProvider;