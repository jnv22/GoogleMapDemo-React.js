import components from "../components/mdlComponents";
import React from "react";
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

var Map = React.createClass({
  render: function() {
    const map = () => {
      const marker = {
        position: {
         lat: this.props.mapCenter.lat,
         lng: this.props.mapCenter.lng,
        },
        defaultAnimation: 3
      }
      function createMapOptions (maps) {
        return {
        panControl: false,
        mapTypeControl: false,
        zoomControl: false,
        draggable: false,
        disableDoubleClickZoom: true,
        streetViewControl: false,
        scrollwheel: false
        }
      }
      return (
        <section className="map-container">
          <GoogleMapLoader
            containerElement={
              <div
                {...this.props.containerElementProps}
                style={{
                  height: "100%",
                }}
              />
            }
            googleMapElement={
              <GoogleMap
                defaultZoom={15}
                options={createMapOptions()}
                defaultCenter={{ lat: this.props.mapCenter.lat, lng: this.props.mapCenter.lng}}
              >
              <Marker
                {...marker}
              />
              </GoogleMap>
            }
          />
        </section>
      )
    }
    return <components.Card {...this.props} map={map} isExpanded={true}/>
  }
})

module.exports = Map;
