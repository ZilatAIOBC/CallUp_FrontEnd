import { useEffect } from "react";

import CtaSection from "../CtaSection/CtaSection";
import MainFooter from "../MainFooter/MainFooter";
import MainHeader from "../MainHeader/MainHeader";
import PalnsTable from "../PlansTable/PalnsTable";
import PricingSection from "../PricingSection/PricingSection";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MainHeader />
      <PricingSection />
      <PalnsTable />
      <CtaSection />
      <MainFooter />
    </div>
  );
};

export default Pricing;
