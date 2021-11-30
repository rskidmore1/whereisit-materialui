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

export default class DriverInfoDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      driver: {},
      firstName: 'Katarina',
      lastName: 'Smith',
      email: 'demo@devias.io',
      phone: '',
      state: 'Alabama',
      country: 'USA',
      clearance: 'Top Secret',
      handler: 'Mr. Smith'
    }



    fetch(`/api/driverinfo/1`)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        this.setState({ driver: data })
      })

  };
  handleChange (event) {
    //do make this work
  };


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
                  value={String(this.state.driver.name)}
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
                  label="Email"
                  name="email"
                  onChange={this.handleChange}
                  required
                  value={String(this.state.driver.email)}
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
                  label="Phone"
                  name="phone"
                  onChange={this.handleChange}
                  required
                  value={String(this.state.driver.phone)}
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
            >
              Save details
            </Button>
          </Box>
        </Card>
      </form>
      )
  }

}
