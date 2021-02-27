import Head from "next/head";
import Nav from "../components/Nav.js";
import Footer from "../components/Footer";
import DividerArrow from "../components/DividerArrow.js";
import Divider from "../components/Divider.js";
import Image from "../components/Image";
import BackgroundAnimation from "../components/BackgroundAnimation";
import BackUp from "../components/BackUp";

function CookOff() {
  return (
    <main className="w-screen ">
      <Head>
        <title>Takuya Toyokawa</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link rel="preload"/>
        <meta
          name="description"
          content="Takuya Toyokawa's Front-end Developer's portfolio based in Canada"
        ></meta>
      </Head>
      <Nav />
      <BackUp />
      <BackgroundAnimation />
      <div className="flex flex-col items-center justify-center p-16">
        <img className="h-96 w-auto mb-24 " src="project_1.png" />
        <section className="flex flex-col w-full lg:w-3/4 ">
          <h1 className="font-extrabold text-3xl tracking-widest text-gray-700 mb-3 dark:text-gray-200">
            CookOff!
          </h1>
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:mr-12 mb-12 flex-1 ">
              <h2 className="font-extrabold text-xl tracking-widest text-gray-600 mb-3 dark:text-gray-300">
                summary
              </h2>
              <p className="dark:text-gray-300 leading-loose tracking-wide mb-6">
                In 2020, the pandemic hit the world that halted all social
                interactions between people. One of the activities that were
                stopped as a result is cooking together with people and friends
                alike. Together with the popularity of social eating as shown
                with making dominating social platforms such as YouTube,
                garnering millions of views, our team sought to create a social
                streaming application that allows users to cook together in a
                cook-off.
              </p>
              <a
                href=""
                className="flex justify-center no-underline w-48 btn-blue rounded-full transition pointer-cursor hover:bg-blue-700"
              >
                View Application
              </a>
            </div>
            <div className="flex flex-col flex-1 ">
              <h2 className="font-extrabold text-xl tracking-widest text-gray-600 mb-3 dark:text-gray-300">
                team
              </h2>
              <p className="text-gray-500 leading-loose tracking-wide mb-12 dark:text-gray-300">
                Takuya Toyokawa (Lead Front-end Developer / Project Manager){" "}
                <br />
                Amina Ashour (UI/UX Designer) <br />
                Dmitry Matiouchenko (Full-Stack Developer) <br /> Simon Le
                (UI/UX Designer)
              </p>
              <h2 className="font-extrabold text-xl tracking-widest text-gray-600 mb-3 dark:text-gray-300">
                tools
              </h2>
              <p className="text-gray-500 leading-loose tracking-wide mb-3 dark:text-gray-300">
                Github, React.js w/Next.js + Framer Motion + Styled Components +
                Storybook + AXIOS, WordPress, Strappi, Figma, Trello
              </p>
            </div>
          </div>
        </section>
        <DividerArrow />
        <section className="flex flex-col lg:space-x-12 lg:flex-row w-full lg:w-3/4 ">
          <div className="flex flex-col mb-3 flex-1 ">
            <Image bgPosition="left" img="cookoff/problem.jpg"></Image>
          </div>
          <div className="flex flex-col flex-1 lg:ml-12">
            <h1 className="font-extrabold text-3xl tracking-widest text-gray-700 mb-3 dark:text-gray-300">
              problem
            </h1>
            <p className="text-gray-500 leading-loose tracking-wide mb-3 dark:text-gray-300">
              The problem that we found with traditional cooking parties is that
              mainly they are <b>hard to organize,</b> especially online.{" "}
              <b>Many people have busy schedules,</b> and sometimes schedules
              need to be canceled. Some people are not able to come near and
              have dinner together due to <b>distance-related</b> issues as
              well. Most importantly, however, is people{" "}
              <b>were not able to meet in a pandemic,</b> causing any form of
              social interactions impossible. In the near future as well, we
              predict that people will be more present online than before the
              pandemic has started.
            </p>
          </div>
        </section>
        <Divider />
        <section className="flex flex-col justify-center items-center text-center lg:space-x-12 w-full lg:w-3/4 dark:text-gray-300">
          <h1 className="font-extrabold text-3xl tracking-widest text-gray-700 mb-3 dark:text-gray-300">
            solution
          </h1>
          <p className="text-gray-500 leading-loose tracking-wide mb-3 dark:text-gray-300">
            To make an application that allows users to be able to{" "}
            <b>
              cook together through streaming platforms to increase the
              accessibility of cooking together.
            </b>
          </p>
        </section>
        <Divider />
        <section className="flex flex-col-reverse lg:space-x-12 lg:flex-row w-full lg:w-3/4 dark:text-gray-300">
          <div className="flex flex-col flex-1 mr-12">
            <h1 className="font-extrabold text-3xl tracking-widest text-gray-700 mb-3 dark:text-gray-300">
              user research
            </h1>
            <p className="text-gray-500 leading-loose tracking-wide mb-3 dark:text-gray-300">
              Our team researched our main demographic of people who enjoy
              cooking, but also research on users who create content for
              social-eating. Using what we researched through asking users, we
              developed our <b>user personas</b> and <b>user task models</b> to
              further solidify and understand our demographic.
            </p>
            <a
              href="https://www.figma.com/file/6uSOpwhpJwmg1UDUFXUBrD/CookOff?node-id=1150%3A2797"
              className="flex justify-center no-underline w-48 btn-blue rounded-full transition pointer-cursor hover:bg-blue-700"
            >
              View Figma
            </a>
          </div>

          <div className="flex flex-col mb-3 flex-1 ">
            <Image img="cookoff/persona_1.jpg"></Image>
          </div>
        </section>
        <Divider />

        <section className="flex flex-col justify-center items-center text-center lg:space-x-12 w-full lg:w-3/4 ">
          <h1 className="font-extrabold text-3xl tracking-widest text-gray-700 mb-3 dark:text-gray-300">
            features and differentiation
          </h1>
          <p className="text-gray-500 leading-loose tracking-wide mb-3 dark:text-gray-300">
            To differentiate ourselves from traditional video sharing
            applications, our application is a{" "}
            <b>
              social streaming application that allows users to go off in a
              cook-off.
            </b>{" "}
            The stream of the cook-off can be either a public event{" "}
            <b>where people around the world can join</b> and participate or a
            private event <b>between your friends.</b> In the stream, you can go
            off in a cook-off and the audience can determine which person cooked
            it better by visuals and ingredients. Users can also share their
            favorite meals on the application so people can cook-off using your
            recipes.
          </p>
        </section>
        <Divider />
        <section className="flex flex-col w-full lg:w-3/4 lg:flex-col">
          <Image img="cookoff/design.jpg"></Image>
          <div className="flex flex-col flex-1 mt-12 ">
            <h1 className="font-extrabold text-3xl tracking-widest text-gray-700 mb-3  dark:text-gray-300">
              design
            </h1>
            <div className="flex flex-col lg:flex-row lg:space-x-12">
              <div className="flex-1">
                <h2 className="font-extrabold text-xl tracking-widest text-gray-600 mb-3 dark:text-gray-300">
                  low/high-fidelity
                </h2>
                <p className="text-gray-500 leading-loose tracking-wide mb-3 dark:text-gray-300 dark:text-gray-300">
                  After our user research, we initially laid out our
                  low-fidelity using Figma. We then allowed our users to
                  navigate our application in the low-fidelity state to get
                  first feedback on the navigation fluidiity on the application.
                  We then created our styleguide, then laid out our final design
                  on Figma.
                </p>
              </div>
              <div className="flex-1">
                <h2 className="font-extrabold text-xl tracking-widest text-gray-600 mb-3 dark:text-gray-300">
                  user testing
                </h2>
                <p className="text-gray-500 leading-loose tracking-wide mb-3 dark:text-gray-300 ">
                  After our results from user testing, our main pain point that
                  we heard the most when talking to our users is the{" "}
                  <b>language used when navigating our application.</b> Some
                  users got confused by some of our words that we used when
                  navigating, so we adjusted it to make sure our users won't be
                  confused on the final deployment.
                </p>
              </div>
            </div>
            <a
              href="https://www.figma.com/file/6uSOpwhpJwmg1UDUFXUBrD/CookOff?node-id=1150%3A490"
              className="flex justify-center no-underline w-48 btn-blue rounded-full transition pointer-cursor hover:bg-blue-700"
            >
              View Figma
            </a>
          </div>
        </section>
        <Divider />
        <section className="flex flex-col w-full lg:w-3/4 lg:flex-col">
          <Image img="cookoff/development.jpg"></Image>
          <div className="flex flex-col flex-1 mt-12 ">
            <h1 className="font-extrabold text-3xl tracking-widest text-gray-700 mb-3 dark:text-gray-300">
              development
            </h1>
            <div className="flex flex-col lg:flex-row lg:space-x-12">
              <div className="flex-1">
                <h2 className="font-extrabold text-xl tracking-widest text-gray-600 mb-3 dark:text-gray-300">
                  front-end development
                </h2>
                <p className="text-gray-500 leading-loose tracking-wide mb-3 dark:text-gray-300">
                  Our front-end technology was founded by using React.js and
                  Storybook. As the lead front-end developer, we separated our
                  works by components and pages, then finally putting them
                  together. With Github and Storybook + Styled Components,
                  collaboration with creating components became incredibly easy.
                  For animations, we chose to use Framer Motion and Lottie to
                  maintain an agile workflow.
                </p>
              </div>
              <div className="flex-1">
                <h2 className="font-extrabold text-xl tracking-widest text-gray-600 mb-3 dark:text-gray-300">
                  back-end development
                </h2>
                <p className="text-gray-500 leading-loose tracking-wide mb-3 dark:text-gray-300">
                  Our back-end development was covered using Strappi. Strappi
                  allows for a friendly UI when developing a database for
                  developers to easily understand what the database looks like
                  without taking as much development time. During creation of
                  the database, we had to make sure data for user and user's
                  posts can properly be stored and called with AXIOS.
                </p>
              </div>
            </div>
            <a
              href="https://github.com/TakuyaKToyokawa/cook-off"
              className="flex justify-center no-underline w-48 btn-blue rounded-full transition pointer-cursor hover:bg-blue-700"
            >
              View GitHub
            </a>
          </div>
        </section>
        <Divider />
        <section className="flex flex-col lg:space-x-12 w-full lg:w-3/4 lg:flex-col">
          <div>
            <h1 className="font-extrabold text-3xl tracking-widest text-gray-700 mb-3 dark:text-gray-300">
              final takeaways
            </h1>
            <p className="text-gray-500 leading-loose tracking-wide mb-3 dark:text-gray-300 ">
              This project was the biggest project I've tackled yet in the
              development world, as I was not only the lead front-end developer,
              but as well as the project manager. There were many times that I
              felt overwhelmed due to the amount of work and management there
              were coming at me rapidly. There were a few key points that I
              found that challenged me the most that I will take note of in the
              future.
            </p>
            <ol className="list-decimal mt-8">
              <li className="font-extrabold text-xl tracking-widest text-gray-600 mb-3 ml-8 dark:text-gray-300">
                Maintain a development document and follow
              </li>
              <p className="text-gray-500 leading-loose tracking-wide mb-3 dark:text-gray-300">
                There were many times where development became a struggle not
                because the team didn't have the skills to accomplish the task,
                but because the development process was not properly
                communicated or was hard to decode. One point during our
                development process we were uncertain how to name certain
                functions or components, or how the page were supposed to be
                structured due to using new technology. For the next major
                project, having proper documentation I believe is key to make
                sure the development process for the whole team becomes smooth
                so the whole team is not lost on how to structure their code.
              </p>
              <li className="font-extrabold text-xl tracking-widest text-gray-600 mb-3 ml-8 dark:text-gray-300">
                Communication is key
              </li>
              <p className="text-gray-500 leading-loose tracking-wide mb-3 dark:text-gray-300">
                Communication was vital in this project, and even if I did
                communicate through a messenging application, it would not be
                always great for using as a project manager. Even if I used
                Trello, I did not enforce it enough for everyone to follow.
                Figuring out the best communication method for the team before
                the project starts is incredibly important to keep the project
                run as smooth as possible.
              </p>
              <li className="font-extrabold text-xl tracking-widest text-gray-600 mb-3 ml-8 dark:text-gray-300">
                Create positive work environment
              </li>
              <p className="text-gray-500 leading-loose tracking-wide mb-3 dark:text-gray-300">
                This is one aspect that truly brought this project together in
                the end. Although we did struggle multiple times during our
                development and design process, we never made our environment a
                toxic place to communicate in. We always helped eachother out if
                we ever needed and our motto was to be "honest with your work".
                This allowed us to plan ahead if there was a setback, and we
                never needed to condemn anyone because everyone had the same
                goal and vision.
              </p>
            </ol>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

export default CookOff;
