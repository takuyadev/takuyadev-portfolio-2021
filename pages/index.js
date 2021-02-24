import Nav from "../components/nav.js";
import GradientCircle from "../components/gradientCircle.js";
import Wave from "../components/wave.js";
import Card from "../components/card.js";
import ProjectCard from "../components/projectCard.js";
import Head from "next/head";

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
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="flex items-center justify-center p-16">
        <GradientCircle>
          <h1 className="w-screen text-center text-3xl md:mb-4 md:text-5xl z-10 font-bold leading-normal tracking-widest dark:text-white">
            takuya toyokawa
          </h1>
          <h1 className="w-screen text-center text-3xl md:text-5xl z-10 tracking-widest text-gray-700 dark:text-gray-200">
            front end developer
          </h1>
        </GradientCircle>
      </div>
      <div className="flex items-center">
        <div className="line bg-gray-100" />
        <svg
          className="animate-pulse w-24 h-24 mx-24 border-gray-500 dark:border-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
        <div className="line bg-gray-100" />
      </div>
      <section
        id="about"
        className="flex flex-col items-center justify-center text-center p-16 md:p-32"
      >
        <h1 className="text-2xl font-bold tracking-wider my-8 dark:text-white">
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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
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
            img="project_1.png"
            role="lead front-end developer / project manager"
            title="CookOff!"
            team={`Takuya Toyokawa (Lead Front-end Developer / Project Manager) \nAmina Ashour (UI/UX Designer) \nDmitry Matiouchenko (Full-Stack Developer) \nSimon Le (UI/UX Designer)`}
            desc="Our team created an web application for users trying to be able to cook together, not only to bring the joy of cooking together online, but improve upon what could be done with the concept of cooking food together. Using React.js and Strappi, we were able to build an application that allows users to share recipes, create events, and host their online events."
            link="https://cookoff.live/profile"
          ></ProjectCard>
          <ProjectCard
            className="z-10"
            img="project_3.png"
            role="lead front-end developer / UX/UI designer"
            title="Logee"
            team={`Takuya Toyokawa (Lead Front-end Developer / UI/UX Designer) \nEmma Parsons (UI/UX Designer / Front-end Developer) \nSimon Le (UI/UX Designer / Front-end Developer / Illustrator)`}
            desc="Our team was tasked to create an application was to not only teach users what inductive and deductive reasoning was, but also to the age demographic of 8-12. Since it was a younger demographic, we had to make it welcoming for younger kids with attracting visuals. This web application was created using HTML/CSS/JS."
            link="https://takuyaktoyokawa.github.io/logeee/"
          ></ProjectCard>
          <ProjectCard
            className="z-10"
            img="project_2.png"
            role="lead front-end developer / UX/UI designer"
            title="Shelfie"
            team={`Takuya Toyokawa (Lead Front-end Developer / UI/UX Designer) \nEmma Parsons (UI/UX Designer / Front-end Developer) \nSimon Le (UI/UX Designer / Front-end Developer)`}
            desc="Our team was tasked to create an application based on real-world problems based on the environment. Our idea of creating an application to tell the expiration date of food came from the concept that many people waste food just because they don't know when common food expires. Using React.js, we were able to successfully develop the application."
            link="https://shelfie.vercel.app/Homepage"
          ></ProjectCard>{" "}
          <p className="text-black dark:text-white">
            more projects soon to be posted.
          </p>
        </div>
      </section>
      <section
        id="contact"
        className="flex flex-col  items-center justify-center h-48 w-full text-center z-10 border-t-2 border-b-2 border-gray-200"
      >
        <h1 className=" font-extrabold text-5xl mb-6 md:mb-12">Contact</h1>
        <div className="flex flex-col md:flex-row md:space-x-12 ">
          <a
            className="transition text-blue-700 hover:text-blue-500"
            href="https://www.linkedin.com/in/takuya-toyokawa-908795149/"
          >
            LinkedIn
          </a>
          <a className="transition text-blue-700 hover:text-blue-500">
            Takuya.K.Toyokawa@gmail.com
          </a>
          <a
            className="transition text-blue-700 hover:text-blue-500"
            href="https://github.com/TakuyaKToyokawa"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
