import json
import pathlib
import fiona
from fiona.transform import transform_geom

RAW_DATA_DIR = pathlib.Path(__file__).parent / 'raw_data'
PREPARED_DATA_DIR = pathlib.Path(__file__).parent / 'prepared_data'

raw_filename = RAW_DATA_DIR / 'phl_pwd_parcels.geojson'
prepared_filename = PREPARED_DATA_DIR / 'phl_pwd_parcels.parquet'

# Load the data from the GeoJSON file
with open(raw_filename, 'r') as f:
    data = json.load(f)

# Determine the schema from the first feature
sample = data['features'][0]
properties_schema = {k: 'str' for k in sample['properties']}

PREPARED_DATA_DIR.mkdir(parents=True, exist_ok=True)

schema = fiona.Schema(
    geometry='MultiPolygon',
    properties=properties_schema,
)

# Write to GeoParquet
with fiona.open(prepared_filename, 'w', driver='Parquet', schema=schema, crs='EPSG:4326') as dest:
    for feature in data['features']:
        geom = feature['geometry']
        if not geom or not geom.get('coordinates'):
            geom = None
        dest.write({
            'geometry': geom,
            'properties': {k: str(v) if v is not None else None for k, v in feature['properties'].items()},
        })

print(f'Processed data into {prepared_filename}')
