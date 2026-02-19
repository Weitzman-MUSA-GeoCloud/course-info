import * as csv from 'csv/sync';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { parquetWriteFile } from 'hyparquet-writer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RAW_DATA_DIR = path.join(__dirname, 'raw_data/');
const PREPARED_DATA_DIR = path.join(__dirname, 'prepared_data/');

const GTFS_FEEDS = ['septa_bus', 'septa_rail'];

for (const gtfsFeed of GTFS_FEEDS) {
  const gtfsFeedFolder = path.join(RAW_DATA_DIR, gtfsFeed + '/');
  for (const gtfsFileName of await fs.readdir(gtfsFeedFolder)) {

    // Read the data from the raw GTFS CSV file.
    const gtfsFilePath = gtfsFeedFolder + gtfsFileName;
    const content = await fs.readFile(gtfsFilePath, 'utf8');
    const rows = csv.parse(content, { "columns": true, "skip_empty_lines": true });

    if (rows.length === 0) continue;

    // Build column arrays
    const columnNames = Object.keys(rows[0]);
    const columns = Object.fromEntries(columnNames.map(name => [name, []]));
    for (const row of rows) {
      for (const name of columnNames) {
        columns[name].push(row[name]);
      }
    }

    // Write to Parquet
    const outputFolder = path.join(PREPARED_DATA_DIR, gtfsFeed + '/');
    const outputPath = path.join(outputFolder, gtfsFileName.replace('.txt', '.parquet'));
    await fs.mkdir(outputFolder, { recursive: true });

    parquetWriteFile({
      filename: outputPath,
      columnData: columnNames.map(name => ({ name, data: columns[name] })),
    });
  }
}