import Nav from "../components/nav.js";
import GradientCircle from "../components/gradientCircle.js";

function Home() {
  return (
    <main>
      <Nav></Nav>
      <div className="flex items-center justify-center p-18">
        <GradientCircle/>
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
        <p className="text-xl tracking-wider w-2/4 leading-loose">
          I’m a passionate front-end developer with strong UI/UX background.
          Bringing my strengths in both clean code and design, I hope to be able
          to be working with passionates alike!
        </p>

      </section>


    </main>
  );
}

export default Home;
