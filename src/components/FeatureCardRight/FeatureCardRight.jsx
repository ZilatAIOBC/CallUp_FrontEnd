import { useMediaQuery } from "react-responsive";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const FeatureCardRight = (props) => {
  const isLg = useMediaQuery({ maxWidth: 1024 });
  return isLg ? (
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
          <Fade direction="left">
            <div className="p-2 flex justify-center">
              <img src={props.image} alt="Feature Image" className="" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  ) : (
    <div className="feature-card-bg flex justify-center">
      <div className="sm:w-5/6">
        <div className=" grid grid-cols-1  lg:grid-cols-2 lg:my-24">
          <Fade direction="left">
            <div className="p-2 flex justify-center">
              <img src={props.image} alt="Feature Image" className="" />
            </div>
          </Fade>
          <div className="p-4">
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
        </div>
      </div>
    </div>
  );
};

export default FeatureCardRight;
