import Link from "next/link";
import React, { useState } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#technology", label: "technology" },
  { href: "#projects", label: "projects" },
];

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav>
      <ul className="flex flex-wrap flex-col lg:flex-row items-center justify-between p-12">
        <li className="rounded-full mb-6 bg-white p-4 lg:m-0">
          <a href="/">
            <img
              className="w-16 transition hover:scale-50"
              src="/logo.png"
            />
          </a>
        </li>
        <ul
          id="mobileMenu"
          className="flex flex-wrap items-center invisible justify-between space-x-12 lg:space-x-36 lg:flex-row sm:visible"
        >
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a
                href={href}
                className="transition no-underline font-medium hover:text-gray-500 tracking-widest dark:text-white"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="no-underline btn-blue rounded-full transition pointer-cursor hover:bg-blue-700"
            >
              contact
            </a>
          </li>
        </ul>

      </ul>
    </nav>
  );
}
