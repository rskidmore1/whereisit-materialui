// import React from 'react';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// class LiveMapComp extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       isLoaded: false,
//       networkError: '',
//       demoRoutes: [],
//       timerId: 0,
//       demoRoutesMaxCount: 0,
//       demoCount: 0,

//       mapCenter: {
//         lat: 33.91696347,
//         lng: -117.88405129
//       }
//     }
//     };

  

//   render() {

//     const containerStyle = {
//       position: 'relative',
//       width: '100%',
//       height: '100%'
//     };

//     return (
//       <React.Fragment>
//        <div className="map-div">
//           <Map

//             google={this.props.google}
//             containerStyle={containerStyle}
//             initialCenter={this.state.mapCenter}
//             zoom={10} >

 
//               <Marker 
//                 position={this.state.mapCenter} />
              
//            </Map >
//            </div>
//       </React.Fragment>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: (process.env.REACT_APP_GOOGLE_MAPS_TOKEN)

// })(LiveMapComp);
