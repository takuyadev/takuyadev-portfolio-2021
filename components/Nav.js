import Link from "next/link";
import styled, { css } from "styled-components";
import React, { useState } from "react";

const links = [
  { href: "/#about", label: "about" },
  { href: "/#technology", label: "technology" },
  { href: "/#projects", label: "projects" },
  { href: "/#otherwork", label: "other work" },
];

const SideMenu = styled.ul`
  display: ${(props) => (props.display ? props.display : "flex")};
  position: relative;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  width: 75%;
  justify-content: space-between;
  z-index: 20;
  transition: 0.5s ease-in-out;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    align-items: center;
    flex-direction: column;
    background-color: white;
    height: 100vh;
    width: 100vw;
    left: ${(props) => (props.left ? props.left : "0")};
    justify-content: space-evenly;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
`;

export default function Nav() {
  const [left, setLeft] = useState("-110%");

  const MenuVisibility = () => {
    console.log("clciked");
    if (left == "-110%") {
      setLeft("0%");
      console.log("visible");
    } else {
      setLeft("-110%");
      console.log("hiddens");
    }
  };

  return (
    <nav className="m-8">
      <ul className="flex flex-wrap flex-col lg:flex-row items-center justify-between md:h-auto">
        <li className="rounded-full mb-6 bg-white p-4 lg:m-0">
          <a href="/">
            <img
              className="w-16 h-16transition hover:scale-50"
              src="/logo.png"
            />
          </a>
        </li>

        <SideMenu left={left}>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a
                href={href}
                onClick={MenuVisibility}
                className="transition no-underline font-medium hover:text-gray-500 tracking-widest dark:text-white"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/contact"
              className="no-underline btn-blue rounded-full transition pointer-cursor hover:bg-blue-700"
            >
              contact
            </a>
          </li>
        </SideMenu>
      </ul>

      <img
        src="icons/menu.png"
        onClick={MenuVisibility}
        className="fixed visible transform scale-100 duration-500 hover:scale-95 m-16 w-8 h-8 opacity-75 top-0.5 right-0.5 cursor-pointer z-20 md:invisible"
      />
    </nav>
  );
}
