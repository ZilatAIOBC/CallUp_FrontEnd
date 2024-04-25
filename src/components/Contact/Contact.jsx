import { useEffect } from "react";

import ContactSection from "../ContactSection/ContactSection";
import CtaSection from "../CtaSection/CtaSection";
import MainFooter from "../MainFooter/MainFooter";
import MainHeader from "../MainHeader/MainHeader";
import QuestionSection from "../QuestionSection/QuestionSection";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MainHeader />
      <ContactSection />
      <QuestionSection />
      <CtaSection />
      <MainFooter />
    </div>
  );
};

export default Contact;
