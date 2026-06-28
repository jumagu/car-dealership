# Car Dealership API

A simple REST API for managing cars and brands, built with [NestJS](https://nestjs.com/).
This is a learning project focused on NestJS fundamentals: modules, controllers,
providers, DTOs, and validation pipes.

> **Note:** Data is stored **in memory**, so it resets every time the server restarts.

## Tech stack

- **NestJS 11** on Express
- **TypeScript**
- **class-validator** / **class-transformer** for request validation
- **uuid** for ID generation
- **Jest** + **Supertest** for testing

## Project setup

```bash
$ pnpm install
```

## Run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

The API runs on [http://localhost:3000](http://localhost:3000) by default
(override with the `PORT` environment variable).

## API endpoints

### Cars — `/cars`

| Method | Endpoint    | Description     |
| ------ | ----------- | --------------- |
| GET    | `/cars`     | List all cars   |
| GET    | `/cars/:id` | Get a car by id |
| POST   | `/cars`     | Create a car    |
| PATCH  | `/cars/:id` | Update a car    |
| DELETE | `/cars/:id` | Delete a car    |

### Brands — `/brands`

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| GET    | `/brands`     | List all brands   |
| GET    | `/brands/:id` | Get a brand by id |
| POST   | `/brands`     | Create a brand    |
| PATCH  | `/brands/:id` | Update a brand    |
| DELETE | `/brands/:id` | Delete a brand    |

### Seed — `/seed`

| Method | Endpoint | Description                               |
| ------ | -------- | ----------------------------------------- |
| GET    | `/seed`  | Populate cars and brands with sample data |

> `:id` parameters must be valid v4 UUIDs.

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Resources

- [NestJS Documentation](https://docs.nestjs.com)
