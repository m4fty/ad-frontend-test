export const API_URL = process.env.API_URL || "http://localhost:3000/api";
// Mock data imports (solo usados si USE_MOCK es true)
import { allGames as mockGames, availableFilters as mockFilters, delay as mockDelay } from "@/mocks/games";

// Configuración para usar datos mock o reales
export const USE_MOCK = process.env.USE_MOCK === "true";

export const allGames = USE_MOCK ? mockGames : [];
export const availableFilters = USE_MOCK ? mockFilters : [];
export const delay = USE_MOCK ? mockDelay : async (ms: number) => {};
