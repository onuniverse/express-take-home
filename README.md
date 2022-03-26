# express-take-home

## Setup

### Install Node.js and npm

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### Installing dependencies

After cloning this repo be sure to install all required dependencies via:

`npm install`

### Configuring environment variables

Environment variables can be set by creating a `.env` file (this will be run by docker compose with the docker compose file)
An `example.env` file is included as a template for the `.env` file, this can be copied over and the `change-me`s should be replaced.

**Required environment variables are**:

- `API_TOKEN` - Discogs API token sent to you by interviewer

### Running the app

- `docker compose up --build`

### Sequelize (ORM)

This project uses Sequelize as an ORM, details around migrations can be found here: https://sequelize.org/master/manual/migrations.html

To create a new migration file:

`npx sequelize-cli migration:create --migrations-path src/services/db/migrations --name [migration name]`

## Instructions

This sample project is set up to manage Users in a postgres database and fetch artists from a 3rd party service (Discogs).

You will be adding new endpoints for searching for releases by artists and allowing users to create and manage playlists of these.

There is API documentation for what these endpoints should look like in api.yaml in the project root.

This documentation is in the OpenAPI (previously swagger) format and can be viewed using Swagger UI plugins in different editors, or by copying the contents of that document to http://editor.swagger.io

There is also a postman collection included that has both the existing and new endpoints included in this repo.

### Song (Release) Search

An endpoint does not exist on the Discogs API to search releases by both title and artist ID, so use the all releases by artist endpoint

documentation here: https://www.discogs.com/developers#page:database,header:database-artist-releases

and then filter the results by the search string passed in.

### Playlists

Release ids should be used for creating or deleting songs from a playlist. When fetching a playlist detail, fetch the details of each song and return them formatted to match the documentation.

An individual release can be fetched from Discogs using the endpoint documented here:

https://www.discogs.com/developers#page:database,header:database-release
