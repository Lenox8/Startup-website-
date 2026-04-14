"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/global.png";
import ButtonShine from "./ButtonShine/Butt";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // ajuste o threshold conforme necessário
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-2">
      <ul
        className={`relative mx-auto flex w-full items-center justify-between gap-2 rounded-md border border-white/20 bg-gradient-to-r from-purple-700/40 via-indigo-600/40 to-purple-800/40 backdrop-blur-md shadow-lg transition-all duration-300 ${
          scrolled ? "py-1" : "p-1"
        }`}
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      >
        {/* Logo - esconde quando scroll */}
        <div
          className={`flex items-center justify-center px-1 transition-all duration-300 ${
            scrolled ? "hidden" : "block"
          }`}
        >
          <h1 className="sr-only">Logotipo</h1>
          <Image src={logo} alt="logo" width={40} height={40} className="object-cover" />
        </div>

        {/* Links de navegação */}
        <div className="flex flex-1 justify-center gap-1 sm:gap-2">
          <Tab setPosition={setPosition} href="/">
            Home
          </Tab>
          <Tab setPosition={setPosition} href="/pricing">
            Pricing
          </Tab>
          <Tab setPosition={setPosition} href="/about">
            About
          </Tab>
          <Tab setPosition={setPosition} href="/contacts">
            Contact
          </Tab>
        </div>

        {/* Botão - esconde quando scroll */}
        <div
          className={`flex items-center justify-center px-1 transition-all duration-300 ${
            scrolled ? "hidden" : "block"
          }`}
        >
          <ButtonShine />
        </div>

        <Cursor position={position} />
      </ul>
    </header>
  );
}

const Tab = ({
  children,
  setPosition,
  href,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number }>>;
  href: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-2 py-1 text-xs mix-blend-difference transition-all md:px-3 md:py-1.5 md:text-base"
    >
      <Link href={href} className="block w-full h-full">
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-gray-600/35 md:h-10"
    />
  );
};

export default NavHeader;