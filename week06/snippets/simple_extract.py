# An extract script for a single file without any 3rd-party dependencies

from urllib.request import urlopen

url = 'https://opendata-downloads.s3.amazonaws.com/opa_properties_public.csv'

with urlopen(url) as response:
    with open('opa_properties.csv', 'wb') as f:
        while chunk := response.read(1024 * 1024):
            f.write(chunk)