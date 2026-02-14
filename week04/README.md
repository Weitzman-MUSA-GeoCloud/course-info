## Slides

https://weitzman-musa-geocloud.github.io/presentations/week04/SLIDES.html

## In-class Exercise

* [PR Review #1](https://github.com/Weitzman-MUSA-GeoCloud/assignment02/pull/1)
* [PR Review #2](https://github.com/Weitzman-MUSA-GeoCloud/assignment02/pull/2)

## Assignments

* [Assignment 02](https://github.com/Weitzman-MUSA-GeoCloud/assignment02/)
* Watch [week 5 video](https://share.descript.com/view/idEqeuDQrUB)

### Tips for the assignment...

- Use SQLFluff to check your SQL syntax. You can use the `fix` subcommand to automatically fix some of the issues that SQLFluff finds. For example:
  ```bash
  sqlfluff fix my_file.sql
  ```

## Readings

* Readings  
  (access book through [O'Reilly for Higher Education](http://hdl.library.upenn.edu.proxy.library.upenn.edu/1017/7026/1))

  * By Feb 25

    * **Data Pipelines Pocket Reference**  
      *Chapter 1: Introduction to Data Pipelines*

    * **Data Pipelines Pocket Reference**  
      *Chapter 2: A Modern Data Infrastructure*

  * By Mar 4

    * **Data Pipelines Pocket Reference**  
      *Chapter 3: Common Data Pipeline Patterns*

    * **Designing Data-Intensive Applications**  
      *Chapter 3: Storage and Retrieval* **Only the second section (_Transaction Processing or Analytics?_) is necessary.**

      About the other _optional_ sections:  
      The first section (*Data Structures That Power Your Database*) goes in to a lot more detail about the types of indexing we were discussing this week, and the last section (*Column-Oriented Storage*) covers things we'll see in the next few weeks, but in more detail than we'll go into in class. They are optional, but feel free to read them if you enjoy technical details.

## Supplemental Readings

### Spatial Indexing

* _Background: Two Common Approaches to Spatial Indexing_, https://www.cockroachlabs.com/blog/how-we-built-spatial-indexing/#Background:-Two-Common-Approaches-for-Spatial-Indexes
* _Geospatial Indexing Explained: A Comparison of Geohash, S2, and H3_, https://benfeifke.com/posts/geospatial-indexing-explained/