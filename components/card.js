import styled, { css } from "styled-components";

export default function Card({children }) {
  return (
    <div className="flex shadow-md h-auto w-3/4 item-center bg-white m-6 py-12 px-6 rounded-lg flex-col justify-center z-10 lg:mx-24  lg:my-6">
        {children}
    </div>
  );
}

Card.defaultProps = {};
