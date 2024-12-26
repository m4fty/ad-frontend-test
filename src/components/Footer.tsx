import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
    <Link href="/">
    <Image
          src="/logo.svg"
          alt="Logo"
          width={170}
          height={44.09}
          priority
          className="cursor-pointer"
        />
    </Link>
  </footer>
  
  );
};

export default Footer;
