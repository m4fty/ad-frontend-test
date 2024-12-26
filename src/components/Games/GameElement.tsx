"use client";

import Image from "next/image";
import { useGameStore } from "@/store/useGameStore";
import { Game } from "@/types/game";

const GameElement = ({ game, isInCart }: { game: Game; isInCart: boolean }) => {
  const { addToCart, setGenre } = useGameStore();

  const handleGenreClick = (genre: string) => {
    setGenre(genre);
  };

  return (
    <div
      key={game.id}
      className="game_element_container"
    >
      <div className="relative w-full h-[240px] bg-white rounded-t-lg overflow-hidden">
        {game.isNew && (
          <span className="chip_container">
            New
          </span>
        )}
        <Image
          src={game.image}
          alt={game.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-t-lg object-cover"
          priority
        />
      </div>

      <div className="py-4">
        <p
          className="text-[16px] font-bold text-gray-500 mb-2 cursor-pointer hover:underline"
          onClick={() => handleGenreClick(game.genre)}
        >
          {game.genre}
        </p>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold text-gray-800">{game.name}</h3>
          <p className="text-sm font-bold text-gray-800">
            ${game.price ?? "N/A"}
          </p>
        </div>

        <button
          onClick={() => addToCart(game)}
          className={`w-full h-[56px] text-[16px] font-bold rounded-lg border ${
            isInCart
              ? "bg-gray-300 text-gray-500"
              : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
          }`}
          disabled={isInCart}
        >
          {isInCart ? "In Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default GameElement;
