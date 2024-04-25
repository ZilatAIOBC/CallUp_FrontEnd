import SolutionsList from "../SolutionsList/SolutionsList";

import "./SolutionsSection.css";
const SolutionsSection = () => {
  return (
    <div className="solutions-image flex justify-center">
      <div className="w-screen">
        <div className=" flex flex-col justify-center items-center">
          <div className="sm:w-3/5">
            <p className="text-white text-center text-3xl sm:text-5xl font-bold my-2">
              <span className="gradient-text">Possibilities </span>& Solutions
            </p>
            <p className="text-center text-white text-lg sm:text-xl font-medium tracking-wide mb-10 p-8 sm:p-0">
              Whether you're aiming to Streamline Operations, Enhance Customer
              Experiences, or Elevate your Sales Strategies, CallUp provide
              Cutting-edge Solutions that Harness the Power of Artificial
              Intelligence.
            </p>
          </div>
        </div>
        <SolutionsList />
      </div>
    </div>
  );
};

export default SolutionsSection;
