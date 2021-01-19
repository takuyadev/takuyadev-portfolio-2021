import Link from "next/link";

const links = [
  { href: "https://github.com/vercel/next.js", label: "about" },
  { href: "https://github.com/vercel/next.js", label: "technology" },
  { href: "https://github.com/vercel/next.js", label: "project" },
];

export default function Nav() {
  return (
    <nav className="invisible lg:visible">
      <ul className="flex items-center justify-between p-12">
        <li>
          <a href="/">
            <img className="w-24" src="/work_logo.svg" />
          </a>
        </li>
        <ul className="flex flex-col  items-center justify-between space-x-0 md:space-x-36 md:flex-row">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a
                href={href}
                className="transition no-underline font-medium hover:text-gray-500 tracking-widest"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a className="no-underline btn-blue rounded-full">contact</a>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
