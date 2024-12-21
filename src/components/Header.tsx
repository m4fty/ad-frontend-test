import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-200 h-[64px] flex items-center px-12">
      <div className="flex-1 text-lg font-semibold">
        <Link href="/" className="hover:underline">
        GamerShop
        </Link>
      </div>
      <div>
        <Link href="/cart" className="flex items-center text-gray-700 hover:text-gray-900">
          <AiOutlineShoppingCart size={24} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
