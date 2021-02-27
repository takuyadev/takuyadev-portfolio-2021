import styled, { css } from "styled-components";

export default function Divider() {
  return (
    <div className="flex w-screen my-24 items-center">
      <div className="line bg-gray-200" />
    </div>
  );
}

Divider.defaultProps = {};
