import { Router } from "express";
import { getFavorites, createFavorite, deleteFavorite } from "../controllers/favorites.controller.js";

const router = Router();
router.get("/", getFavorites);
router.post("/", createFavorite);
router.delete("/:animalId", deleteFavorite);
export default router;
