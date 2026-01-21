# MUSA 5090: Geospatial Cloud Computing & Visualization - Syllabus

* **Instructor(s):**
  * Mjumbe Poe, mjumbe@design.upenn.edu
* **Schedule:** Wednesdays, 1:45-4:45
* **Room:** Van Pelt 113
* **Office Hours:**
  * Mjumbe:
    * Coworking in person ([check schedule here](https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&showCalendars=0&mode=WEEK&src=ZDRjNTI3NDhhNWIzMTFhZGM2NTdhZjVmZjEyYTIxNmY1MjkxNWFkMmFiMjYxYzM5YWNlZjlkMTRiMWI5MWIzNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F09300))  
      _Usually in Van Pelt RDDSx Mondays, Tuesdays, Wednesdays, 10:45-12:45, but there are exceptions; check the calendar_
      
    * Virtually, by appointment ([book here](https://calendar.app.google/ZTSCtEUBdMtkPzJw6))

[Description](#description) | [Schedule](#course-schedule) | [Objectives](#course-objectives) | [Format](#format) | [Assignments](#assignments) | [Grading](#grading) | [Academic Integrity](#academic-integrity)


## Description

In this course you will learn how to collect, store, wrangle and display cartographic data in a cloud-based setting. You will learn reproducible approaches for pulling spatial data from APIs; wrangling these data with Python and/or JavaScript; storing and transforming these data in PostGIS and BigQuery; and visualizing in various platforms including Carto and Metabase. You will build your own APIs and develop your own custom web applications. This course is the second in a progression toward building web-based systems using geospatial data, and expands on the Fall course in JavaScript Programming for Planning.

There will be a strong emphasis on open source tools although we will also strongly rely on proprietary cloud-based infrastructure providers. Besides the technologies used in class, we will be using large and sometimes messy data from which we will be deriving insights from how people inhabit, move around in, and affect their environments. We will be working with datasets published by a variety of organizations, from the local to the national level, across governments, non-profits, and private corporations.

The class is divided into four modules:

1. **Spatial Analytics with Databases** -- learn the basics of SQL and PostGIS for exploring datasets and answering questions of your data
2. **Scripting with Cloud Services** -- building basic scripts with queries and interacting with web services/APIs programmatically
3. **Data Pipelining** -- use Python or JavaScript and SQL to automate extracting, loading, and transforming data in a data warehouse
4. **Building Interfaces** -- build dashboards and APIs to answer operational questions using dynamic representations of data

## Course Schedule
(subject to adapt to the flow of the semester)

|  W#  |  Date  |  Topic  |
|------|--------|---------|
|  1   |  Jan 21  |  Introduction  |
|  2   |  Jan 28  |  _Analytics_: Spatial Databases & Querying Geospatial Data  |
|  3   |  Feb 4   |  _Analytics_: Joins & More Geospatial SQL Operations  |
|  4   |  Feb 11   |  _Analytics_: Efficient Queries  |
|  5   |  Feb 18  |  _Scripting_: Working with Data from Files and Web Services  |
|  6   |  Feb 25  |  _Scripting_: More Extracting Data  |
|  7   |  Mar 4   |  _Pipelines_: Implementing ETL in Cloud Services  |
|  -   |  Mar 11   |  **-(SPRING BREAK)-**  |
|  8   |  Mar 18  |  _Pipelines_: Deploying to the cloud  |
|  9   |  Mar 25  |  _Interfaces_: Open Source Business Intelligence Tools  |
|  10  |  Apr 1  |  _Interfaces_: Rendering Data with Custom Applications (APIs and Templates)  |
|  11  |  Apr 8   |    |
|  12  |  Apr 15  |    |
|  13  |  Apr 22  |    |
|  14  |  Apr 29  |   |

## Course Objectives

Students will learn how to use professional tools and cloud-based services to automate the process of preparing data for use in organizational decision making. **By the end of this course students should be able to:**
* Use SQL to answer questions with the data in a database, data warehouse, or data lake
* Set up and use tools for exploring and visualizing data in a database
* Use web services to create beautiful and meaningful data products
* Use Python or JavaScript to automate the process of extracting, transforming, and loading data
* Do all of these things using professional software development tools and methods

## Format

- The majority of _lectures_ will be asynchronous.
- The beginning of each class will be devoted to answering questions, clarifying content, or discussions.
- The later part of classes will be interactive, sometimes with some deliverable expected by the end that will make up part of the participation portion of your grade.

## Guidelines

As we will be collaborating on projects, we will need to use common tools and practices. As such, I will run this course as a benevolent dictator.

* If you are using Python:
  - You will use `poetry` to manage your dependencies. I will use `poetry` in my examples.
* If you are using JavaScript:
  - You will use `npm` to manage your dependencies. I will use `npm` in my examples.
* Your code will conform to the linter rules we agree upon as a class (and I have veto power on rules).

## Assignments

There will be assignments with some weeks, particularly as we are getting comfortable with SQL. Other weeks will have recommended readings and suggested exercises to give additional practice. We will often have exercises that are intended to be completed in class or, in some exceptional cases, soon after.

The final project will be the culmination of all of the skills learned in the class. Students will build an automatically updating data product, powered by a cloud-hosted data pipeline, that can be used to make some operational decisions. Expectations are that the products will address some socially relevant domain, and will make use of multiple visualizations of data (static or interactive charts and maps, formatted statistics, templated prose, etc.). Many of you are in MUSA/Smart Cities practicum, and we can create some overlap between the two projects.

In the latter half of the semester we will have an in-class project. You will be split into teams based on your interests and skills, and you will collaborate to construct an end-to-end data product.

## Grading

* Assignments & Participation: 50%
* Final Project: 50%

## Course Data

Some of the data we are using in this course may be proprietary and cannot be openly disseminated. In these cases students will be provided with access to private class repositories of datasets. Derivative insights based on these datasets can be openly shared, especially as part of final project work.

## Academic Integrity

In compliance with Penn's [Code of Academic Integrity](http://www.upenn.edu/academicintegrity/ai_codeofacademicintegrity.html), blatantly and egregiously copying another student's work will not be tolerated. However, because this course is designed to help prepare students for work in professional programming environments, *copying and pasting is not universally prohibited*: we encourage students to work together and to freely use the internet as a resource for finding solutions to vexing problems. Citing every copied and pasted line of code is *not* necessary. Large patterns or multiple lines of code taken from external sources *should*, however, be noted with in-code comments. If an instance is unclear, you should feel free to speak with the instructors.

### Note about AI tools...

I don't mind generative AI tools to help with coding -- I use them myself on a limited basis. If you use Chat GPT or any other AI tool, note that you are subject to the same guidelines around citation as above.

Also, understand that many of these tools often make mistakes that can be difficult to identify if you don't know what you're doing. If you and can verify that the generated code is correct, cool. But if you come to me or the TA to help debugging something generated with AI, it is always best to disclose the source of the code (for that matter, I'll be able to tell), as it would be with any code.
