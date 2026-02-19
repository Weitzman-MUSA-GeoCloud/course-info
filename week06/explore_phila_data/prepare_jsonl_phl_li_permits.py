import fiona
import json
import math
import pathlib

RAW_DATA_DIR = pathlib.Path(__file__).parent / 'raw_data'
PREPARED_DATA_DIR = pathlib.Path(__file__).parent / 'prepared_data'

raw_filename = RAW_DATA_DIR / 'phl_li_permits.gpkg'
prepared_filename = PREPARED_DATA_DIR / 'phl_li_permits.jsonl'

with (
    # Load the data from the GeoPackage file
    fiona.open(raw_filename, 'r') as source,

    # Write the data to a JSONL file
    open(prepared_filename, 'w') as f
):
    for feature in source:
        row = fiona.model.to_dict(feature.properties)
        row['geog'] = (
            None if any(math.isnan(c) for c in feature.geometry.coordinates)
            else json.dumps(fiona.model.to_dict(feature.geometry))
        )
        f.write(json.dumps(row) + '\n')

print(f'Processed data into {prepared_filename}')
