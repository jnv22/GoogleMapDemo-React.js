import React from "react";
import components from "../components/mdlComponents";
import Form from "../components/form";
import Map from "../components/map";
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

var Card = React.createClass({
  getInitialState: function() {
    return {
      showMap: true,
    }
  },
  showAddressForm: function() {
    this.setState({
      showMap: !this.state.showMap,
    })
  },
  render: function() {
    const cardOptions = {
      map: {
        successButton: {
          text: "Yes, that's right"
        },
        failButton: {
          text: "No, add unit # or fix address",
          onclick: this.showAddressForm
        }
      },
      addressForm: {
        successButton: {
          text: "Continue"
        },
        failButton: {
          text: "Cancel",
        }
      }
    }
    return (
      <div>
        {this.state.showMap ?
        <Map {...this.props} content={this.props.location} modalOptions={cardOptions.map}/> :
        <Form {...this.props} modalOptions={cardOptions.addressForm} />}
      </div>
    )
  }
})

module.exports = Card;
