import React from 'react';
import ApiService from '../../utils/apiService';

class NewProviderForm extends React.Component {

  // TASK 4: Add New Provider
  // Add Functionality to the form below
  // On submission it should make a POST request to 
  // the server to create a new provider.
  // Refer to the API documentation for details.
  state = {
    formData: {
      name: '',
      address: '',
      state: '',
      rating: 0,
      type: '',
      imageUrl: 'https://via.placeholder.com/400x200',
    },
    isSubmiting: false,
  }

  handleInputChange = (event) => {
    event.persist();
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [event.target.name]: event.target.value,
      }
    }));
  }

  handleImageUpload = async (event) => {
    const file = event.target.files[0]
    let formData = new FormData();
    formData.set('file', file)

    const data = await ApiService.post(
      ApiService.ENDPOINTS.imageUpload, 
      { body: formData }
    )

    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        imageUrl: data.data.url,
      }
    }));
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ isSubmiting: true });
    await ApiService.post(
      ApiService.ENDPOINTS.providers,
      { 
        body: JSON.stringify(this.state.formData),
        headers: {
          "Content-Type": "application/json"
        },
      }
    );
    this.setState({ isSubmiting: false });
    window.alert('Success, new provider added');
  }

  render() {
    return (
      <form 
        className="form" 
        onSubmit={this.handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Provider Name:</label>
          <input 
            className="input__style_1" 
            type="text" name="name"
            required
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Provider Address:</label>
          <input 
            className="input__style_1" 
            type="text" 
            name="address"
            required
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Provider State:</label>
          <input 
            className="input__style_1"
            type="text" 
            name="state"
            required
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Provider Rating:</label>
          <select 
            className="select input__style_1" 
            type="number" 
            name="rating" 
            onChange={this.handleInputChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="type">Provider type:</label>
          <select 
            className="select input__style_1" 
            type="text" 
            name="type"
            required
            onChange={this.handleInputChange}
          >
            <option value="hospital">Hospital</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="clinic">Clinic</option>
          </select>
        </div>        
        <div className="form-group">
          <label htmlFor="image">Provider Image</label>
          <img src={this.state.formData.imageUrl} alt="new provider"/>
          <input type="file" name="file" onChange={this.handleImageUpload} />
        </div>
        <div className="form-group button-row">
          <button
            type="submit"
            className="btn btn-primary no-margin"
            disabled={this.state.disabled}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default NewProviderForm;
