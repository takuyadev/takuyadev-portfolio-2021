import styled, { css } from "styled-components";

const Circle = styled.div`
  position: relative;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  &::after {
    position: absolute;
    content: " ";
    background: linear-gradient(
      180deg,
      #8c8cfe 0%,
      rgba(102, 255, 255, 0.3) 100%
    );
    width: 90%;
    height: 90%;
    border-radius: 100%;
  }
`;

export default function GradientCircle({children}) {
  return (

      <Circle className="flex flex-col justify-center items-center z-0 w-72 h-72 md:w-96 md:h-96 ">
        {children}
      </Circle>

  );
}
