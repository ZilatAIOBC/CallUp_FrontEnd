import { Fade } from "react-awesome-reveal";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import "./AchievementsSection.css";

const AchievementsSection = () => {
  return (
    <div className="achievements-bg">
      <Fade direction="up">
        <div className="  py-16 flex  flex-col lg:justify-center lg:items-center px-5 ps-10 sm:ps-28 lg:ps-0">
          <div className="flex flex-col lg:flex-row lg:my-3">
            <p className="text-white font-medium text-xl lg:mx-5 my-2">
              <CheckCircleIcon className="text-yellow-400" /> Industry
              Recognition
            </p>
            <p className="text-white font-medium text-xl lg:mx-5 my-2">
              {" "}
              <CheckCircleIcon className="text-yellow-400" /> Security
              Compliance
            </p>
            <p className="text-white font-medium text-xl lg:mx-5 my-2">
              {" "}
              <CheckCircleIcon className="text-yellow-400" /> Demo and Trial
              Options
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:my-3">
            <p className="text-white font-medium text-xl lg:mx-5 my-2">
              {" "}
              <CheckCircleIcon className="text-yellow-400 " /> Integration
              Partnerships
            </p>
            <p className="text-white font-medium text-xl lg:mx-5 my-2">
              {" "}
              <CheckCircleIcon className="text-yellow-400 x" /> Transparent
              Pricing
            </p>
            <p className="text-white font-medium text-xl lg:mx-5 my-2">
              {" "}
              <CheckCircleIcon className="text-yellow-400 " /> Community
              Engagement
            </p>
          </div>
        </div>{" "}
      </Fade>
    </div>
  );
};

export default AchievementsSection;
