import { motion } from "framer-motion";
import Nav from "../components/Nav.js";
import Footer from "../components/Footer";
import GradientCircle from "../components/GradientCircle.js";
import Wave from "../components/Wave.js";
import Card from "../components/Card.js";
import Image from "../components/Image";
import ImageCard from "../components/ImageCard.js";
import ProjectCard from "../components/ProjectCard.js";
import DividerArrow from "../components/DividerArrow.js";
import Head from "next/head";
import BackgroundAnimation from "../components/BackgroundAnimation";
import BackUp from "../components/BackUp";

function Home() {
  return (
    <main className="w-screen ">
      <Head>
        <title>Takuya Toyokawa</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta
          name="description"
          content="Takuya Toyokawa's Front-end Developer's portfolio based in Canada"
        ></meta>
      </Head>
      <Nav />
      <BackgroundAnimation />
      <div className="flex items-center justify-center p-16">
        <section className="flex justify-center rounded-t  h-48  text-center z-10 w-full ">
          <div className="flex flex-col items-center justify-center bg-white rounded-t-xl shadow-md border-gray-500 w-3/4">
            <p className="mb-12 tracking-widest text-gray-500">contact me through any of these platforms!</p>
            <div className="flex flex-row items-center justify-center w-full space-x-16 md:space-x-36 md:w-3/4">
              <a
                className="transition"
                href="https://www.linkedin.com/in/takuya-toyokawa-908795149/"
              >
                <img src="icons/linkedin.png" />
              </a>
              <a
                className="transition"
                href="mailto:takuya.k.toyokawa@gmail.com"
              >
                <img src="icons/mail.png" />
              </a>
              <a
                className="transition"
                href="https://github.com/TakuyaKToyokawa"
              >
                <img src="icons/github.png" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
