import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import useGameStore from "@/store/useGameStore";
import Cart from "@/components/Cart/Cart";

describe("Cart Component", () => {
  beforeEach(() => {
    useGameStore.setState({
      cart: [],
      removeFromCart: jest.fn(),
      fetchGames: jest.fn(),
      addToCart: jest.fn(),
      setGenre: jest.fn(),
      rehydrated: true,
    });
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("should render empty cart message if cart is empty", () => {
    render(<Cart />);

    expect(screen.getByText("Your Cart")).toBeInTheDocument();
    expect(screen.getByText("0 items")).toBeInTheDocument();
    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
  });

  it("should render cart items when cart is not empty", () => {
    useGameStore.setState({
      cart: [
        {
          id: "1",
          name: "Game 1",
          genre: "Action",
          image: "/test-image-1.jpg",
          description: "Desc 1",
          price: 10,
          isNew: false,
        },
        {
          id: "2",
          name: "Game 2",
          genre: "RPG",
          image: "/test-image-2.jpg",
          description: "Desc 2",
          price: 20,
          isNew: false,
        },
      ],
    });

    render(<Cart />);

    expect(screen.getByText("Your Cart")).toBeInTheDocument();
    const itemsElements = screen.getAllByText("2 items");
    expect(itemsElements).toHaveLength(2);

    const item1 = screen.getAllByText("Game 1");
    expect(item1).toHaveLength(2);
    const item2 = screen.getAllByText("Game 2");
    expect(item2).toHaveLength(2);
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("RPG")).toBeInTheDocument();
    const item1Price = screen.getAllByText("$10.00");
    expect(item1Price).toHaveLength(2);
    const item2Price = screen.getAllByText("$20.00");
    expect(item2Price).toHaveLength(2);

    expect(screen.getByText("Order Total")).toBeInTheDocument();
    expect(screen.getByText("$30.00")).toBeInTheDocument();
  });

  it("should remove item from cart and show success message", () => {
    const removeFromCartMock = jest.fn();
    useGameStore.setState({
      cart: [
        {
          id: "1",
          name: "Game 1",
          genre: "Action",
          image: "/test-image-1.jpg",
          description: "Desc 1",
          price: 10,
          isNew: false,
        },
      ],
      removeFromCart: removeFromCartMock,
    });

    render(<Cart />);

    const item1 = screen.getAllByText("Game 1");
    expect(item1).toHaveLength(2);

    const removeButtons = screen.getAllByLabelText("Remove item");

    fireEvent.click(removeButtons[0]);
    expect(removeFromCartMock).toHaveBeenCalledWith("1");

    expect(
      screen.getByText("Game 1 removed from the cart!")
    ).toBeInTheDocument();
  });
});
