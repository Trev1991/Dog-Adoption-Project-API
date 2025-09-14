import { Router } from "express";
import { getDogs } from "../controllers/dogs.controller.js";
import { validateQuery } from "../middlewares/validate.middleware.js";
import { dogSearchSchema } from "../validators/dogs.validators.js";

const router = Router();
router.get("/", validateQuery(dogSearchSchema), getDogs);
export default router;
