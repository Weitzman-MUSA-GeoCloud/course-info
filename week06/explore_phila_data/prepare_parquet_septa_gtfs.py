import csv
import pathlib
import pyarrow as pa
import pyarrow.parquet as pq

RAW_DATA_DIR = pathlib.Path(__file__).parent / 'raw_data'
PREPARED_DATA_DIR = pathlib.Path(__file__).parent / 'prepared_data'

GTFS_FEEDS = ['septa_bus', 'septa_rail']

for gtfs_feed in GTFS_FEEDS:
    gtfs_feed_folder = RAW_DATA_DIR / gtfs_feed
    for gtfs_path in gtfs_feed_folder.iterdir():

        # Read the data from the raw GTFS CSV file.
        with gtfs_path.open('r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            rows = list(reader)

        if not rows:
            continue

        # Build column arrays
        column_names = list(rows[0].keys())
        columns = {name: [row[name] for row in rows] for name in column_names}

        # Write to Parquet
        output_folder = PREPARED_DATA_DIR / gtfs_feed
        output_path = output_folder / f'{gtfs_path.stem}.parquet'
        output_folder.mkdir(parents=True, exist_ok=True)

        table = pa.table({name: pa.array(values) for name, values in columns.items()})
        pq.write_table(table, output_path)
