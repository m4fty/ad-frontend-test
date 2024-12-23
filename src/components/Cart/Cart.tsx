"use client";

import { useGameStore } from "@/store/useGameStore";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const Cart = () => {
  const { cart, removeFromCart } = useGameStore();
  const [successMessage, setSuccessMessage] = useState("");

  const total = cart.reduce((sum, game) => sum + game.price, 0);

  const handleRemove = (id: string, name: string) => {
    removeFromCart(id);
    setSuccessMessage(`${name} removed from the cart!`);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-6 p-6">
      <div className="flex-1 md:mr-8">
        <div className="mb-4">
          <Link
            href="/"
            className="flex items-center text-neutral-700 hover:underline"
          >
            <FaArrowLeft className="mr-2" />
            Back to Catalog
          </Link>
        </div>

        <h1 className="text-2xl font-bold mb-2">Your Cart</h1>
        <p className="text-gray-500 mb-6">{cart.length} items</p>

        {successMessage && (
          <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
            {successMessage}
          </div>
        )}

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {cart.map((game) => (
              <div
                key={game.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-[120px] h-[80px] relative">
                    <Image
                      src={game.image}
                      alt={game.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase">
                      {game.genre}
                    </p>
                    <h3 className="text-lg font-bold">{game.name}</h3>
                    <p className="text-gray-400 text-sm">
                      {game.description || "Description if necessary."}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <p className="text-lg font-bold">${game.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleRemove(game.id, game.name)}
                    className="text-gray-400 hover:text-red-500 text-lg font-bold"
                    aria-label="Remove item"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="w-full lg:max-w-[522px] border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <p className="text-gray-500 mb-4">{cart.length} items</p>

          <div className="flex flex-col gap-2 mb-4">
            {cart.map((game) => (
              <div key={game.id} className="flex justify-between">
                <p className="text-gray-500">{game.name}</p>
                <p className="text-gray-800">${game.price.toFixed(2)}</p>
              </div>
            ))}
          </div>

          <hr className="mb-4" />

          <div className="flex justify-between items-center mb-6">
            <p className="text-lg font-bold">Order Total</p>
            <p className="text-lg font-bold">${total.toFixed(2)}</p>
          </div>

          <button className="w-full bg-neutral-700 text-white py-3 rounded-lg hover:bg-neutral-800">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
