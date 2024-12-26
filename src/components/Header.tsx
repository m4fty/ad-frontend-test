"use client";

import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useGameStore } from "@/store/useGameStore";

const Header: React.FC = () => {
  const { cart } = useGameStore();

  return (
    <header className="bg-gray-200">
      <div className="container-base flex items-center h-[64px]">
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
              <span className="header-cart-span">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
