import Nav from "../components/nav.js";
import GradientCircle from "../components/gradientCircle.js";
import Wave from "../components/wave.js";
import Card from "../components/card.js";
import ProjectCard from "../components/projectCard.js";

function Home() {
  return (
    <main className="w-screen ">
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
          <h1 className="w-screen text-center text-5xl z-10 font-bold leading-normal tracking-widest">
            takuya toyokawa
          </h1>
          <h1 className="w-screen text-center text-5xl z-10 tracking-widest text-gray-500">
            front end developer
          </h1>
        </GradientCircle>
      </div>
      <div className="flex items-center">
        <div className="line bg-gray-100" />
        <svg
          className="animate-pulse w-24 h-24 mx-24 border-gray-500"
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
      <section className="flex flex-col items-center justify-center text-center p-16 md:p-32">
        <h1 className="text-2xl font-bold tracking-wider my-8">
          Hi, my name is Taku.
        </h1>
        <p className="text-m tracking-wider w-4/5 leading-loose md:w-2/4">
          I’m a passionate front-end developer with strong UI/UX background.
          Bringing my strengths in both clean code and design, I hope to be able
          to be working with passionates alike!
        </p>
      </section>
      <section className="flex relative flex-col items-center justify-center w-full">
        <Wave text="technology" />
        <div className="flex flex-col justify-center items-center  bottom-24 w-full relative md:bottom-56 lg:flex-row z-10 text-center lg:bottom-96">
          <Card className="z-10 w-full">
            <img src="code.svg" className="w-12 mx-auto "></img>
            <h1 className="font-extrabold my-6 text-xl">Front-end</h1>
            <p className="m-2">HTML</p>
            <p className="m-2">CSS+SASS</p>
            <p className="m-2">JS</p>
            <p className="m-2">React.js</p>
            <p className="m-2">Storybook</p>
            <p className="m-2">Next.js</p>
            <p className="m-2">Styled Components</p>
          </Card>
          <Card className="z-10 w-full">
            <img src="design.svg" className="w-12 mx-auto "></img>
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
          className="animate-pulse relative -top-12  md:-top-40 w-12 h-12 mx-24 border-gray-500"
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
      <section className="flex flex-col items-center justify-center w-full">
        <Wave text="projects" />
        <div className="flex flex-col items-center justify-center w-full relative bottom-24 z-10 md:bottom-96">
          <ProjectCard className="z-10"></ProjectCard>
          <ProjectCard className="z-10"></ProjectCard>
          <ProjectCard className="z-10 "></ProjectCard>
        </div>
      </section>
    </main>
  );
}

export default Home;
