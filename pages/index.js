import Nav from "../components/nav.js";
import GradientCircle from "../components/gradientCircle.js";

function Home() {
  return (
    <main>
      <Nav></Nav>
      <div className="flex items-center justify-center p-36">
        <GradientCircle/>
      </div>
      <hr></hr>
    </main>
  );
}

export default Home;
