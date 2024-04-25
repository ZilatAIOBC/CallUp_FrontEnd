/* eslint-disable react/prop-types */
import { Fade } from "react-awesome-reveal";

import "./QuestionAccordion.css";
const QuestionAccordion = (props) => {
  return (
    <div className="px-4 sm:px-0   sm:w-5/6">
      <Fade direction="up">
        <div className="collapse collapse-arrow bg-transparent border-b-2 rounded-none border-gray-700   ">
          <input aria-label="Question" type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl sm:text-2xl font-bold text-white">
            {props.question}
          </div>
          <div className="collapse-content">
            <p className="text-white text-start w-4/5 text-lg">
              {props.answer}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default QuestionAccordion;
