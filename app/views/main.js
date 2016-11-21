import React from "react";
import ReactDOM from 'react-dom';
import components from "../components/mdlComponents";
import Modal from "./modal";
import update from 'react-addons-update';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      location: null,
      showModal: false,
      mapCenter: {lat: 0, lng: 0},
      addressComponents: {}
    };
  },

  onPlacesChanged: function() {
    let place = this.props.searchBox.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }
    let addressFormComponents = {};
    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      addressFormComponents[addressType] = place.address_components[i].short_name;
    }
    //add additional address fields
    addressFormComponents["streetAddress"] = (addressFormComponents["street_number"] || '')
      + " " + (addressFormComponents["route"] || '');
    addressFormComponents["unit"] = '';

    this.setState({
      addressComponents: addressFormComponents,
      mapCenter: {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()},
      location: place.formatted_address,
      showModal: true
    });
  },

  componentDidMount: function(){
    let input = ReactDOM.findDOMNode(this.refs.input);
    this.props.searchBox = new google.maps.places.Autocomplete(input);
    this.props.searchBox.setTypes = ['address'];
    this.props.searchBox.addListener('place_changed', this.onPlacesChanged);
  },

  changeAddressFormData: function(name, e) {
    let updatedAddress;
    if (!e.target) updatedAddress = e;
    else {
      updatedAddress = e.target.value
    };
    let addressComponents = update(this.state.addressComponents, {
       [name]: {$set: updatedAddress}
    });
    this.setState({addressComponents: addressComponents});
  },

  componentWillUnmount: function() {
    this.pros.searchBox.removeListener('place_changed', this.onPlacesChanged);
  },

  render: function() {
    return (
      <div className="container">
      {this.state.showModal ?
        <Modal mapCenter={this.state.mapCenter} modifyAddressForm={this.changeAddressFormData} addressFormData = {this.state.addressComponents} location={this.state.location}/> :
        <input ref="input" {...this.props} type="text" placeholder="Enter you home address"/>
      }
      </div>
    );
  }
});
