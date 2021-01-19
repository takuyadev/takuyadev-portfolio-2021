import styled, { css } from "styled-components";

export default function Card({children }) {
  return (
    <div className="flex shadow-md h-auto w-4/5 item-center bg-white m-6 py-12 px-6 rounded-lg flex-col justify-center  lg:w-full lg:mx-24 lg:my-0">
        {children}
    </div>
  );
}

Card.defaultProps = {};
