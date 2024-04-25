/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import CtaImage from "../../utils/Images/cta/cta-screen.png";

import "./CtaSection.css";

const CtaSection = () => {
  return (
    <div className="cta-bg flex  flex-col lg:flex-row justify-center items-center">
      <div className="sm:w-5/6">
        <div className="flex  flex-col lg:flex-row justify-center items-center">
          <div className="flex flex-col  items-center lg:items-start justify-center px-4">
            <p className="text-white text-center lg:text-start  text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              Ready to
              <span className="gradient-text"> Transform Your Sales?</span>
            </p>
            <p className="text-gray-100 text-lg text-center lg:text-start sm:text-xl my-8 sm:w-3/5">
              Embark on a journey of endless possibilities with CallUp's
              innovative solutions designed to cater to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center">
              <Link
                to="/pricing"
                className="aai-gradient-outline-btn p-4 px-8 bg-white text-black my-2 text-lg sm:mx-4"
              >
                Get Started
              </Link>
              <Link
                to="/aboutus"
                className="aai-gradient-outline-btn p-4 px-8 my-2 text-lg sm:mx-4"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Fade direction="up">
              <img
                loading="lazy"
                src={CtaImage}
                alt="Call To Image Image"
                className="py-5 md:px-10 lg:px-0  "
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
