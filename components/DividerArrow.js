import styled, { css } from "styled-components";

export default function DividerArrow() {
  return (
    <div className="flex w-screen my-24 items-center">
      <div className="line bg-gray-200" />
      <svg
        className="animate-pulse w-24 h-24 mx-24 border-gray-500 dark:border-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
      <div className="line bg-gray-200" />
    </div>
  );
}

DividerArrow.defaultProps = {};
