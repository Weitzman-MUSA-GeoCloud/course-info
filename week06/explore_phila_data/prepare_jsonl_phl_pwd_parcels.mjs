import BigJSON from 'big-json';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RAW_DATA_DIR = path.join(__dirname, 'raw_data/');
const PREPARED_DATA_DIR = path.join(__dirname, 'prepared_data/');

const rawFilename = path.join(RAW_DATA_DIR, 'phl_pwd_parcels.geojson');
const preparedFilename = path.join(PREPARED_DATA_DIR, 'phl_pwd_parcels.jsonl');

// Load the data from the GeoJSON file
const data = await BigJSON.parse({
  body: await fs.readFile(rawFilename)
});

// Write the data to a JSONL file
const f = await fs.open(preparedFilename, 'w');
for (const feature of data.features) {
  const row = feature.properties;
  row.geog = (
    feature.geometry && feature.geometry.coordinates
    ? JSON.stringify(feature.geometry)
    : null
  );
  await f.write(JSON.stringify(row) + '\n');
}

console.log(`Processed data into ${preparedFilename}`);
