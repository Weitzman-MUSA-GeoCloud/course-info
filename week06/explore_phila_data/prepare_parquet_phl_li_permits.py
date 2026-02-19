import fiona
import math
import pathlib

RAW_DATA_DIR = pathlib.Path(__file__).parent / 'raw_data'
PREPARED_DATA_DIR = pathlib.Path(__file__).parent / 'prepared_data'

raw_filename = RAW_DATA_DIR / 'phl_li_permits.gpkg'
prepared_filename = PREPARED_DATA_DIR / 'phl_li_permits.parquet'

PREPARED_DATA_DIR.mkdir(parents=True, exist_ok=True)

with fiona.open(raw_filename, 'r') as source:
    schema = source.schema.copy()

    with fiona.open(prepared_filename, 'w', driver='Parquet', schema=schema, crs=source.crs) as dest:
        for feature in source:
            geom = feature.geometry
            if geom and any(math.isnan(c) for c in geom['coordinates']):
                feature = fiona.Feature(geometry=None, properties=feature.properties)
            dest.write(feature)

print(f'Processed data into {prepared_filename}')
