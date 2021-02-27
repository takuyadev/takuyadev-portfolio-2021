import styled, { css } from "styled-components";

export default function Footer() {
  return (
    <section className="flex justify-center fixed rounded-t bottom-0 h-24  text-center z-10 w-full ">
      <div  className="flex flex-col items-center justify-center w-full bg-white rounded-t-xl shadow-md border-gray-500 md:w-3/4">
        <p className="mb-3 tracking-widest text-gray-500">connect</p>
        <div className="flex flex-row items-center justify-center w-full space-x-16 md:space-x-36 md:w-3/4">
          <a
            className="transition"
            href="https://www.linkedin.com/in/takuya-toyokawa-908795149/"
          >
            <img src="icons/linkedin.png" />
          </a>
          <a className="transition" href="mailto:takuya.k.toyokawa@gmail.com">
            <img src="icons/mail.png" />
          </a>
          <a className="transition" href="https://github.com/TakuyaKToyokawa">
            <img src="icons/github.png" />
          </a>
        </div>
      </div>
    </section>
  );
}

Footer.defaultProps = {};
