import { allGames, availableFilters, delay } from "@/utils/endpoint";
import { API_URL } from "@/utils/endpoint";

const ITEMS_PER_PAGE = 12;

export async function fetchGames({ genre, page }: { genre?: string; page?: number }) {
  const useMock = process.env.USE_MOCK === "true";
  if (useMock) {
    let games = allGames;
    if (genre) {
      games = games.filter(
        (game) => game.genre.toLowerCase() === genre.toLowerCase()
      );
    }

    if (!page || page < 1) page = 1;

    // delay for mock
    await delay(2000);

    const fromIndex = (page - 1) * ITEMS_PER_PAGE;
    const toIndex = page * ITEMS_PER_PAGE;
    const paginatedGames = games.slice(fromIndex, toIndex);

    const totalPages = Math.ceil(games.length / ITEMS_PER_PAGE);

    return {
      games: paginatedGames,
      availableFilters,
      totalPages,
      currentPage: page,
    };
  }

  const params = new URLSearchParams();
  if (genre) params.append("genre", genre);
  if (page) params.append("page", page.toString());

  const response = await fetch(`${API_URL}/games?${params.toString()}`);
  return response.json();
}
