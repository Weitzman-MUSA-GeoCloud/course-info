## Lecture/Slides

- Video lecture: https://share.descript.com/view/Tg3BUyKVgSq
- Main slides: https://Weitzman-MUSA-GeoCloud.github.io/presentations/week06/SLIDES.html
- Additional slides about spatial data formats: https://docs.google.com/presentation/d/18R1x1_Pscpc_TyYi5NH1RBJA7OO8wsjlG1BhYTVrvfA/edit?usp=sharing

## Code Samples

In the [explore_phila_data/](explore_phila_data/) directory you'll find extract and prepare scripts for a few datasets. I recommend reviewing them in this order:

- Extract & prepare scripts for PWD Parcels (the parcels are downloaded as a GeoJSON file).
- Extract & prepare scripts for L&I Permits (the permits are downloaded as a GeoPackage).
- Extract & prepare scripts for OPA Properties (the properties are downloaded as a CSV file with EPSG:2272 coords).
- Extract & prepare scripts for SEPTA Bus and Rail data (the GTFS file requires some ... interesting code).

> **NOTE:** For generating **parquet** files in **JavaScript**, the _hyparquet-writer_ library does not by default create GeoParquet files that are compatible with BigQuery. To rectify this, we explicitly specify the file metadata, use a generic type of `BYTES` for the geography column, and manually convert the geometry data to WKB. In theory, these manual interventions should not be necessary.
> - [GeoParquet specification](https://geoparquet.org/releases/v1.1.0/)
> - [Issue in hyparquet-writer about metadata](https://github.com/hyparam/hyparquet-writer/issues/23)

| Script files | What they demonstrate... |
| --- | --- |
| [extract_phl_pwd_parcels.py](explore_phila_data/extract_phl_pwd_parcels.py)<br>[extract_phl_pwd_parcels.mjs](explore_phila_data/extract_phl_pwd_parcels.mjs)<br><br>[extract_phl_li_permits.py](explore_phila_data/extract_phl_li_permits.py)<br>[extract_phl_li_permits.mjs](explore_phila_data/extract_phl_li_permits.mjs)<br><br>[extract_phl_opa_properties.py](explore_phila_data/extract_phl_opa_properties.py)<br>[extract_phl_opa_properties.mjs](explore_phila_data/extract_phl_opa_properties.mjs) | - Simple downloading of data from a URL (whether it's an API or static file) |
| [extract_gtfs.py](explore_phila_data/extract_gtfs.py)<br>[extract_gtfs.mjs](explore_phila_data/extract_gtfs.mjs) | - Downloading and unzipping a GTFS feed |
| [prepare_jsonl_phl_pwd_parcels.py](explore_phila_data/prepare_jsonl_phl_pwd_parcels.py)<br>[prepare_jsonl_phl_pwd_parcels.mjs](explore_phila_data/prepare_jsonl_phl_pwd_parcels.mjs)<br>[prepare_parquet_phl_pwd_parcels.py](explore_phila_data/prepare_parquet_phl_pwd_parcels.py)<br>[prepare_parquet_phl_pwd_parcels.mjs](explore_phila_data/prepare_parquet_phl_pwd_parcels.mjs) | - Reading a GeoJSON file and converting to JSON-L or GeoParquet |
| [prepare_jsonl_phl_li_permits.py](explore_phila_data/prepare_jsonl_phl_li_permits.py)<br>[prepare_jsonl_phl_li_permits.mjs](explore_phila_data/prepare_jsonl_phl_li_permits.mjs)<br>[prepare_parquet_phl_li_permits.py](explore_phila_data/prepare_parquet_phl_li_permits.py)<br>[prepare_parquet_phl_li_permits.mjs](explore_phila_data/prepare_parquet_phl_li_permits.mjs) | - Reading a GeoPackage file and converting to JSON-L or GeoParquet |
| [prepare_jsonl_phl_opa_properties.py](explore_phila_data/prepare_jsonl_phl_opa_properties.py)<br>[prepare_jsonl_phl_opa_properties.mjs](explore_phila_data/prepare_jsonl_phl_opa_properties.mjs)<br>[prepare_parquet_phl_opa_properties.py](explore_phila_data/prepare_parquet_phl_opa_properties.py)<br>[prepare_parquet_phl_opa_properties.mjs](explore_phila_data/prepare_parquet_phl_opa_properties.mjs) | - Reading a CSV file and converting to JSON-L or GeoParquet<br>- Parsing WKT data<br>- Reprojecting coordinates to 4326 |
| [prepare_jsonl_septa_gtfs.py](explore_phila_data/prepare_jsonl_septa_gtfs.py)<br>[prepare_jsonl_septa_gtfs.mjs](explore_phila_data/prepare_jsonl_septa_gtfs.mjs)<br>[prepare_parquet_septa_gtfs.py](explore_phila_data/prepare_parquet_septa_gtfs.py)<br>[prepare_parquet_septa_gtfs.mjs](explore_phila_data/prepare_parquet_septa_gtfs.mjs) | - Looping through CSV-formatted text files in a GTFS feed and converting each to JSON-L or Parquet |

## In-class Exercise

Continue working on the [BigQuery & Carto](../week05/exercises/ex_load_data_into_bigquery.md) exercise. Refer to the tips in the previous week's README for help.

## Assignments

- [Assignment 03](https://github.com/Weitzman-MUSA-GeoCloud/assignment03)
- Read the following chapters(access books through [O'Reilly for Higher Education](http://hdl.library.upenn.edu.proxy.library.upenn.edu/1017/7026/1)):
    * **Data Pipelines Pocket Reference**
      *Chapter 3: Common Data Pipeline Patterns*

    * **Designing Data-Intensive Applications**
      *Chapter 3: Storage and Retrieval* **Only the second section (_Transaction Processing or Analytics?_) is necessary.**

      About the other _optional_ sections:
      The first section (*Data Structures That Power Your Database*) goes in to a lot more detail about the types of indexing we were discussing this week, and the last section (*Column-Oriented Storage*) covers things we'll see in the next few weeks, but in more detail than we'll go into in class. They are optional, but feel free to read them if you enjoy technical details.
- Watch the [week 7 video](https://share.descript.com/view/9drEh9q22ID)
- Fill out the [In-class Project Team Roles](https://docs.google.com/forms/d/e/1FAIpQLScaRJr0OHfvpmJVC7ti4xz_CuBaeDduVmacE03j_4EhZfp2Kg/viewform?usp=publish-editor) form

## Resources

- [_ES Modules: All You Need To Know_](https://konstantin.digital/blog/es-modules-all-you-need-to-know)
- [OpenStreetMap BigQuery Dataset Reference](https://wiki.openstreetmap.org/wiki/BigQuery_dataset) (also, this [Ultimate Guide to OpenStreetMap & BigQuery](https://carto.com/blog/osm-bigquery) from Carto)

<!--
## From the lecture...

- Cal-ITP Code:
  - gtfs-rt-archiver is the tool that fetches GTFS-RT data from agencies around CA every 20 seconds: https://github.com/cal-itp/data-infra/tree/main/services/gtfs-rt-archiver-v3
  - gtfs-rt-parser is the script that gets run every hour from Airflow, validates the RT feed data, and converts it to JSON-L: https://github.com/cal-itp/data-infra/tree/main/jobs/gtfs-rt-parser-v2 (e.g. [this is the definition of the task](https://github.com/cal-itp/data-infra/blob/main/airflow/dags/parse_and_validate_rt_v2/parse_rt_vehicle_positions.yml) that runs that script from within Airflow)
- Modern Data Stack:

  A colleague of mine shared this post from the NYC MTA about their analytics infrastructure strategy: _How we build analytics at scale at the MTA_, https://www.mta.info/article/how-we-build-analytics-scale-mta

  It provides a good example of a modern data stack, and shows how they think about the stack as a product with users whose needs can be identified and should drive the design of the system.
-->