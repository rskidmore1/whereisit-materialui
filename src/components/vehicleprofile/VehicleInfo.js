import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';
import React from 'react';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Elder Developer',
  name: 'Ryan Skidmore',
  timezone: 'GTM-7',
  description: 'Wowo I am such a pretty girl '
};


//Replace all this with the map

export default class VehicleInfo extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      vehicle: {}
    }

    fetch(`/api/vehicleinfo/${this.props.vehicleid.vehicleId}`)
    .then(response => response.json())
    .then(data => {
      this.setState({ vehicle: data })
      })



  };


render(props){
  // console.log(this.state.vehicle)
  return(
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 100,
              width: 100
            }}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {this.state.vehicle.name}

          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >

            {`${user.description}`}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${moment().format('hh:mm A')} ${user.timezone}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>
  )
}

}
