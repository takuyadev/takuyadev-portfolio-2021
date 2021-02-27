import styled, { css } from "styled-components";

const Imagediv = styled.div`
  background-image: ${(props) =>
    props.img ? "url('" + props.img + "');" : "url('work_logo.svg');"};
  background-position: ${(props) =>
    props.bgPosition ? props.bgPosition : "center"};

`;

export default function ImageCard({ img, bgPosition, href }) {
  return (
    <a href={href}>
      <Imagediv
        className="relative h-36 rounded-xl w-auto ml-0 bg-cover bg-no-repeat bg-center transition mb-6 transform shadow-md duration-500 scale-100 hover:scale-95"
        bgPosition={bgPosition}
        img={img}
      ></Imagediv>
    </a>
  );
}

ImageCard.defaultProps = {
  href: "/",
};
