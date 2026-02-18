import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, 'raw_data/');

// Download the L&I Permits data as a GeoPackage
const url = 'https://phl.carto.com/api/v2/sql?filename=permits&format=gpkg&skipfields=cartodb_id&q=SELECT%20*%20FROM%20permits%20WHERE%20permitissuedate%20%3E=%20%272016-01-01%27';
const filename = path.join(DATA_DIR, 'phl_li_permits.gpkg');

const response = await fetch(url);
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}

// It matters whether there's text or binary data in the response. We deal with
// binary data by putting it into a buffer first.
const content = new Buffer.from(await response.arrayBuffer());
await fs.writeFile(filename, content);

console.log(`Downloaded ${filename}`);
