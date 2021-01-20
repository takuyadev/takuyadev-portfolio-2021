import styled, { css } from "styled-components";
import Card from "../components/card";

export default function GradientCircle({ children }) {
  return (
    <Card>
      <div className="flex flex-col-reverse w-full rounded-lg item-center justify-center lg:flex-row">
        <div className=" w-full lg:w-1/2 p-3 ">
          <h1 className="font-extrabold text-3xl mb-3">CookOff!</h1>
          <p className="mb-3 text-gray-500">online cooking/streaming app with friends</p>
          <p className="mb-8">
            I’m a passionate front-end developer with strong UI/UX background.
            Bringing my strengths in both clean code and design, I hope to be
            able to be working with passionates alike!
          </p>
          <div className="btn-blue rounded-full text-center">View Details</div>
        </div>
        <img className="h-48 w-1/2" src="work_logo.svg"></img>
      </div>
    </Card>
  );
}
