"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Create Event", href: "/events/create" },
]

const Navbar = () => {
  
  const pathname = usePathname();

  return (
    <header>
      <nav>
        <Link className="logo" href="/">
          <Image src={"/icons/logo.png"} alt="logo" width={24} height={24} />
          <p>DevEvent</p>
        </Link>
        <ul>
          {links.map(link => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`
                ${pathname === link.href ? "bg-primary/90 font-semibold" : "text-color-light-100"}
                  hover:bg-primary/70 transition-colors px-3 py-2 rounded-md`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
