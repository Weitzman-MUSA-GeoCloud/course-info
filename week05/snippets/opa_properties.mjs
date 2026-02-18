import fs from 'fs';
import BigJSON from 'big-json';

// Load the data from the GeoJSON file
const data = await BigJSON.parse({
  body: fs.readFileSync('data/opa_properties_public.geojson')
});

// Write the data to a JSONL file
const f = fs.createWriteStream('data/opa_properties_public.jsonl');
for (const feature of data.features) {
  const row = feature.properties;
  if (feature.geometry && feature.geometry.coordinates) {
    row.geog = JSON.stringify(feature.geometry);
  } else {
    row.geog = null;
  }
  f.write(JSON.stringify(row) + '\n');
}
