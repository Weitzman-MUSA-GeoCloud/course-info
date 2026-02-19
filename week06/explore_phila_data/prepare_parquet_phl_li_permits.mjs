import gdal from 'gdal-async';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { parquetWriteFile } from 'hyparquet-writer';
import { geojsonToWkb } from 'hyparquet-writer/src/wkb.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RAW_DATA_DIR = path.join(__dirname, 'raw_data/');
const PREPARED_DATA_DIR = path.join(__dirname, 'prepared_data/');

const rawFilename = path.join(RAW_DATA_DIR, 'phl_li_permits.gpkg');
const preparedFilename = path.join(PREPARED_DATA_DIR, 'phl_li_permits.parquet');

// Load the data from the GeoPackage file
const source = gdal.open(rawFilename);
const layer = source.layers.get(0);
const features = layer.features;

// Build column arrays
let columnNames = null;
const columns = {};
const geogColumn = [];

for (const feature of features) {
  if (!columnNames) {
    columnNames = feature.fields.getNames();
    for (const name of columnNames) {
      columns[name] = [];
    }
  }
  for (const name of columnNames) {
    columns[name].push(feature.fields.get(name));
  }
  const geometry = feature.getGeometry();
  geogColumn.push(geometry.isEmpty() ? null : geojsonToWkb(geometry.toJSON()));
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
