import { useEffect } from "react";

import CtaSection from "../CtaSection/CtaSection";
import MainFooter from "../MainFooter/MainFooter";
import MainHeader from "../MainHeader/MainHeader";
import SolutionsPageSection from "../SolutionsPageSection/SolutionsPageSection";

const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MainHeader />
      <SolutionsPageSection />
      <CtaSection />
      <MainFooter />
    </div>
  );
};

export default Solutions;
