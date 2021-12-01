const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 3001; //Line 3
const pg = require('pg');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const ClientError = require('./client-error');
require('dotenv').config();


// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(staticMiddleware);

app.use(errorMiddleware);

const jsonMiddleware = express.json();

app.use(jsonMiddleware);


//
  //Vehicles
//

app.post('/api/vehicleinfo', (req, res, next) => {

  const { name, make, model, year, color, plate } = req.body;
  if (!name || !model) {
    throw new ClientError(400, 'name and model are required fields');

  }
  const sql = `
    insert into "vehicles" ("name", "make", "model", "year", "color",  "plate", "createdAt")
        values ($1, $2, $3, $4, $5, $6, now())
        returning *
  `;

  const params = [name, make, model, year, color, plate];

  db.query(sql, params)
    .then(result => {
      const veh = result.rows;
      res.json(veh);
    })
    .catch(err => {
      next(err);
    });

});


app.get('/api/vehicleinfo/:vehicleId', (req, res, next) => {
  const vehicleId = parseInt(req.params.vehicleId, 10);
  if (!Number.isInteger(vehicleId) || vehicleId < 1) {
    throw new ClientError(400, 'vehicleId must be a positive integer');

  }
  const params = [vehicleId];

  const sql = `
    select * from "vehicles"
    where "vehicleId" = $1
    `;

  db.query(sql, params)
    .then(results => {
      const [vehicle] = results.rows;
      if (!vehicle) {

        throw new ClientError(404, `cannot find vehicleId ${vehicleId}`);
      } else {

        res.json(vehicle);
      }
    })
    .catch(err => {
      next(err);
    });
});

app.get('/api/vehicleslist', (req, res, next) => {
  const sql = `
    select "name", "make", "model", "currentLocation", "vehicleId" from "vehicles";
    `;

  db.query(sql)
    .then(results => {
      const vehicles = results.rows;
      if (!vehicles) {

        throw new ClientError(404, 'cannot find vehicles');
      } else {

        res.json(vehicles);
      }
    })
    .catch(err => {
      next(err);
    });
});

app.put('/api/vehicleinfo/:vehicleId', (req, res, next) => {

  const vehicleId = parseInt(req.params.vehicleId, 10);
  const { name, make, model, year, plate } = req.body;

  if (!Number.isInteger(vehicleId) || vehicleId < 1) {
    throw new ClientError(400, 'vehicleId must be a positive integer');

  }

  const sql = `
      update "vehicles" set
        "name" = $1, "make" = $2,
        "model" = $3, "year" = $4,
        "plate" = $5
        where "vehicleId" = $6;
  `;

  const params = [name, make, model, year, plate, vehicleId];

  db.query(sql, params)
    .then(result => {
      const veh = result.rows;
      res.json(veh);
    })
    .catch(err => {
      next(err);
    });

});

app.get('/api/demoroutes', (req, res, next) => {

  const sql = `
    select "vehicleId", "demoRoute" from "vehicles";
    `;

  db.query(sql)
    .then(results => {

      res.json(results);

    })
    .catch(err => {
      next(err);
    });
});


//
  // Drivers
//


app.get('/api/driverinfo/:driverId', (req, res, next) => {
  const driverId = parseInt(req.params.driverId, 10);
  if (!Number.isInteger(driverId) || driverId < 1) {
    throw new ClientError(400, 'driverId must be a positive integer');
  }
  const params = [driverId];

  const sql = `
    select * from "drivers"
    where "driverId" = $1
    `;
  db.query(sql, params)
    .then(results => {
      const [driver] = results.rows;
      if (!driver) {

        throw new ClientError(404, `cannot find driverId ${driverId}`);
      } else {

        res.json(driver);
      }
    })
    .catch(err => {
      next(err);
    });

});

//End drivers



// create a GET route
app.get('/api/express_backend', (req, res) => { //Line 9
  res.send({ express: process.env.DATABASE_URL }); //Line 10
}); //Line 11
