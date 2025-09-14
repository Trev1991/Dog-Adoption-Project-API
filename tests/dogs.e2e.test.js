import request from "supertest";
import app from "../server.js";

describe("GET /api/dogs", () => {
  it("validates query and returns 400 on bad input", async () => {
    const res = await request(app).get("/api/dogs?limit=1000");
    expect(res.status).toBe(400);
    expect(res.body.error).toBeDefined();
  });
});
