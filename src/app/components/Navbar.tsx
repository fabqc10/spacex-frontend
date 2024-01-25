'use client'
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const pathName = usePathname();
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav className="flex items-center p-4 bg-black-800 space-x-10 text-white p-15 ml-10 absolute">
      <div className="w-40 h-auto">
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="flex items-center space-x-8 h-auto w-100">
        <Link onClick={handleClick} href="/launches" className={pathName === "/launches" ? "link-underline active" : "link-underline"}>
          Launches
        </Link>
        <Link href="/rockets" className={pathName === "/rockets" ? "link-underline active" : "link-underline"}>
          Rockets
        </Link>
        <Link href="/astronauts" className={pathName === "/astronauts" ? "link-underline active" : "link-underline"}>
          Astronauts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
