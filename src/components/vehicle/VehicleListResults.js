import { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Link
} from '@material-ui/core';
import getInitials from '../../utils/getInitials';

const VehicleListResults = ({ vehicles, ...rest }) => {
  const [selectedVehicleIds, setSelectedVehicleIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedVehicleIds;

    if (event.target.checked) {
      newSelectedVehicleIds = vehicles.map((vehicle) => vehicle.id);
    } else {
      newSelectedVehicleIds = [];
    }

    setSelectedVehicleIds(newSelectedVehicleIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedVehicleIds.indexOf(id);
    let newSelectedVehicleIds = [];

    if (selectedIndex === -1) {
      newSelectedVehicleIds = newSelectedVehicleIds.concat(selectedVehicleIds, id);
    } else if (selectedIndex === 0) {
      newSelectedVehicleIds = newSelectedVehicleIds.concat(selectedVehicleIds.slice(1));
    } else if (selectedIndex === selectedVehicleIds.length - 1) {
      newSelectedVehicleIds = newSelectedVehicleIds.concat(selectedVehicleIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedVehicleIds = newSelectedVehicleIds.concat(
        selectedVehicleIds.slice(0, selectedIndex),
        selectedVehicleIds.slice(selectedIndex + 1)
      );
    }

    setSelectedVehicleIds(newSelectedVehicleIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedVehicleIds.length === vehicles.length}
                    color="primary"
                    indeterminate={
                      selectedVehicleIds.length > 0
                      && selectedVehicleIds.length < vehicles.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Make
                </TableCell>
                <TableCell>
                  Model
                </TableCell>
                <TableCell>
                  Id
                </TableCell>


              </TableRow>
            </TableHead>
            <TableBody>
              {vehicles.slice(0, limit).map((vehicle) => (
                <TableRow
                  hover
                  key={vehicle.vehicleId}
                  selected={selectedVehicleIds.indexOf(vehicle.vehicleId) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedVehicleIds.indexOf(vehicle.vehicleId) !== -1}
                      onChange={(event) => handleSelectOne(event, vehicle.vehicleId)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={vehicle.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(vehicle.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        <Link href={`/app/vehicles/${vehicle.vehicleId}`}>{vehicle.name}</Link>


                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {vehicle.make}
                  </TableCell>
                  <TableCell>
                    {vehicle.model}
                  </TableCell>
                  <TableCell>
                    {vehicle.vehicleId}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={vehicles.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

VehicleListResults.propTypes = {
  vehicles: PropTypes.array.isRequired
};

export default VehicleListResults;
