import LogoImage from "../../utils/Images/logo.png";
import SolutionCard from "../SolutionCard/SolutionCard";

const SolutionsPageSection = () => {
  return (
    <div>
      <p className="gradient-text font-black text-center text-4xl md:text-5xl">
        Solutions
      </p>
      <div className="flex justify-around  flex-wrap overflow-auto gap-y-5  items-center py-5">
        <SolutionCard image={LogoImage} title="Banking & Finance" />
        <SolutionCard image={LogoImage} title="Banking & Finance" />
        <SolutionCard image={LogoImage} title="Banking & Finance" />
        <SolutionCard image={LogoImage} title="Banking & Finance" />
        <SolutionCard image={LogoImage} title="Banking & Finance" />
        <SolutionCard image={LogoImage} title="Banking & Finance" />
        <SolutionCard image={LogoImage} title="Banking & Finance" />
        <SolutionCard image={LogoImage} title="Banking & Finance" />
        <SolutionCard image={LogoImage} title="Banking & Finance" />
        <SolutionCard image={LogoImage} title="Banking & Finance" />
        <SolutionCard image={LogoImage} title="Banking & Finance" />
        <SolutionCard image={LogoImage} title="Banking & Finance" />
      </div>
    </div>
  );
};

export default SolutionsPageSection;
