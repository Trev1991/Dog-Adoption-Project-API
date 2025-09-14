# Dog Adoption API

Separation of concern, Petfinder v2 upstream, validation, security middleware, pagination, and tests.

## Run locally
1. `cp .env.example .env` then set `PETFINDER_KEY` and `PETFINDER_SECRET`
2. `npm install`
3. `node server.js`  (start without nodemon to verify)
4. `curl http://127.0.0.1:4000/health`

## Endpoints
- `GET /health`
- `GET /api/dogs?location=60601&distance=50&limit=12&breed=Husky`
- `GET /api/organizations?location=60601`
- `GET /api/favorites`
- `POST /api/favorites` body: `{ "animalId": "123" }`
- `DELETE /api/favorites/:animalId`

## Design
- Routes, controllers, services, adapters, validators, middlewares
- Security: helmet, cors, express-rate-limit
- Validation: zod for query
- Axios timeout: 12s via a shared http client
- Central error handler
- Tests: jest + supertest
- Mock mode: `export MOCK_MODE=true`

## Troubleshooting
- Upstream requests time out after 12s instead of hanging.
- No Petfinder credentials? Use:
  ```bash
  export MOCK_MODE=true
  node server.js
  curl "http://127.0.0.1:4000/api/dogs?limit=2"
  ```
