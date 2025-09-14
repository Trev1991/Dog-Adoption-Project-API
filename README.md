# Dog Adoption API (Node + Express)

A small, production-minded REST API that searches adoptable dogs via Petfinder, normalizes results, and exposes simple favorites management. It includes request validation, security headers, rate limiting, and tests.

## Features
- **Dog search** (`GET /api/dogs`) with filters (location, distance, limit, etc.) and normalized output
- **Organizations** (`GET /api/organizations`) near a location
- **Favorites** (`POST/GET/DELETE /api/favorites`) stored in memory for demo purposes
- **Validation** with Zod (clean 400 errors on bad input)
- **Security** headers via Helmet + **CORS**
- **Rate limiting** on all routes
- **Graceful upstream handling** (12s HTTP timeout; returns 502 on upstream failure)
- **Tests** with Jest + Supertest
- **Mock mode** for offline demos (`MOCK_MODE=true`)

---

## Tech Stack
- Node.js, Express
- Zod (validation)
- Axios (HTTP client)
- Helmet, express-rate-limit, CORS
- Jest, Supertest

---

Install commands
npm ci   # or npm install
npm test
npm run dev

