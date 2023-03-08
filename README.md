<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

## Installation

```bash
$ yarn install
```

## Usage

<ol>
  <li>
  You need to create a database, then in file database.config.ts in src/config you need to change host, username, password, database name.
  </li>
  <li>
  Install <a href='https://www.postman.com/downloads'>Postman</a> and import collection in file nestjs-manage-book.postman_collection.json and file environment nestjs-manage-book-environment.postman_environment.json to use to test API
  </li>
</ol>

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
