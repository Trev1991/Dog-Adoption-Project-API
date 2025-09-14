import { pfGetOrganizations } from "../adapters/petfinder.adapter.js";

export async function getOrganizations(params) {
  const data = await pfGetOrganizations(params);
  const items = (data.organizations || []).map(o => ({
    id: o.id,
    name: o.name,
    email: o.email,
    phone: o.phone,
    address: o.address
  }));
  return { count: items.length, items };
}
