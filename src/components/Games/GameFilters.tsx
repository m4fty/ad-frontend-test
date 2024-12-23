"use client";

import { useGameStore } from "@/store/useGameStore";

const GameFilters = () => {
  const { availableFilters, genre, setGenre } = useGameStore();

  const handleGenreChange = (newGenre: string) => {
    const updatedGenre = newGenre === "All" ? null : newGenre;

    if (genre !== updatedGenre) {
      setGenre(updatedGenre);
    }
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 sd:h-[50px] md:h-[100px] lg:h-[150px]">
      <h1 className="text-2xl font-bold text-gray-800 py-6 uppercase lg:capitalize">Top Sellers</h1>
      <div className="flex items-center space-x-2 translate-y-2 justify-center lg:justify-end">
        <span className="text-gray-600 text-lg font-bold">Genre</span>
        <span className="text-gray-400">|</span>
        <div className="relative">
          <select
            value={genre || "All"}
            onChange={(e) => handleGenreChange(e.target.value)}
            className="appearance-none bg-transparent text-gray-600 text-lg font-medium cursor-pointer focus:outline-none focus:ring-0 px-4"
          >
            <option value="All">All</option>
            {availableFilters.map((filter) => (
              <option key={filter} value={filter}>
                {filter}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameFilters;
