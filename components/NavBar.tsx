import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#1E3A8A] text-white fixed w-full z-50 shadow-md animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo com imagem reduzida */}
        <Link href="/" legacyBehavior>
          <a className="flex items-center gap-3 group transition">
            <Image
              src="/perfil.jpeg"
              alt="Foto de perfil de Igor Cunha Ferreira"
              width={38}
              height={38}
              className="rounded-full shadow-md object-cover border-2 border-white group-hover:border-[#3B82F6] transition"
              priority
            />
            {/* <span className="text-2xl font-bold tracking-wide group-hover:text-[#3B82F6] transition">
              Igor Ferreira
            </span> */}
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium items-center">
          <Link href="/" legacyBehavior><a className="hover:text-[#3B82F6]">Início</a></Link>
          <Link href="/sobre" legacyBehavior><a className="hover:text-[#3B82F6]">Sobre</a></Link>
          <Link href="/projetos" legacyBehavior><a className="hover:text-[#3B82F6]">Projetos</a></Link>
          <Link href="/blog" legacyBehavior><a className="hover:text-[#3B82F6]">Blog</a></Link>
          <Link href="/contato" legacyBehavior>
            <a className="bg-white text-[#1E3A8A] px-4 py-2 rounded hover:bg-[#3B82F6] hover:text-white transition">
              Contato
            </a>
          </Link>
          <Link href="/login" legacyBehavior>
            <a className="bg-[#3B82F6] text-white px-4 py-2 rounded hover:bg-white hover:text-[#1E3A8A] transition">
              Intranet
            </a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-[#1E3A8A] px-4 pb-4 space-y-2">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/perfil.jpeg"
              alt="Foto de perfil reduzida"
              width={34}
              height={34}
              className="rounded-full border-2 border-white object-cover"
              priority
            />
            <span className="font-bold">Igor Ferreira</span>
          </div>
          <Link href="/" legacyBehavior><a className="block hover:text-[#3B82F6]">Início</a></Link>
          <Link href="/sobre" legacyBehavior><a className="block hover:text-[#3B82F6]">Sobre</a></Link>
          <Link href="/projetos" legacyBehavior><a className="block hover:text-[#3B82F6]">Projetos</a></Link>
          <Link href="/blog" legacyBehavior><a className="block hover:text-[#3B82F6]">Blog</a></Link>
          <Link href="/intranet">
            <a className="w-36 py-2 rounded-xl bg-blue-600 text-white font-semibold text-center shadow hover:bg-blue-700 transition">
              Intranet
            </a>
          </Link>
          <Link href="/contato">
            <a className="w-36 py-2 rounded-xl border border-blue-600 text-blue-600 font-semibold text-center bg-white hover:bg-blue-50 transition">
              Contato
            </a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
