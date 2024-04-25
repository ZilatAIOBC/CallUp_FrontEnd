import { useEffect } from "react";

import FeaturesSection from "../FeaturesSection/FeaturesSection";
import MainFooter from "../MainFooter/MainFooter";
import MainHeader from "../MainHeader/MainHeader";
import QuestionSection from "../QuestionSection/QuestionSection";

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MainHeader />
      <FeaturesSection />
      <QuestionSection />
      <MainFooter />
    </div>
  );
};

export default Features;
