import Zip from 'adm-zip';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, 'raw_data/');

// Get the GTFS data from the SEPTA GitHub repository
const url = 'https://github.com/septadev/GTFS/releases/download/v202302261/gtfs_public.zip';
const response = await fetch(url);

console.log(`Received ${response.status} response...`);
console.log(`Content-Length: ${response.headers.get('content-length')}`);

// The response contains a zip file. Wrap the response in a buffer and open it
// with the adm-zip library.
const buffer = Buffer.from(await response.arrayBuffer());
const fullZip = new Zip({ input: buffer });

// There should be two other zip files inside the one. Unzip them both and save
// the contents to the ./raw_data directory.
for (const gtfsFeed of fullZip.getEntries()) {
  const gtfsFeedName = gtfsFeed.entryName;
  const gtfsFeedData = gtfsFeed.getData();
  const gtfsFeedZip = new Zip(gtfsFeedData);
  const gtfsType = /google_(\w+).zip/.exec(gtfsFeedName)[1];

  const outputFolder = path.join(DATA_DIR, 'septa_' + gtfsType);
  gtfsFeedZip.extractAllTo(outputFolder, true);
  console.log(`Extracted into ${outputFolder}...`);
}
