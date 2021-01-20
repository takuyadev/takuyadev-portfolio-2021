import Link from "next/link";

const links = [
  { href: "#about", label: "about" },
  { href: "#technology", label: "technology" },
  { href: "#projects", label: "projects" },
];

export default function Nav() {
  return (
    <nav >
      <ul className="flex items-center justify-between p-12">
        <li className="rounded-full  bg-white p-4 ">
          <a href="/">
            <img className="w-16 transition hover:scale-50" src="/work_logo.svg" />
          </a>
        </li>
        <ul className="flex flex-col items-center justify-between invisible space-x-0 lg:space-x-36 lg:flex-row lg:visible">
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
            <a href="#contact" className="no-underline btn-blue rounded-full transition pointer-cursor hover:bg-blue-700">contact</a>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

