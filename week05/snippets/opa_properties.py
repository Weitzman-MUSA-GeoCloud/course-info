import json


# Load the data from the GeoJSON file
with open('data/opa_properties_public.geojson', 'r') as f:
    data = json.load(f)


# Write the data to a JSONL file
with open('data/opa_properties_public.jsonl', 'w') as f:
    for feature in data['features']:
        row = feature['properties']
        if feature['geometry'] and feature['geometry']['coordinates']:
            row['geog'] = json.dumps(feature['geometry'])
        else:
            row['geog'] = None

        f.write(json.dumps(row) + '\n')
