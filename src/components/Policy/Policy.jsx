import { useEffect } from "react";
import MainFooter from "../MainFooter/MainFooter";
import MainHeader from "../MainHeader/MainHeader";
import PolicySection from "../PolicySection.jsx/PolicySection";

const Policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MainHeader />
      <PolicySection />
      <MainFooter />
    </div>
  );
};

export default Policy;
