"use client";

import Image from "next/image";
import { useGameStore } from "@/store/useGameStore";
import { Game } from "@/types/game";

const GameElement = ({ game }: { game: Game }) => {
  const { addToCart, setGenre } = useGameStore();

  const handleGenreClick = (genre: string) => {
    setGenre(genre);
  };

  return (
    <div
      key={game.id}
      className="w-full sm:w-[327px] md:w-[360px] lg:w-[380px] h-[436px] border border-gray-300 rounded-2xl overflow-hidden shadow-sm p-6"
    >
      <div className="relative w-full h-[240px] bg-white rounded-t-lg overflow-hidden">
        {game.isNew && (
          <span className="absolute top-2 left-2 bg-stone-100 text-gray-500 text-[16px] font-normal px-4 rounded-md z-10">
            New
          </span>
        )}
        <Image
          src={game.image}
          alt={game.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
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
          className="w-full h-[56px] bg-white text-gray-800 border border-gray-300 text-[16px] font-bold rounded-lg hover:bg-gray-100"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default GameElement;
