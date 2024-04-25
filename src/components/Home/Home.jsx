import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import AchievementsSection from "../AchievementsSection/AchievementsSection";
import ChartSection from "../ChartSection/ChartSection";
import ClientsSection from "../ClientsSection/ClientsSection";
import CtaSection from "../CtaSection/CtaSection";
import HomeSection from "../HomeSection/HomeSection";
import MainFooter from "../MainFooter/MainFooter";
import MainHeader from "../MainHeader/MainHeader";
import PricingSection from "../PricingSection/PricingSection";
import QuestionSection from "../QuestionSection/QuestionSection";
import SolutionsSection from "../SolutionsSection/SolutionsSection";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    if (token) localStorage.setItem("token", token);
    navigate("/");
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="home-page ">
        <MainHeader />
        <HomeSection />
      </div>
      {/* <ChartSection /> */}
      <SolutionsSection />
      <AchievementsSection />
      <ClientsSection />
      <PricingSection />
      <QuestionSection />
      <CtaSection />
      <MainFooter />
    </div>
  );
};

export default Home;
