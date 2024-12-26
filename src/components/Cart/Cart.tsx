"use client";

import { useGameStore } from "@/store/useGameStore";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaTimes } from "react-icons/fa";
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
    <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-6 p-x">
      <div className="flex-1">
        <div className="mb-4">
          <Link
            href="/"
            className="flex items-center text-bg-neutral-700 hover:underline"
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
          <div className="flex flex-col gap-6">
            {cart.map((game) => (
              <div
                key={game.id}
                className="relative border-b pb-4 flex flex-col md:flex-row md:items-center md:justify-between"
              >
                <div className="div_image_shrink">
                  <div className="w-full h-full relative md:w-[120px] md:h-[80px]">
                    {game.isNew && <span className="chip_container">New</span>}
                    <Image
                      src={game.image}
                      alt={game.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                      className="rounded object-cover"
                    />
                  </div>
                  <div className="w-[10%] flex items-start justify-center md:hidden">
                    <button
                      onClick={() => handleRemove(game.id, game.name)}
                      className="text-gray-400 hover:text-red-500 text-xl"
                      aria-label="Remove item"
                    >
                      <FaTimes />
                    </button>
                  </div>
                </div>

                <div className="flex-1 md:pl-4">
                  <p className="text-gray-500 text-xs font-bold uppercase mb-1">
                    {game.genre}
                  </p>
                  <h3 className="text-lg font-bold">{game.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">
                    {game.description || "No description."}
                  </p>
                  <p className="text-lg font-bold mt-4 text-right">
                    ${game.price.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => handleRemove(game.id, game.name)}
                  className="hidden md:block absolute md:top-0 right-0 md:ml-auto md:text-right text-gray-400 hover:text-red-500"
                  aria-label="Remove item"
                >
                  <FaTimes />
                </button>
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
          <button className="button-primary w-full py-3 rounded-lg">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
