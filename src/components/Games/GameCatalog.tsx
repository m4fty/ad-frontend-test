"use client";

import { useGameStore } from "@/store/useGameStore";
import { useEffect, useState, useCallback } from "react";
import GameFilters from "@/components/Games/GameFilters";
import GameElement from "@/components/Games/GameElement";
import SkeletonElement from "@/components/Games/SkeletonElement";
import LoadingPage from "@/components/LoadingPage";
import SkeletonFilter from "./SkeletonFilter";

const ROW_SIZE = 3;

const GameCatalog = () => {
  const { games, loading, fetchGames, page, totalPages, genre, rehydrated } =
    useGameStore();
  const { cart } = useGameStore();
  const [visibleGames, setVisibleGames] = useState(ROW_SIZE * 2);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [skeletonCount, setSkeletonCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadGames = useCallback(() => {
    fetchGames(genre || undefined, 1);
  }, [fetchGames, genre]);

  useEffect(() => {
    if (rehydrated) {
      loadGames();
    }
  }, [rehydrated, loadGames]);

  useEffect(() => {
    if (!loading && games.length > 0) {
      setShowSkeleton(false);
    }
  }, [loading, games]);

  useEffect(() => {
    const updateSkeletonCount = () => {
      setSkeletonCount(window.innerWidth < 768 ? 2 : 3);
    };

    updateSkeletonCount();
    window.addEventListener("resize", updateSkeletonCount);

    return () => window.removeEventListener("resize", updateSkeletonCount);
  }, []);

  const handleSeeMore = async () => {
    if (page < totalPages) {
      setIsLoadingMore(true);
      await fetchGames(genre || undefined, page + 1);
      setIsLoadingMore(false);
    }
    setVisibleGames((prev) => prev + ROW_SIZE * 2);
  };

  const renderSkeletons = () => {
    return Array.from({ length: skeletonCount }).map((_, index) => (
      <SkeletonElement key={index} />
    ));
  };

  const isInCart = (id: string) => cart.some((game) => game.id === id);

  return (
    <>
      {loading && <LoadingPage />}
      {showSkeleton || (loading && !isLoadingMore) ? (
        <>
          <SkeletonFilter />
        </>
      ) : (
        <GameFilters />
      )}
      <div className="w-full max-w-[1280px] h-auto gap-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 md:py-12 px-4">
        {showSkeleton || (loading && !isLoadingMore)
          ? renderSkeletons()
          : games
              .slice(0, visibleGames)
              .map((game) => (
                <GameElement
                  key={game.id}
                  game={game}
                  isInCart={isInCart(game.id)}
                />
              ))}
        {!loading && page < totalPages && (
          <div className="flex justify-center md:justify-start md:my-6">
            <button
              onClick={handleSeeMore}
              disabled={isLoadingMore}
              className={`w-full sm:w-full md:w-auto px-6 py-3 ${
                isLoadingMore
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-neutral-700 hover:bg-neutral-800"
              } text-white text-lg font-semibold rounded transition uppercase`}
            >
              {isLoadingMore ? "Loading..." : "See More"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default GameCatalog;
