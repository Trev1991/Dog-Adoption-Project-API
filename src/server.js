import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import morgan from "morgan";

import dogsRouter from "./src/routes/dogs.routes.js";
import orgsRouter from "./src/routes/orgs.routes.js";
import favoritesRouter from "./src/routes/favorites.routes.js";
import { errorMiddleware } from "./src/middlewares/error.middleware.js";

["PETFINDER_KEY","PETFINDER_SECRET"].forEach(k=>{
  if(!process.env[k]) console.warn(`[env] Missing ${k} – /api/dogs may fail`);
});

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.UI_ORIGIN ? process.env.UI_ORIGIN.split(",") : "*" }));
app.use(express.json());
app.use(morgan("dev"));
app.use(rateLimit({ windowMs: 60_000, max: 60 }));

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/api/dogs", dogsRouter);
app.use("/api/organizations", orgsRouter);
app.use("/api/favorites", favoritesRouter);

app.use(errorMiddleware);

const port = process.env.PORT || 4000;
const host = "127.0.0.1";

if (process.env.NODE_ENV !== "test") {
  app.listen(port, host, () => {
    console.log(`Dog Adoption API running on ${host}:${port}`);
  });
}

export default app;
