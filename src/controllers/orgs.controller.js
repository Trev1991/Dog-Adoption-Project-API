import { getOrganizations } from "../services/orgs.service.js";

export async function listOrgs(req, res, next) {
  try {
    const result = await getOrganizations(req.query);
    res.json(result);
  } catch (e) {
    next({ status: 502, message: "Upstream error" });
  }
}
