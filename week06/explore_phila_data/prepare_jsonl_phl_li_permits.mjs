import gdal from 'gdal-async';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RAW_DATA_DIR = path.join(__dirname, 'raw_data/');
const PREPARED_DATA_DIR = path.join(__dirname, 'prepared_data/');

const rawFilename = path.join(RAW_DATA_DIR, 'phl_li_permits.gpkg');
const preparedFilename = path.join(PREPARED_DATA_DIR, 'phl_li_permits.jsonl');

// Load the data from the GeoPackage file
const source = gdal.open(rawFilename);
const layer = source.layers.get(0);
const features = layer.features;

// Write the data to a JSONL file
const f = await fs.open(preparedFilename, 'w');
for (const feature of features) {
  const fieldNames = feature.fields.getNames();
  const fieldEntries = fieldNames.map((name) => [name, feature.fields.get(name)]);
  const geometry = feature.getGeometry();

  const row = Object.fromEntries(fieldEntries);
  row.geog = geometry.isEmpty() ? null : geometry.toJSON();
  await f.write(JSON.stringify(row) + '\n');
}

console.log(`Processed data into ${preparedFilename}`);
