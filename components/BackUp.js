import styled, { css } from "styled-components";

export default function BackUp() {
  return (
    <a
      href="#top"
      className="fixed right-0 bottom-0 flex items-center justify-center rounded-full w-12 h-12 m-4 shadow-lg v z-20 bg-gray-200 transition ease-in-out hover:bg-gray-400 cursor-pointer "
    >
      <img src="icons/arrowUp.png" className="h-1.5 w-3 cursor-pointer"></img>
    </a>
  );
}

BackUp.defaultProps = {};
