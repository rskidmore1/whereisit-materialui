import { Helmet } from 'react-helmet';
import {useParams} from 'react-router-dom';
 import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import React from 'react';
import VehicleInfo from '../components/vehicleprofile/VehicleInfo';
import VehicleInfoDetails from '../components/vehicleprofile/VehicleInfoDetails';


export default function VehicleProfile(){
  let params = useParams();
  return (

     <>
    <Helmet>
        <title>Account | Material Kit | vehicle iD {params.vehicleId}</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
              <VehicleInfo />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
              <VehicleInfoDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
  )
}
