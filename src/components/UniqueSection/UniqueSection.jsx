import { Fade } from "react-awesome-reveal";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const UniqueSection = () => {
  return (
    <div>
      <Fade direction="up">
        <p className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-black">
          What Make Us <span className="gradient-text">Unique</span>
        </p>

        <div className=" py-16 flex  flex-col  lg:justify-center lg:items-center px-5 ps-10 sm:ps-28 lg:ps-0">
          <div className="flex flex-col lg:flex-row lg:my-3 justify-around w-5/6">
            <p className="text-white font-medium text-xl lg:mx-5 my-1">
              <CheckCircleIcon className="text-yellow-400" /> Innovation at the
              Core
            </p>
            <p className="text-white font-medium text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400" /> Customer-Centric
              Approach
            </p>
            <p className="text-white font-medium text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400" /> Transparency
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:my-3 lg:w-5/6 lg:justify-around">
            <p className="text-white font-medium text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400 " /> Dedicated Team
            </p>
            <p className="text-white font-medium text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400 x" /> Agility and
              Adaptability
            </p>
            <p className="text-white font-medium text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400 " /> Proven Results
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:my-3 lg:w-5/6 lg:justify-around">
            <p className="text-white font-medium text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400 " /> Continuous
              Improvement
            </p>
            <p className="text-white font-medium text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400 x" /> Community
              Engagement
            </p>
            <p className="text-white font-medium text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400 " /> Scalable
              Solutions
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default UniqueSection;
