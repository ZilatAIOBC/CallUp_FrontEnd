import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import "./FeatureCardLeft.css";

const FeatureCardLeft = (props) => {
  return (
    <div className=" feature-card-bg flex justify-center">
      <div className="sm:w-5/6">
        <div className=" grid grid-cols-1  lg:grid-cols-2   lg:my-24">
          <div className="p-4 py-12">
            <p className="text-3xl md:text-5xl text-white font-black my-6">
              {props.title}
            </p>
            <p className="text-white text-lg">{props.description}</p>
            <Link
              to="/pricing"
              className="aai-gradient-outline-btn p-4 px-8 my-12"
            >
              Get Started
            </Link>
          </div>
          <Fade direction="right">
            <div className="p-2 flex justify-center">
              <img src={props.image} alt="Feature Image" className="" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default FeatureCardLeft;
