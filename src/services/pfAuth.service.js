import { http } from "../adapters/http.js";

let cache = { token: null, exp: 0 };

export async function getPfToken() {
  const now = Date.now();
  if (cache.token && now < cache.exp) return cache.token;

  console.log("[pfAuth] get token");
  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: process.env.PETFINDER_KEY,
    client_secret: process.env.PETFINDER_SECRET
  });

  const { data } = await http.post(
    "https://api.petfinder.com/v2/oauth2/token",
    body,
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );

  cache = { token: data.access_token, exp: now + (data.expires_in - 60) * 1000 };
  return cache.token;
}
