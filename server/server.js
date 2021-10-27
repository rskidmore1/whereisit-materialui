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




// create a GET route
app.get('/api/express_backend', (req, res) => { //Line 9
  res.send({ express: process.env.DATABASE_URL }); //Line 10
}); //Line 11


