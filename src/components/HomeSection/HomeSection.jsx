import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import ChartSection from "../ChartSection/ChartSection";

const HomeSection = () => {
  return (
    <div className="flex flex-col justify-center items-center my-12 sm:my-8 ">
      <div className=" sm:w-2/3 3xl:w-1/2 px-4 sm:px-0 2xl:px-10">
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  text-center font-black text-white tracking-wider">
          Meet <span className=" gradient-text ">CallUp!</span> Next-Gen AI
          Calling Solution
        </p>
      </div>

      <div>
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-black gradient-text ">
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              "Increased Sales", // initially rendered starting point
              1000,
              "Better Leads",
              1000,
              "Greater Upsells",
              1000,
              "High Resolution Rates",
              500,
            ]}
            speed={25}
            repeat={Infinity}
          />
        </p>
      </div>
      <div className=" my-3 md:my-5 p-4 sm:px-12 md:px-32 lg:px-44 xl:px-96">
        <p className="text-white font-medium text-center text-lg sm:text-xl">
          Welcome to the future of sales! At CallUp, we leverage cutting-edge AI
          technologies to revolutionize the way businesses engage with their
          customers and drive sales.
        </p>
      </div>
      <div className="flex flex-col  sm:flex-row mt-5 mb-10">
        <Link
          to="/pricing"
          className="text-lg aai-gradient-outline-btn p-4 px-8 text-black mx-4 bg-white "
        >
          Get Started
        </Link>
        <Link
          to="/aboutus"
          className="text-lg aai-gradient-outline-btn p-4 px-8 text-white mx-4 mt-6 sm:mt-0"
        >
          Learn More
        </Link>
      </div>
      <ChartSection />
    </div>
  );
};

export default HomeSection;
