import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import SolutionCard from "../SolutionCard/SolutionCard";
import FirstImage from "../../utils/Images/features/fi-1.png";
import SecondImage from "../../utils/Images/features/fi-2.png";
import ThirdImage from "../../utils/Images/features/fi-3.png";
import FourthImage from "../../utils/Images/features/fi-4.png";
import FifthImage from "../../utils/Images/features/fi-5.png";
import SixthImage from "../../utils/Images/features/fi-6.png";

const SolutionsList = () => {
  return (
    <>
      <div className="flex justify-around  flex-wrap overflow-auto gap-y-5  items-center py-5">
        {/* <Fade direction="up"> */}
        <SolutionCard image={FirstImage} title="Banking & Finance" />
        <SolutionCard image={SecondImage} title="E-commerce and Retail" />
        <SolutionCard image={ThirdImage} title="Healthcare" />
        <SolutionCard image={FourthImage} title="Education" />
        <SolutionCard image={FifthImage} title="Travel and Hospitality" />
        <SolutionCard image={SixthImage} title="Human Resources" />
        {/* </Fade> */}
      </div>
      <Fade direction="up">
        <div className="flex justify-center py-5">
          <Link
            to="/solutions"
            className="bg-white text-black aai-gradient-outline-btn p-4 px-8 text-lg "
          >
            See more
          </Link>
        </div>
      </Fade>
    </>
  );
};

export default SolutionsList;
