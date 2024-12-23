import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fetchGames } from "@/services/gameService";
import { Game } from "@/types/game";

interface GameStore {
  rehydrated: boolean;
  games: Game[];
  genre: string | null;
  page: number;
  loading: boolean;
  totalPages: number;
  currentPage: number;
  availableFilters: string[];
  cart: Game[];
  fetchGames: (genre?: string, page?: number) => Promise<void>;
  addToCart: (game: Game) => void;
  removeFromCart: (gameId: string) => void;
  setGenre: (genre: string | null) => void;
}

const initialState: Omit<GameStore, "fetchGames" | "addToCart" | "removeFromCart" | "setGenre"> = {
  rehydrated: false,
  games: [],
  genre: null,
  page: 1,
  loading: false,
  totalPages: 1,
  currentPage: 1,
  availableFilters: [],
  cart: [],
};

export const useGameStore = create(
  persist<GameStore>(
    (set, get) => ({
      ...initialState,
      fetchGames: async (genre, page) => {
        set({ loading: true });
        try {
          const data = await fetchGames({ genre, page });
          set({
            games: page === 1 ? data.games : [...get().games, ...data.games],
            page: page || 1,
            totalPages: data.totalPages || 1,
            currentPage: data.currentPage || 1,
            availableFilters: data.availableFilters || [],
            loading: false,
          });
        } catch (error) {
          console.error("Error fetching games:", error);
          set({ loading: false });
        }
      },

      addToCart: (game) => set((state) => ({ cart: [...state.cart, game] })),

      removeFromCart: (gameId) =>
        set((state) => ({
          cart: state.cart.filter((game) => game.id !== gameId),
        })),

      setGenre: (genre) => set({ genre }),
    }),
    {
      name: "game-store",
      onRehydrateStorage: (state) => {
        return (newState) => {
          if (newState) {
            newState.rehydrated = true;
          }
        };
      },
    }
  )
);
