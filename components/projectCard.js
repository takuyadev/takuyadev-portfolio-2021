import styled, { css } from "styled-components";
import Card from "../components/card";

const Image = styled.div`
  background-image: ${(props) =>
    props.img ? "url('" + props.img + "');" : "url('work_logo.svg');"};
`;

export default function GradientCircle({
  children,
  role,
  title,
  desc,
  img,
  team,
}) {
  return (
    <Card>
      <div className="flex flex-col-reverse w-full rounded-lg item-center justify-center lg:flex-row">
        <div className=" w-full lg:w-1/2 p-3 ">
          <h1 className="font-extrabold text-3xl mb-3">{title}</h1>
          <p className="mb-3 text-gray-500">{role}</p>
          <p className="mb-3">{desc}</p>
          <h2 className="text-xl font-bold text-gray-500 mb-3">Team</h2>
          <p className="mb-8 whitespace-pre-wrap text-gray-700 italic">
            {team}
          </p>
          <a
            className="btn-blue rounded-full w-full text-center transition hover:bg-blue-700"
            href="https://cookoff.live"
          >
            View Site
          </a>
        </div>
        <Image
          className="h-96 w-full ml-0 bg-contain bg-no-repeat bg-center rounded-2xl transition shadow-md border-indigo-200 border-4 mb-6 shover:translate-y-3 lg:ml-6 lg:w-1/2 lg: m-0"
          img={img}
        ></Image>
      </div>
    </Card>
  );
}
