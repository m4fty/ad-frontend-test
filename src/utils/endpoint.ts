export const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || "/api";
import { allGames as mockGames, availableFilters as mockFilters, delay as mockDelay } from "@/mocks/games";

export const NEXT_PUBLIC_USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === "yes";

export const allGames = NEXT_PUBLIC_USE_MOCK ? mockGames : [];
export const availableFilters = NEXT_PUBLIC_USE_MOCK ? mockFilters : [];
export const delay = NEXT_PUBLIC_USE_MOCK ? mockDelay : async (ms: number) => {};
