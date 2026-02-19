import csv
import pathlib
import pyproj
from shapely import wkt, Point
from shapely.geometry import mapping
import fiona

RAW_DATA_DIR = pathlib.Path(__file__).parent / 'raw_data'
PREPARED_DATA_DIR = pathlib.Path(__file__).parent / 'prepared_data'

raw_filename = RAW_DATA_DIR / 'phl_opa_properties.csv'
prepared_filename = PREPARED_DATA_DIR / 'phl_opa_properties.parquet'

# Load the data from the CSV file
with open(raw_filename, 'r') as f:
    reader = csv.DictReader(f)
    data = list(reader)

# Set up the projection
transformer = pyproj.Transformer.from_proj('epsg:2272', 'epsg:4326')

# Determine property schema (exclude 'shape' column)
prop_names = [k for k in data[0].keys() if k != 'shape']
properties_schema = {k: 'str' for k in prop_names}

PREPARED_DATA_DIR.mkdir(parents=True, exist_ok=True)

schema = fiona.Schema(
    geometry='Point',
    properties=properties_schema,
)

# Write to GeoParquet
with fiona.open(prepared_filename, 'w', driver='Parquet', schema=schema, crs='EPSG:4326') as dest:
    for row in data:
        geom_wkt = row.pop('shape').split(';')[1]
        if geom_wkt == 'POINT EMPTY':
            geom = None
        else:
            geom = wkt.loads(geom_wkt)
            x, y = transformer.transform(geom.x, geom.y)
            geom = mapping(Point(x, y))
        dest.write({
            'geometry': geom,
            'properties': {k: row[k] for k in prop_names},
        })

print(f'Processed data into {prepared_filename}')
