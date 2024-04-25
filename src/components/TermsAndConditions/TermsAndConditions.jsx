import { useEffect } from "react";
import MainFooter from "../MainFooter/MainFooter";
import MainHeader from "../MainHeader/MainHeader";
import TermsAndConditionsSection from "../TermsAndConditionsSection.jsx/TermsAndConditionsSection";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MainHeader />
      <TermsAndConditionsSection />
      <MainFooter />
    </div>
  );
};

export default TermsAndConditions;
