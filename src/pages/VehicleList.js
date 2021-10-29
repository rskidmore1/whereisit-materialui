import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import VehicleListResults from '../components/vehicle/VehicleListResults';
import VehicleListToolbar from '../components/vehicle/VehicleListToolbar';
import vehicles from '../__mocks__/vehicles';

const VehicleList = () => (
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
          <VehicleListResults vehicles={vehicles} />
        </Box>
      </Container>
    </Box>
  </>
);

export default VehicleList;
