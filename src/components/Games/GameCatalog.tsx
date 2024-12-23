"use client";

import { useGameStore } from "@/store/useGameStore";
import { useEffect, useState, useCallback } from "react";
import GameFilters from "@/components/Games/GameFilters";
import GameElement from "@/components/Games/GameElement";
import LoadingPage from "@/components/LoadingPage";

const ROW_SIZE = 3;

const GameCatalog = () => {
  const { games, loading, fetchGames, page, totalPages, genre, rehydrated } =
    useGameStore();
  const [visibleGames, setVisibleGames] = useState(ROW_SIZE * 2);

  const loadGames = useCallback(() => {
    fetchGames(genre || undefined, 1);
  }, [fetchGames, genre]);

  useEffect(() => {
    if (rehydrated) {
      loadGames();
    }
  }, [rehydrated, loadGames]);

  const handleSeeMore = async () => {
    if (page < totalPages) {
      await fetchGames(genre || undefined, page + 1);
    }
    setVisibleGames((prev) => prev + ROW_SIZE * 2);
  };

  return (
    <>
      {loading && <LoadingPage />}
      <GameFilters />
      <div className="w-full max-w-[1280px] h-auto gap-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 px-4">
        {games.slice(0, visibleGames).map((game) => (
          <GameElement key={game.id} game={game} />
        ))}
        {page < totalPages && (
          <div className="flex justify-center md:justify-start md:my-6">
            <button
              onClick={handleSeeMore}
              className="w-full sm:w-full md:w-auto px-6 py-3 bg-neutral-700 text-white text-lg font-semibold rounded hover:bg-neutral-800 transition uppercase"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default GameCatalog;
