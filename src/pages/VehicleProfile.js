import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import {useParams} from 'react-router-dom';


import React from 'react';


// export default class VehicleProfile extends React.Component{


// render(){
// let params = useParams();
//   return (
//       <>

//    {}
//   </>

//   )
// }
// }


export default function VehicleProfile(){
  let params = useParams();
  return <h2>Invoice: {params.vehicleId}</h2>;
}
