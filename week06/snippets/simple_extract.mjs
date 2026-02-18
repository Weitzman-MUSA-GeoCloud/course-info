// An extract script for a single file without any 3rd-party dependencies

import fs from 'fs';

const url = 'https://opendata-downloads.s3.amazonaws.com/opa_properties_public.csv';

const response = await fetch(url);
const f = fs.createWriteStream('opa_properties.csv');

for await (const chunk of response.body) {
    f.write(chunk);
}

f.end();