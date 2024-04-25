import FeatureCardLeft from "../FeatureCardLeft/FeatureCardLeft";
import FeatureCardRight from "../FeatureCardRight/FeatureCardRight";

import Feature1Image from "../../utils/Images/features/feature-1.png";
import AnalyticsImage from "../../utils/Images/features/analytics.png";
import Feature3Image from "../../utils/Images/features/feature-3.png";
import Feature4Image from "../../utils/Images/features/feature-4.png";
import CrmImage from "../../utils/Images/features/crm.png";

const FeaturesSection = () => {
  return (
    <>
      <FeatureCardRight
        image={Feature1Image}
        title="Personalized Lead Qualification"
        description="Tailor Your Lead Qualification Process With Callup's Advanced AI Algorithms. Understand Your Prospects On A Deeper Level, Allowing Your Sales Team To Focus On The Leads That Matter Most."
      />
      <FeatureCardLeft
        image={AnalyticsImage}
        title="Predictive Analytics for Informed Strategies"
        description="Leverage The Power Of Predictive Analytics To Make Data-driven Decisions. Gain Insights Into Customer Behavior, Preferences, And Potential Future Actions, Empowering Your Sales Strategies For Optimal Outcomes."
      />
      <FeatureCardRight
        image={Feature3Image}
        title="AI-Driven Appointment Scheduling"
        description="Streamline Your Scheduling Process With Intelligent Appointment Setting. Callup Ensures Appointments Are Made At The Right Time, Optimizing The Customer Experience And Increasing Conversion Rates."
      />
      <FeatureCardLeft
        image={Feature4Image}
        title="Real-Time Speech Analytics"
        description="Enhance Customer Interactions With Real-time Speech Analytics. Understand Customer Sentiments During Calls, Allowing Your Team To Adapt And Respond Effectively, Leading To Improved Satisfaction And Higher Success Rates."
      />
      <FeatureCardRight
        image={CrmImage}
        title="Customizable CRM Integrations"
        description="Integrate Seamlessly With Your Existing Crm System. Callup Is Designed To Work With A Variety Of Crm Platforms, Ensuring A Smooth Integration Process That Aligns With Your Established Workflows.          "
      />
    </>
  );
};

export default FeaturesSection;
