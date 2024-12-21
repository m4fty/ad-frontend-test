import { GET } from "@/app/api/games/route";

jest.mock("@/services/gameService", () => ({
  fetchGames: jest.fn(({ genre, page }) => ({
    games: [{ id: "1", genre: "Action", name: "Mock Game" }],
    totalPages: 1,
    currentPage: page || 1,
    availableFilters: ["Action", "RPG"],
  })),
}));

describe("GET /api/games", () => {
  it("should return games with default pagination", async () => {
    const request = new Request("http://localhost:3000/api/games");
    const response = await GET(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.games).toHaveLength(1);
    expect(data.currentPage).toBe(1);
  });

  it("should handle genre filtering", async () => {
    const request = new Request("http://localhost:3000/api/games?genre=Action");
    const response = await GET(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.games[0].genre).toBe("Action");
  });

  it("should handle invalid pagination gracefully", async () => {
    const request = new Request("http://localhost:3000/api/games?page=-1");
    const response = await GET(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.currentPage).toBe(1);
  });
});
