## Slides

- https://Weitzman-MUSA-GeoCloud.github.io/presentations/week07/SLIDES.html
- In-class project: https://docs.google.com/presentation/d/1XRS2O_0IJNv2jknYMHfWHBhhqFn0e2gyK_vgbQMAUKg/edit?usp=sharing

## In-class Activities

- Analyzing satellite images in Google Earth Engine with BigQuery SQL, https://cloud.google.com/blog/products/data-analytics/analyzing-satellite-images-in-google-earth-engine-with-bigquery-sql
- Quickstart for dbt Core from a manual install, https://docs.getdbt.com/guides/manual-install?step=4

## Assignments

- [Assignment 03](https://github.com/Weitzman-MUSA-GeoCloud/assignment03)
- Watch the [week 8 video](https://share.descript.com/view/Uw9egXI9m9T)
  - Please note while watching this one that Google rebreanded Cloud Functions some time last summer (https://cloud.google.com/functions/docs/release-notes#August_21_2024). The new name is Cloud Run Functions, but it's the same product. Some parts of the interface may look different than in the video (particularly in the part around testing), but the functionality is the same.
- I highly recommend that you watch the [week 9 video](https://share.descript.com/view/qs9EayrXLS9) as well, as it is short, and will help you understand the material for the in-class project.
- Fill out the [In-class Project Team Roles](https://docs.google.com/forms/d/e/1FAIpQLScaRJr0OHfvpmJVC7ti4xz_CuBaeDduVmacE03j_4EhZfp2Kg/viewform?usp=publish-editor) form


## Resources

### URL Formatting (for APIs and other web requests)

- [Percent-Encoding](https://en.wikipedia.org/wiki/Percent-encoding) (Wikipedia)
- An [ASCII table](https://www.ascii-code.com/)
- Python's [`urllib.parse.quote` and `urllib.parse.unquote`](https://docs.python.org/3/library/urllib.parse.html#url-quoting) from the Python standard library
- JavaScript's [`encodeURIComponent`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) and [`decodeURIComponent`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)

### Managing Python environemnts and requirements

- [Get started with `conda` environments 🤝](https://www.dataschool.io/intro-to-conda-environments/)
- [Generating Requirements the easy way with `pipreqs`](https://python.plainenglish.io/generating-requirements-the-easy-way-with-pipreqs-e24678b550eb)

### Editing your code

- [VS Code Basic Editing and Keyboard Shortcuts](https://code.visualstudio.com/docs/editor/codebasics)

### Data lakes

- [Wtf is a datalake?](https://www.reddit.com/r/dataengineering/comments/t4kz8u/comment/hyz7w2f/) (Reddit, in r/dataengineering; short and to the point)
- [Data Lake vs. Data Warehouse: What’s the Difference?](https://www.coursera.org/articles/data-lake-vs-data-warehouse) (Coursera; there's a useful video -- less than 10 minutes -- half-way down the page)
- [Schema auto-detection in BigQuery](https://cloud.google.com/bigquery/docs/schema-detect) (Google Cloud documentation)

#### Parquet files in Python
Apache Arrow is a cross-language development platform for in-memory data. It specifies a standardized language-independent columnar memory format for flat and hierarchical data, organized for efficient analytic operations on modern hardware.

- [Reading and Writing Parquet Files](https://arrow.apache.org/docs/python/parquet.html) (Apache Arrow documentation)

#### Parquet files in Node.js
DuckDB is an in-memory analytical database (similar to `DataFrame`s in Pandas or R). It has libraries for many languages; I recommend the `duckdb-async` library for Node.js.

- The [duckdb-async package](https://www.npmjs.com/package/duckdb-async) on npm
- [Importing Data](https://duckdb.org/docs/data/overview) (DuckDB documentation)
- [Writing to Parquet Files](https://duckdb.org/docs/data/parquet/overview#writing-to-parquet-files) (DuckDB documentation)

### GCP Identity & Access Management (IAM) Roles

- [Service accounts overview](https://cloud.google.com/iam/docs/service-account-overview)
- [IAM basic and predefined roles](https://cloud.google.com/iam/docs/understanding-roles)
- [How Application Default Credentials works](https://cloud.google.com/docs/authentication/application-default-credentials)