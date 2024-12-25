export const API_URL = process.env.API_URL || "http://localhost:3000/api";
import { allGames as mockGames, availableFilters as mockFilters, delay as mockDelay } from "@/mocks/games";

export const USE_MOCK = process.env.USE_MOCK === "yes";

export const allGames = USE_MOCK ? mockGames : [];
export const availableFilters = USE_MOCK ? mockFilters : [];
export const delay = USE_MOCK ? mockDelay : async (ms: number) => {};
