const store = new Map(); // userId -> Set of animalIds

export function listFavorites(userId) {
  const ids = Array.from(store.get(userId) || []);
  return { count: ids.length, items: ids };
}

export function addFavorite(userId, animalId) {
  if (!store.has(userId)) store.set(userId, new Set());
  store.get(userId).add(animalId);
  return { ok: true };
}

export function removeFavorite(userId, animalId) {
  store.get(userId)?.delete(animalId);
  return { ok: true };
}
