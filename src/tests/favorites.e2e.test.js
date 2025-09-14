import request from "supertest";
import app from "../server.js";

describe("Favorites", () => {
  it("adds and lists favorites", async () => {
    await request(app).post("/api/favorites").send({ animalId: "123" }).expect(201);
    const res = await request(app).get("/api/favorites").expect(200);
    expect(res.body.items).toContain("123");
  });
});
