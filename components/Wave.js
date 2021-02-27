import styled, { css } from "styled-components";

const HeadLine = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default function Wave({ text }) {
  return (
    <div className="relative text-center bottom-12 md:bottom-56 z-0">
      <img className="w-screen" src="wave.svg"></img>
      <HeadLine className="text-4xl font-bold text-white md:text-7xl">{text}</HeadLine>
    </div>
  );
}

Wave.defaultProps = {};
