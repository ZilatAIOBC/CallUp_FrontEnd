import { useEffect } from "react";

import AboutQuestionSection from "../AboutQuestionSection/AboutQuestionSection";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import CtaSection from "../CtaSection/CtaSection";
import MainFooter from "../MainFooter/MainFooter";
import MainHeader from "../MainHeader/MainHeader";
import UniqueSection from "../UniqueSection/UniqueSection";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MainHeader />
      <AboutUsSection />
      <UniqueSection />
      <AboutQuestionSection />
      <CtaSection />
      <MainFooter />
    </div>
  );
};

export default AboutUs;
