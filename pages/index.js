import React from "react";
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
        <link rel="preload" />
        <meta
          name="description"
          content="Takuya Toyokawa's Front-end Developer's portfolio based in Canada"
        ></meta>
      </Head>
      <Nav />

      <BackgroundAnimation />
      <div className="flex items-center justify-center p-16">
        <GradientCircle>
          <h1 className="w-screen text-center text-3xl md:mb-4 md:text-5xl z-10 font-bold leading-normal tracking-widest dark:text-white">
            takuya toyokawa
          </h1>
          <h1 className="w-screen text-center text-3xl md:text-5xl z-10 tracking-widest text-gray-700 dark:text-gray-200">
            front end developer + UX/UI
          </h1>
        </GradientCircle>
      </div>
      <DividerArrow />
      <section
        id="about"
        className="flex flex-col items-center justify-center text-center p-16 md:p-32"
      >
        <h1 className="text-2xl font-bold tracking-wider mb-8 dark:text-white">
          Hi, my name is Taku.
        </h1>
        <p className="text-m tracking-wider w-4/5 leading-loose md:w-2/4 dark:text-white">
          I’m a passionate front-end developer with strong UI/UX background.
          Bringing my strengths in both clean code and design, I hope to be able
          to be working with passionates alike!
        </p>
      </section>
      <section
        id="technology"
        className="flex relative flex-col items-center justify-center w-full"
      >
        <Wave text="technology" />
        <div className="flex flex-col justify-center items-center bottom-24 w-full relative md:bottom-56 lg:flex-row z-10 text-center lg:bottom-96">
          <Card className="z-10 w-full">
            <img src="icons/code.png" className="w-12 mx-auto "></img>
            <h1 className="font-extrabold my-6 text-xl">Front-end</h1>
            <p className="m-2">HTML</p>
            <p className="m-2">CSS+SASS</p>
            <p className="m-2">JS</p>
            <p className="m-2">WordPress</p>
            <p className="m-2">React.js</p>
            <p className="m-2">Storybook</p>
            <p className="m-2">Next.js</p>
          </Card>
          <Card className="z-10 w-full">
            <img src="icons/design.png" className="w-12 mx-auto "></img>
            <h1 className="font-extrabold my-6 text-xl">UI/UX Design</h1>
            <p className="m-2">Figma</p>
            <p className="m-2">Invision</p>
            <p className="m-2">Adobe Photoshop</p>
            <p className="m-2">Adobe Illustrator</p>
            <p className="m-2">Adobe XD</p>
            <p className="m-2">Adobe Premiere Pro</p>
            <p className="m-2">Adobe After Effects</p>
          </Card>
        </div>
        <svg
          className="animate-pulse relative -top-12  md:-top-40 w-12 h-12 mx-24 border-gray-500 dark:border-white"
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
      </section>
      <section
        id="projects"
        className="flex flex-col items-center justify-center w-full"
      >
        <Wave text="projects" />
        <div className="flex flex-col items-center justify-center w-full relative bottom-24 z-10 md:bottom-96">
          <ProjectCard
            className="z-10"
            img="project_1.webp"
            role="lead front-end developer / project manager"
            title="CookOff!"
            team={`Takuya Toyokawa (Lead Front-end Developer / Project Manager) \nAmina Ashour (UI/UX Designer) \nDmitry Matiouchenko (Full-Stack Developer) \nSimon Le (UI/UX Designer)`}
            desc="Our team created an web application for users trying to be able to cook together, not only to bring the joy of cooking together online, but improve upon what could be done with the concept of cooking food together. Using React.js and Strappi, we were able to build an application that allows users to share recipes, create events, and host their online events."
            link="/cookoff"
            link2="View Project Process"
          ></ProjectCard>
          <ProjectCard
            className="z-10"
            img="project_3.webp"
            role="lead front-end developer / UX/UI designer"
            title="Logee"
            team={`Takuya Toyokawa (Lead Front-end Developer / UI/UX Designer) \nEmma Parsons (UI/UX Designer / Front-end Developer) \nSimon Le (UI/UX Designer / Front-end Developer / Illustrator)`}
            desc="Our team was tasked to create an application was to not only teach users what inductive and deductive reasoning was, but also to the age demographic of 8-12. Since it was a younger demographic, we had to make it welcoming for younger kids with attracting visuals. This web application was created using HTML/CSS/JS."
            link="takuyadev.github.io/logeee/"
          ></ProjectCard>
          <ProjectCard
            className="z-10"
            img="project_2.webp"
            role="lead front-end developer / UX/UI designer"
            title="Shelfie"
            team={`Takuya Toyokawa (Lead Front-end Developer / UI/UX Designer) \nEmma Parsons (UI/UX Designer / Front-end Developer) \nSimon Le (UI/UX Designer / Front-end Developer)`}
            desc="Our team was tasked to create an application based on real-world problems based on the environment. Our idea of creating an application to tell the expiration date of food came from the concept that many people waste food just because they don't know when common food expires. Using React.js, we were able to successfully develop the application."
            link="https://shelfie.vercel.app/Homepage"
          ></ProjectCard>{" "}
          <h1 className="font-extrabold text-3xl tracking-widest text-gray-700 mb-6 dark:text-gray-200">
            more projects
          </h1>
          <div className="w-3/4 grid grid-flow-row grid-cols-2 md:grid-cols-3 grid-rows-3 gap-4">
            <ImageCard
              img="salish.jpg"
              href="http://salishairway.altervista.org/"
            />
            <ImageCard
              img="sushime.jpg"
              href="https://takuyadev.github.io/sushime-styleguide/"
            />
          </div>
        </div>
      </section>

      <section
        id="otherwork"
        className="relative bottom-96 flex flex-col items-center justify-start w-full"
      >
        <Wave text="other work" id="otherwork" />
        <div className="relative bottom-24 md:bottom-96 flex flex-col items-center justify-center">
          <Card>
            <div className=" flex flex-col-reverse lg:flex-row z-10 lg:space-x-12">
              <div className="flex-1 mt-6">
                <h1 className="font-extrabold text-3xl tracking-widest text-gray-700 mb-3 ">
                  A Day in the Life of Animal Crossing
                </h1>
                <p className="mb-3 text-gray-700  tracking-wide">
                  After Effects / Illustrator
                </p>
                <p className="text-gray-500 leading-loose tracking-wide">
                  Using After Effects and Illustrator, I created a small
                  animation based on the game called <i>Animal Crossing.</i> At
                  the time of creation, the new game released by Nintendo called
                  Animal Crossing: New Horizons launched, and on celebration I
                  created a small animation based on the daily activities in the
                  game.
                  <br />
                  <br />
                  Some other smaller portions that attributed in the creation of
                  the video is audio creation for some sound effects, which was
                  recorded and created using Audacity.
                </p>
              </div>
              <iframe
                width="full"
                height="400"
                loading="lazy"
                className="flex-1 rounded-xl"
                src="https://www.youtube-nocookie.com/embed/videoseries?list=PLoMwq4kX_LkqNAZHpyNHHgr8gzA2nkADp&rel=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="allowFullScreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
              ></iframe>
            </div>
          </Card>
          <Card>
            <div className=" flex flex-col-reverse lg:flex-row z-10 lg:space-x-12">
              <div className="flex-1 mt-6">
                <h1 className="font-extrabold text-3xl tracking-widest text-gray-700 mb-3 ">
                  Designer's Life
                </h1>
                <p className="mb-3 text-gray-700  tracking-wide">
                  Premiere Pro / Audition
                </p>
                <p className="text-gray-500 leading-loose tracking-wide mb-6">
                  Using a DSLR Camera, we recorded all our shots and took
                  multiple shots to ensure we had the best shot when putting
                  them all together. Once all the clips were recorded, we took
                  the recordings to Premiere Pro to color correct the footage to
                  fit the dark theme of the story. To finalize the project, we
                  ensured the audio was at comfortable level with Adobe
                  Audition.
                </p>
              </div>

              <iframe
                width="full"
                height="400"
                loading="lazy"
                className="flex-1 rounded-xl"
                src="https://www.youtube-nocookie.com/embed/videoseries?list=PLoMwq4kX_LkrymCC54rcJRKylzXRsMUu8&rel=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="allowFullScreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
              ></iframe>
            </div>
          </Card>
          <div className="w-3/4 lg:w-1/2 h-96">
            <h1 className="font-extrabold text-3xl tracking-widest text-gray-700 mb-3 text-center  dark:text-gray-200">
              Illustrator
            </h1>
            <Image height="600px" img="illustrator.webp" />
            <h1 className="font-extrabold text-3xl tracking-widest text-gray-700 mb-3 text-center dark:text-gray-200">
              Photoshop
            </h1>
            <Image height="800px" img="photoshop.webp" />
          </div>
        </div>
      </section>
      <BackUp></BackUp>
      <Footer></Footer>
    </main>
  );
}

export default Home;
