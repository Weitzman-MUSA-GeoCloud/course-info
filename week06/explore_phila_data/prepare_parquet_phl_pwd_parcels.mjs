import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { parquetWriteFile } from 'hyparquet-writer';
import { geojsonToWkb } from 'hyparquet-writer/src/wkb.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RAW_DATA_DIR = path.join(__dirname, 'raw_data/');
const PREPARED_DATA_DIR = path.join(__dirname, 'prepared_data/');

const rawFilename = path.join(RAW_DATA_DIR, 'phl_pwd_parcels.geojson');
const preparedFilename = path.join(PREPARED_DATA_DIR, 'phl_pwd_parcels.parquet');

// Load the data from the GeoJSON file
const data = JSON.parse(await fs.readFile(rawFilename, 'utf-8'));

// Build column arrays
const columnNames = Object.keys(data.features[0].properties);
const columns = Object.fromEntries(columnNames.map(name => [name, []]));
const geogColumn = [];

for (const feature of data.features) {
  for (const name of columnNames) {
    columns[name].push(feature.properties[name]);
  }
  const geom = feature.geometry && feature.geometry.coordinates
    ? geojsonToWkb(feature.geometry)
    : null;
  geogColumn.push(geom);
}

// Write to GeoParquet
await fs.mkdir(PREPARED_DATA_DIR, { recursive: true });
parquetWriteFile({
  filename: preparedFilename,
  columnData: [
    ...columnNames.map(name => ({ name, data: columns[name] })),
    { name: 'geog', data: geogColumn, type: 'BYTE_ARRAY' },
  ],
  kvMetadata: [
    { key: 'geo', value: JSON.stringify({
      version: '1.1.0',
      primary_column: 'geog',
      columns: { geog: { encoding: 'WKB', geometry_types: [] } },
    }) },
  ],
});

console.log(`Processed data into ${preparedFilename}`);
