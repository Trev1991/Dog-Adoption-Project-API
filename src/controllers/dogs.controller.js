import { searchDogs } from "../services/dogs.service.js";

export async function getDogs(req, res, next) {
  try {
    const result = await searchDogs(req.query);
    res.json(result);
  } catch (e) {
    next({ status: 502, message: "Upstream error" });
  }
}
