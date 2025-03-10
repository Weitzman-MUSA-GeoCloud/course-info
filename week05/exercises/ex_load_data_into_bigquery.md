# Load Data Into Bigquery

We're going to use external tables to load data into BigQuery. Note that there are [many ways](https://cloud.google.com/bigquery/docs/tables#create-table) to create tables in BigQuery, but we're going to use external tables. After you write your `CREATE EXTERNAL TABLE` statement, be sure to save it somewhere so that you can re-run it if necessary.

Let's use the following datasets (all available from [OpenDataPhilly](https://opendataphilly.org/)):
* The _Philadelphia Properties_ from the OPA
* The _Building and Zoning permits_ back to 2016 from L&I
* The _Stormwater Billing Parcels_ from PWD
* The _SEPTA GTFS_ bus and rail stops data

1.  Write a script that takes the raw data and converts the PWD parcels to CSV, JSON-L, or Parquet (do the same for the other datasets as desired -- not as important, since you can already download them as CSVs)
2.  Upload your data to a Google Cloud Storage bucket
    - Create a bucket in your GCP project named `external_tables` or `data_lake` or something obvious like that.
    - Create a folder in the bucket for each table. Name them something like `phl_opa_properties`, `phl_li_permits`, `phl_pwd_parcels`, `septa_bus_stops`, and `septa_rail_stops`.
    - Upload the data to the appropriate folder
3.  Create external tables in BigQuery based on the data in storage
    - Create a dataset in your GCP project named `external_tables` or `data_lake` to mirror your storage bucket.
    - Construct a `CREATE OR REPLACE EXTERNAL TABLE` statement for each table. Write the statement in a file so that you can save it and re-run it if necessary
4.  Copy your data to native BigQuery tables
    - Create datasets in your GCP project named `phl` and `septa`
    - Copy the data from your external tables using `CREATE TABLE AS ...` statements
3.  Create a few maps in Carto. Show the parcel polygons instead of just points by joining with the PWD Parcels dataset:
    - Find hotspots of properties that have been sold in the last 5 years (see the OPA dataset)
    - Find hotspots of properties that have been rezoned within the last 3 years (see the L&I dataset)
    - Find recently sold properties within a a half kilometer of a rail station

Other map ideas
- A map that demonstrates the financial value in a property being near a rail station
- A map that shows where property flipping hotspots are in the city

