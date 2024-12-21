import { fetchGames } from "@/services/gameService";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const genre = searchParams.get("genre") ?? undefined;
    let page = parseInt(searchParams.get("page") ?? "1");
    if (isNaN(page) || page < 1) {
      page = 1;
    }

    const result = await fetchGames({ genre, page });

    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching games:", error);

    return new Response(
      JSON.stringify({
        error: "An error occurred while fetching games.",
      }),
      { headers: { "Content-Type": "application/json" }, status: 500 }
    );
  }
}
