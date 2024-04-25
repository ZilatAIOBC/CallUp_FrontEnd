import { Fade } from "react-awesome-reveal";

import "./SolutionCard.css";

const SolutionCard = (props) => {
  return (
    <div className="w-96  m-4 sm:m-0">
      {/* <Fade direction="up"> */}
      <div className="aai-feature-box ">
        <div className="aai-feature-box-inner flex flex-col items-center">
          <div>
            <img
              src={props.image}
              alt="Feature Card Image"
              className="aai-feature-icon"
            />
          </div>
          <h3 className="aai-feature-title">{props.title}</h3>
          <p className="aai-feature-desc">
            Personalize Financial Advice & Optimize Customer Interactions.
            <br />
            <br />
          </p>
        </div>
      </div>{" "}
      {/* </Fade> */}
    </div>
  );
};

export default SolutionCard;
// REMOVE FROM CARD TO PARENT
