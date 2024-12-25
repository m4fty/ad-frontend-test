"use client";

import { useGameStore } from "@/store/useGameStore";
import DropdownIcon from "@/components/icons/DropDownIcon";

const GameFilters = () => {
  const { availableFilters, genre, setGenre } = useGameStore();

  const handleGenreChange = (newGenre: string) => {
    const updatedGenre = newGenre === "All" ? null : newGenre;

    if (genre !== updatedGenre) {
      setGenre(updatedGenre);
    }
  };

  return (
    <div className="container-base py-4">
      <h1 className="title-primary py-6">Top Sellers</h1>
      <div className="w-full flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:justify-end">
        <div className="w-full md:w-auto flex items-center justify-center md:justify-end space-x-2">
          <span className="text-gray-600 text-lg font-bold">Genre</span>
          <span className="text-gray-400">|</span>
          <div className="relative w-full md:w-auto">
            <select
              value={genre || "All"}
              onChange={(e) => handleGenreChange(e.target.value)}
              className="appearance-none bg-transparent text-gray-600 text-lg font-medium cursor-pointer focus:outline-none focus:ring-0 px-4 w-full md:w-auto border border-gray-300 rounded-md"
            >
              <option value="All">All</option>
              {availableFilters.map((filter) => (
                <option key={filter} value={filter}>
                  {filter}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <DropdownIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameFilters;
