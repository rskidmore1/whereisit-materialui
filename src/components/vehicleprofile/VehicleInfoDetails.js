import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

export default class VehicleInfoDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      vehicle: {},
      firstName: 'Katarina',
      lastName: 'Smith',
      email: 'demo@devias.io',
      phone: '',
      state: 'Alabama',
      country: 'USA',
      clearance: 'Top Secret',
      handler: 'Mr. Smith'
    }


    fetch(`/api/vehicleinfo/${this.props.vehicleid.vehicleId}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        this.setState({ vehicle: data })
      })

  };
  handleChange (event) {
    // console.log(event)
  };

  handleSubmit(event){
    console.log(event.target)
  }


  render(props) {

    return (
      <form
        autoComplete="off"
        noValidate
        {...props}
      >
        <Card>
          <CardHeader
            subheader="The information can be edited"
            title="Profile"
          />
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="Name"
                  name="name"
                  onChange={this.handleChange}
                  required
                  // value={String(this.state.vehicle.name)}
                  defaultValue={this.state.vehicle.name}
                  // defaultValue="hello"
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Make"
                  name="make"
                  onChange={this.handleChange}
                  required
                  value={String(this.state.vehicle.make)}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Model"
                  name="model"
                  onChange={this.handleChange}
                  required
                  value={String(this.state.vehicle.model)}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Year"
                  name="year"
                  onChange={this.handleChange}
                  type="number"
                  value={String(this.state.vehicle.year)}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Plate"
                  name="plate"
                  onChange={this.handleChange}
                  required
                  value={String(this.state.vehicle.plate)}
                  variant="outlined"
                />
              </Grid>

            </Grid>
          </CardContent>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 2
            }}
          >
            <Button
              color="primary"
              variant="contained"
              onClick={this.handleSubmit}
            >
              Save details
            </Button>
          </Box>
        </Card>
      </form>
      )
  }

}
