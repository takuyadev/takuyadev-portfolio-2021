import styled, { css } from "styled-components";

const Imagediv = styled.div`
  background-image: ${(props) =>
    props.img ? "url('" + props.img + "');" : "url('work_logo.svg');"};
  background-position: ${(props) =>
    props.bgPosition ? props.bgPosition : "center"};
    min-height: ${(props) =>
    props.height ? props.height : null};
`;

export default function Image({ img, bgPosition, height}) {
  return (
    <Imagediv
      className="relative h-96 rounded-xl w-auto ml-0 bg-cover bg-no-repeat bg-center transition mb-6"
      bgPosition={bgPosition}
      img={img}
      height={height}
    ></Imagediv>
  );
}

Image.defaultProps = {
  href: "/",
};
