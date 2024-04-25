import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import SalesImage from "../../utils/Images/abt/abt-1.png";
import VisionImage from "../../utils/Images/abt/abt-2.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import "./AboutUsSection.css";
const AboutUsSection = () => {
  return (
    <div className="flex justify-center">
      <div className="sm:w-5/6  ">
        <div className=" grid grid-cols-1  lg:grid-cols-2 gap-4">
          <Fade direction="left">
            <div className="p-2 flex justify-center">
              <img src={SalesImage} alt="Sales Image" className="" />
            </div>
          </Fade>
          <div className="p-4">
            <p className="text-3xl md:text-5xl text-white font-black my-6">
              Elevating <span className="gradient-text">Sales</span>{" "}
            </p>
            <p className="text-white text-lg">
              At CallUp, we are more than just a Tech Company; we are Innovators
              on a mission to redefine the way Businesses engage with their
              Customers. Founded on the Principles of Efficiency,
              Personalization, and Cutting-edge Technology, we believe in the
              power of AI to transform Conversations and Elevate Sales
              Strategies.
            </p>
            <div>
              <p className="text-white font-medium text-xl  my-3">
                <CheckCircleIcon className="text-yellow-400" /> Seamless
                Integration
              </p>
              <p className="text-white font-medium text-xl  my-3">
                <CheckCircleIcon className="text-yellow-400" /> Industry
                Recognition
              </p>
              <p className="text-white font-medium text-xl  my-3">
                <CheckCircleIcon className="text-yellow-400" /> Customer Support
                Metrics
              </p>
            </div>
            <Link
              to="/pricing"
              className="aai-gradient-outline-btn p-4 px-8 my-8"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className=" grid grid-cols-1  lg:grid-cols-2 gap-4 my-10 vision-bg">
          <div className="p-4">
            <p className="text-3xl md:text-5xl text-white font-black my-6">
              Our <span className="gradient-text">Vision</span>{" "}
            </p>
            <p className="text-white text-lg">
              Our vision is to Empower Businesses of all sizes to Unleash the
              full Potential of their sales calls. We Envision a Future where
              every Interaction is meaningful, every Lead is Qualified with
              Precision, and every Conversation drives Success. CallUp is the
              Embodiment of this Vision — a Catalyst for Positive Change in the
              Sales Landscape.
            </p>
            <Link
              to="/pricing"
              className="aai-gradient-outline-btn p-4 px-8 my-10"
            >
              Get Started
            </Link>
          </div>{" "}
          <Fade direction="left">
            <div className="p-2 flex justify-center">
              <img src={VisionImage} alt="Vision Image" className="" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
