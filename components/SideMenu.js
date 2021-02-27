import Link from "next/link";
import React, { useState } from "react";

const links = [
  { href: "/#about", label: "about" },
  { href: "/#technology", label: "technology" },
  { href: "/#projects", label: "projects" },
  { href: "/#otherwork", label: "other work" },
];

export default function SideMenu() {
  const [open, setOpen] = useState(false);

  const MenuState = () => {
    if (open == true) {
    }
  };
  return (
    <nav>
      <ul className="flex flex-col justify-evenly p-8 h-screen w-1/2 bg-white fixed left-0 z-20">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <a
              href={href}
              onClick={setOpen(false)}
              className="transition no-underline font-medium hover:text-gray-500 tracking-widest dark:text-white"
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="/#contact"
            className="no-underline btn-blue rounded-full transition pointer-cursor hover:bg-blue-700"
          >
            contact
          </a>
        </li>
      </ul>

      <img src="icons/menu.png" className="fixed m-8 top-0.5 right-0.5" />
    </nav>
  );
}
