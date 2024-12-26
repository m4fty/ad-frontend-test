import React from "react";
import { act, render, screen, fireEvent } from "@testing-library/react";
import useGameStore from "@/store/useGameStore";
import GameCatalog from "@/components/Games/GameCatalog";

describe("GameCatalog Component", () => {
  beforeEach(() => {
    useGameStore.setState({
      games: [],
      loading: true,
      fetchGames: jest.fn(),
      page: 1,
      totalPages: 1,
      genre: null,
      rehydrated: false,
    });
  });

  it("should render loading skeletons while loading", () => {
    render(<GameCatalog />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should render games when loading is complete", () => {
    useGameStore.setState({
      games: [
        {
          id: "1",
          name: "Game 1",
          genre: "Action",
          image: "",
          description: "",
          price: 0,
          isNew: false,
        },
        {
          id: "2",
          name: "Game 2",
          genre: "Indie",
          image: "",
          description: "",
          price: 0,
          isNew: false,
        },
      ],
      loading: false,
      rehydrated: true,
    });

    render(<GameCatalog />);
    expect(screen.getByText("Game 1")).toBeInTheDocument();
    expect(screen.getByText("Game 2")).toBeInTheDocument();
  });

  it("should fetch more games when See More is clicked", async () => {
    useGameStore.setState({
      games: [
        {
          id: "1",
          name: "Game 1",
          genre: "Action",
          image: "",
          description: "",
          price: 0,
          isNew: false,
        },
      ],
      genre: "Action",
      loading: false,
      fetchGames: jest.fn(),
      page: 1,
      totalPages: 2,
      rehydrated: false,
    });

    render(<GameCatalog />);

    await act(async () => {
      fireEvent.click(screen.getByText("See More"));
    });

    const { fetchGames } = useGameStore.getState();
    expect(fetchGames).toHaveBeenCalledTimes(1);
    expect(fetchGames).toHaveBeenCalledWith("Action", 2);
  });
});
