# Metallurgy Overview

This project centers on structured information in the world of metallurgy, specifically focused on martensitic steel.

It grew from the bladesmithing community.

In this context, the overall goals of this project are: 

* To provide a community resource for storing information and knowledge
* To overlay structure onto steel properties
* To enable user input to expand the information-base
* To create tools that convey knowledge

This is somewhere between a research tool, a reference guide, and an exploratory application for learning more about steels.

# Architecture

These are the major logical components of this project.

The frontend - a web-application for interacting.

The API - a means of communication with the database. The frontend talks to the API. Other clients can as well.

The database - the structured location for data storage.

# Development

## Local deploy

From the root directory, run `docker-compose -f docker-compose.dev.yml up`

## Sample data

To generate some sample data for demos and development, run:
* `cd hasura/scripts/node`
* `node generate-sample-data.js`
This is a bit sloppy right now - you can run it once on an empty db. If steel already exists, it will fail.