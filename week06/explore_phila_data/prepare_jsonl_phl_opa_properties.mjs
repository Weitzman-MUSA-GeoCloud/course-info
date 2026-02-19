import * as csv from 'csv/sync';
import * as codes from '@esri/proj-codes';
import fs from 'fs/promises';
import { wktToGeoJSON } from 'betterknown';
import proj4 from 'proj4';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RAW_DATA_DIR = path.join(__dirname, 'raw_data/');
const PREPARED_DATA_DIR = path.join(__dirname, 'prepared_data/');

const rawFilename = path.join(RAW_DATA_DIR, 'phl_opa_properties.csv');
const preparedFilename = path.join(PREPARED_DATA_DIR, 'phl_opa_properties.jsonl');

// Load the data from the CSV file
const data = csv.parse(
  await fs.readFile(rawFilename),
  {columns: true},
);

// Set up the projection
proj4.defs('EPSG:2272', codes.lookup(2272).wkt);
proj4.defs('EPSG:4326', codes.lookup(4326).wkt);

// Write the data to a JSONL file
const f = await fs.open(preparedFilename, 'w');
for (const row of data) {
  const geom = wktToGeoJSON(row.shape, { proj: proj4 });
  const [x, y] = geom.coordinates;
  row.geog = `POINT (${x} ${y})`;

  delete row.shape;
  await f.write(JSON.stringify(row) + '\n');
}

console.log(`Processed data into ${preparedFilename}`);
