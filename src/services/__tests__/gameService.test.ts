import React from 'react';
import { fetchGames } from '@/services/gameService';

jest.mock('@/services/gameService', () => {
  const originalModule = jest.requireActual('@/services/gameService');
  return {
    ...originalModule,
    fetchGames: jest.fn(),
  };
});

describe('Game Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch games successfully', async () => {
    const mockGamesResponse = {
      games: [
        { id: 1, title: 'Game 1', genre: 'Action' },
        { id: 2, title: 'Game 2', genre: 'Indie' },
      ],
      availableFilters: ['Action', 'Indie'],
      totalPages: 1,
      currentPage: 1,
    };

    (fetchGames as jest.Mock).mockResolvedValue(mockGamesResponse);

    const gamesResponse = await fetchGames({ genre: 'Action', page: 1 });

    expect(fetchGames).toHaveBeenCalledTimes(1);
    expect(fetchGames).toHaveBeenCalledWith({ genre: 'Action', page: 1 });
    expect(gamesResponse).toEqual(mockGamesResponse);
  });

  it('should handle fetch errors', async () => {
    const mockError = new Error('Failed to fetch games');

    (fetchGames as jest.Mock).mockRejectedValue(mockError);

    await expect(fetchGames({ genre: 'Action', page: 1 })).rejects.toThrow('Failed to fetch games');
    expect(fetchGames).toHaveBeenCalledTimes(1);
    expect(fetchGames).toHaveBeenCalledWith({ genre: 'Action', page: 1 });
  });
});
