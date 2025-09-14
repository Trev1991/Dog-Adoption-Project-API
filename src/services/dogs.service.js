import { pfSearchAnimals } from "../adapters/petfinder.adapter.js";

function normalizeAnimal(a) {
  return {
    id: a.id,
    name: a.name,
    breeds: [a.breeds?.primary, a.breeds?.secondary].filter(Boolean),
    age: a.age,
    gender: a.gender,
    size: a.size,
    attributes: a.attributes,
    environment: a.environment,
    contact: {
      email: a.contact?.email,
      phone: a.contact?.phone,
      address: a.contact?.address
    },
    photos: a.photos?.map(p => p.medium) ?? [],
    url: a.url,
    organization_id: a.organization_id,
    city: a.contact?.address?.city,
    state: a.contact?.address?.state
  };
}

export async function searchDogs(params) {
  if (process.env.MOCK_MODE === "true") {
    return {
      total: 2,
      count: 2,
      page: 1,
      pages: 1,
      items: [
        { id: 1, name: "Buddy", breeds: ["Labrador"], age: "adult", gender: "male", size: "large", photos: [], url: "#", city: "Chicago", state: "IL" },
        { id: 2, name: "Daisy", breeds: ["Beagle"], age: "young", gender: "female", size: "medium", photos: [], url: "#", city: "Oak Park", state: "IL" }
      ]
    };
  }
  console.log("[dogs] params", params);
  const data = await pfSearchAnimals(params);
  console.log("[dogs] upstream ok");
  const items = (data.animals || []).map(normalizeAnimal);
  return {
    total: data.pagination?.total_count ?? items.length,
    count: items.length,
    page: data.pagination?.current_page ?? Number(params.page || 1),
    pages: data.pagination?.total_pages ?? null,
    items
  };
}
