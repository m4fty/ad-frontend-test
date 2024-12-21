import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-700 h-[172px] flex justify-center items-center">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={170} height={44.09} className="cursor-pointer" />
      </Link>
    </footer>
  );
};

export default Footer;
