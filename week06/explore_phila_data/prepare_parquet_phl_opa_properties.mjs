import * as csv from 'csv/sync';
import * as codes from '@esri/proj-codes';
import fs from 'fs/promises';
import { wktToGeoJSON } from 'betterknown';
import proj4 from 'proj4';
import path from 'path';
import { fileURLToPath } from 'url';
import { parquetWriteFile } from 'hyparquet-writer';
import { geojsonToWkb } from 'hyparquet-writer/src/wkb.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RAW_DATA_DIR = path.join(__dirname, 'raw_data/');
const PREPARED_DATA_DIR = path.join(__dirname, 'prepared_data/');

const rawFilename = path.join(RAW_DATA_DIR, 'phl_opa_properties.csv');
const preparedFilename = path.join(PREPARED_DATA_DIR, 'phl_opa_properties.parquet');

// Load the data from the CSV file
const data = csv.parse(
  await fs.readFile(rawFilename),
  {columns: true},
);

// Set up the projection
proj4.defs('EPSG:2272', codes.lookup(2272).wkt);
proj4.defs('EPSG:4326', codes.lookup(4326).wkt);

// Build column arrays
const columnNames = Object.keys(data[0]).filter(name => name !== 'shape');
const columns = Object.fromEntries(columnNames.map(name => [name, []]));
const geogColumn = [];

for (const row of data) {
  for (const name of columnNames) {
    columns[name].push(row[name]);
  }
  const geom = wktToGeoJSON(row.shape, { proj: proj4 });
  const [x, y] = geom.coordinates;
  geogColumn.push(geojsonToWkb({ type: 'Point', coordinates: [x, y] }));
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
