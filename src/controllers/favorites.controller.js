import { listFavorites, addFavorite, removeFavorite } from "../services/favorites.service.js";

const USER_ID = "demo"; // placeholder for real auth

export function getFavorites(_req, res) {
  res.json(listFavorites(USER_ID));
}
export function createFavorite(req, res) {
  const { animalId } = req.body || {};
  if (!animalId) return res.status(400).json({ error: "animalId is required" });
  addFavorite(USER_ID, String(animalId));
  res.status(201).json({ ok: true });
}
export function deleteFavorite(req, res) {
  removeFavorite(USER_ID, String(req.params.animalId));
  res.status(204).send();
}
