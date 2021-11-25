import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import VehicleListResults from '../components/vehicle/VehicleListResults';
import VehicleListToolbar from '../components/vehicle/VehicleListToolbar';
import vehicles from '../__mocks__/vehicles';

import React from 'react';


export default class VehicleList extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      vehicles : []
    }

    fetch('/api/vehicleslist')
    .then(reponse => reponse.json())
    .then(data => {
      this.setState({vehicles : [...data]})
      })

  }


render(){
  console.log(this.state.vehicles)
  return (
      <>
    <Helmet>
      <title>Vehicles | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <VehicleListToolbar />
        <Box sx={{ pt: 3 }}>
          <VehicleListResults vehicles={this.state.vehicles} />
        </Box>
      </Container>
    </Box>
  </>

  )
}
}
