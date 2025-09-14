import { Router } from "express";
import { listOrgs } from "../controllers/orgs.controller.js";

const router = Router();
router.get("/", listOrgs);
export default router;
