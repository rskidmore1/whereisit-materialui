import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';



class MapVehicleProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapCenter: {
        lat: 33.91696347,
        lng: -117.88405129
      },
      vehicleCoordinates: {
        lat: 33.91696347,
        lng: -117.88405129
      }
    };

    fetch(`/api/vehicleinfo/${this.props.vehicleid.vehicleId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ vehicleCoordinates: {lat: data.currentLocation.lat, lng: data.currentLocation.lng}})
      })

  }

  render() {
    const containerStyle = {
      position: 'relative',
      width: '100%',
      height: '100%'
    };
    console.log(this.state.vehicleCoordinates.lat)
    return (

      <React.Fragment>
        <div className="vehicle-map-div ">
          <Map

            google={this.props.google}
            containerStyle={containerStyle}
            initialCenter={this.state.mapCenter}
            zoom={8}
            mapTypeControl={false}
            streetViewControl={false}
            zoomControl={false}
            fullscreenControl={false}
          >

            <Marker
              position={{ lat: this.state.vehicleCoordinates.lat, lng: this.state.vehicleCoordinates.lng }}
            />
          </Map >
        </div>
      </React.Fragment>
    );
  }

}


export default GoogleApiWrapper({
  apiKey: (process.env.GOOGLE_MAPS_TOKEN)

})(MapVehicleProfile);
