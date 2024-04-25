import { Fade } from "react-awesome-reveal";

import PricingCard from "../PricingCard/PricingCard";

const PricingSection = () => {
  return (
    <div className="py-10  ">
      <Fade direction="left">
        <div className="flex justify-center mb-10">
          <div className="flex flex-col justify-center xl:flex-row  xl:justify-around xl:items-center  w-4/5">
            <p className="text-white text-3xl  md:text-4xl lg:text-5xl font-black xl:w-2/3 leading-tight  pe-4">
              <span className="gradient-text">Pricing Plans</span> That Scale
              With Your Business Needs
            </p>
            <p className="text-white text-lg lg:text-xl  my-4">
              Elevate your sales strategy with CallUp's flexible and affordable
              pricing plans designed to meet the unique needs of businesses of
              all sizes.
            </p>
          </div>
        </div>
      </Fade>
      <div className="flex flex-col justify-center items-center">
        <PricingCard
          planName="Trial Plan"
          description="Trial businesses with simple Sales needs"
          price="1"
          firstPoint="Premium Lead Qualification with Deep Customer Insights"
          secondPoint="Robust Predictive Analytics for Comprehensive Strategies"
          thirdPoint="Advanced Appointment Scheduling with AI-driven Optimizations"
          fourthPoint="Priority 24/7 Support with Dedicated Account Manager"
          time="Free 10 min"
          navigateTo="/authentication/login"
        />
        <PricingCard
          planName="Basic Plan"
          description="Small businesses with moderate Sales needs"
          price="25"
          firstPoint="Personalized Lead Qualification"
          secondPoint="Predictive Analytics for Basic Insights"
          thirdPoint="Standard Appointment Scheduling"
          fourthPoint="Email Support during Business Hours"
          time="50 Minutes, then 0.5$/min"
          navigateTo="/contact"
        />{" "}
        <PricingCard
          planName="Pro Plan"
          description="Growing Businesses with Expanding Sales Operations"
          price="450"
          firstPoint="Advanced Lead Qualification and Scoring"
          secondPoint="Enhanced Predictive Analytics for In-Depth Insights"
          thirdPoint="Priority Appointment Scheduling with Customization Options"
          fourthPoint="Email and Chat Support with Faster Response Times"
          time="2.500 Minutes, then 0.18$/min"
          navigateTo="/contact"
        />{" "}
        <PricingCard
          planName="Agency Plan"
          description="Larger Enterprises with Complex Sales Processes"
          price="Custom"
          firstPoint="Premium Lead Qualification with Deep Customer Insights"
          secondPoint="Robust Predictive Analytics for Comprehensive Strategies"
          thirdPoint="Advanced Appointment Scheduling with AI-driven Optimizations"
          fourthPoint="Priority 24/7 Support with Dedicated Account Manager"
          navigateTo="/contact"
        />
      </div>
    </div>
  );
};

export default PricingSection;
