import ChartImage from "../../utils/Images/chart.png";

const ChartSection = () => {
  return (
    <div className=" flex justify-center pb-10">
      <img loading="lazy" src={ChartImage} alt="Chart Image" />
    </div>
  );
};

export default ChartSection;
