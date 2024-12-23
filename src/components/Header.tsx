"use client";

import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useGameStore } from "@/store/useGameStore";

const Header: React.FC = () => {
  const { cart } = useGameStore();

  return (
    <header className="bg-gray-200">
      <div className="w-full max-w-[1600px] mx-auto flex items-center px-4 md:px-8 h-[64px]">
      <div className="flex-1 text-lg font-semibold">
        <Link href="/" className="hover:underline">
          GamerShop
        </Link>
      </div>
      <div className="relative">
        <Link
          href="/cart"
          className="flex items-center text-gray-700 hover:text-gray-900"
        >
          <AiOutlineShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div></div>
    </header>
  );
};

export default Header;
