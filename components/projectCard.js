import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import Card from "./Card";
import Link from "next/link";

const Image = styled.div`
  min-height: 500px;
  height: 100%;
  background-image: ${(props) =>
    props.img ? "url('" + props.img + "');" : "url('work_logo.svg');"};
`;

export default function ProjectCard({
  children,
  role,
  title,
  desc,
  img,
  team,
  link,
  link2,
}) {
  return (
    <Card>
      <div className="flex flex-col-reverse w-full rounded-lg item-center justify-center lg:flex-row">
        <div className=" w-full lg:w-1/2 p-3 ">
          <h1 className="font-extrabold text-3xl mb-3 tracking-widest text-gray-700">
            {title}
          </h1>
          <p className="mb-3 text-gray-700  tracking-wide">{role}</p>
          <p className="mb-3 text-gray-600  leading-loose tracking-wide">
            {desc}
          </p>
          <h2 className="text-xl font-bold text-gray-500 mb-3 ">Team</h2>
          <p className="mb-8 whitespace-pre-wrap text-gray-700 italic tracking-wide  leading-loose">
            {team}
          </p>
          <Link href={link}>
            <a className="btn-blue rounded-full w-full text-center transition hover:bg-blue-700">
             {link2}
            </a>
          </Link>
        </div>
        <Image
          className="w-full ml-0 bg-contain  bg-no-repeat bg-center  rounded-2xl transition mb-6 shover:translate-y-3 lg:ml-6 lg:w-1/2 lg: m-0"
          img={img}
        ></Image>
      </div>
    </Card>
  );
}

ProjectCard.defaultProps = {
  href: "/",
  link2: "View Project",
};
