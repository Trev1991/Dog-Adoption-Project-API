import { http } from "./http.js";
import { getPfToken } from "../services/pfAuth.service.js";

export async function pfSearchAnimals(params) {
  const token = await getPfToken();
  const { data } = await http.get("https://api.petfinder.com/v2/animals", {
    headers: { Authorization: `Bearer ${token}` },
    params: { type: "dog", ...params }
  });
  return data;
}

export async function pfGetOrganizations(params) {
  const token = await getPfToken();
  const { data } = await http.get("https://api.petfinder.com/v2/organizations", {
    headers: { Authorization: `Bearer ${token}` },
    params
  });
  return data;
}
