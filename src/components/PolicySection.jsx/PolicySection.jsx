import TermsAndPolicyCard from "../TermsAndPolicyCard/TermsAndPolicyCard";
import "./PolicySection.css";

const PolicySection = () => {
  return (
    <div className="flex justify-center policy-page mb-20">
      <div className="sm:w-5/6">
        <p className="mt-5 mb-16 gradient-text text-center text-3xl md:text-4xl lg:text-5xl font-black">
          Privacy Policy
        </p>
        <TermsAndPolicyCard
          title="1. Introduction"
          text1="1.1 Welcome to CallUp.ai ('CallUp,' 'we,' 'us,' or 'our'). This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you use our website, services, or interact with our platform."
          text2="1.2 By accessing or using CallUp, you agree to the terms outlined in this Privacy Policy."
        />
        <TermsAndPolicyCard
          title="2. Information We Collect"
          text1="2.1 Personal Information: When you register for an account, we may collect personal information such as your name, email address, and contact details."
          text2="2.2 Usage Information: We collect information about your interactions with CallUp, including the pages you visit, the features you use, and the duration of your sessions."
          text3="2.3 Device Information: We may collect information about the device you use to access CallUp, including device type, operating system, and browser information."
        />
        <TermsAndPolicyCard
          title="3. How We Use Your Information"
          text1="3.1 Providing and Improving Services: We use the collected information to provide and enhance our services, personalize user experiences, and analyze usage patterns to improve our platform.
          "
          text2="3.2 Communication: We may use your contact information to communicate with you about our services, updates, and important announcements."
          text3="3.3 Security and Fraud Prevention: Your information may be used to ensure the security of our platform and to prevent and detect fraudulent activities."
        />
        <TermsAndPolicyCard
          title="4. Sharing of Information"
          text1="4.1 Third-Party Service Providers: We may share your information with third-party service providers who assist us in providing and improving our services."
          text2="4.2 Legal Compliance: We may disclose your information to comply with legal obligations, respond to legal processes, or protect our rights, privacy, safety, or property."
        />
        <TermsAndPolicyCard
          title="5. Data Security"
          text1="5.1 Security Measures: We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, and destruction."
          text2="5.2 Data Retention: We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law."
        />
        <TermsAndPolicyCard
          title="6. Your Choices"
          text1="6.1 Opt-Out: You can opt-out of receiving promotional emails by following the instructions provided in those emails."
          text2="6.2 Access and Update: You can access and update your account information by logging into your CallUp account."
        />
        <TermsAndPolicyCard
          title="7. Children's Privacy"
          text1="CallUp is not intended for individuals under the age of 13. We do not knowingly collect or maintain personal information from children under this age."
        />
        <TermsAndPolicyCard
          title="8. Changes to this Privacy Policy"
          text1="8.1 Updates: We may update this Privacy Policy periodically. We will notify you of any changes by posting the updated policy on our website."
          text2="
          8.2 Review: Please review this Privacy Policy regularly to stay informed about how we are protecting your information.
          
          "
        />
        <TermsAndPolicyCard
          title="9. Contact Us"
          text1="If you have questions, concerns, or requests regarding this Privacy Policy, please contact us."
        />
      </div>
    </div>
  );
};

export default PolicySection;
