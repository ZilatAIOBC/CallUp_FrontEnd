import TermsAndPolicyCard from "../TermsAndPolicyCard/TermsAndPolicyCard";
import "./TermsAndConditionsSection.css";
const TermsAndConditionsSection = () => {
  return (
    <div className="flex justify-center terms-page mb-20">
      <div className="sm:w-5/6">
        <p className="mt-5 mb-16 gradient-text text-center text-3xl md:text-4xl lg:text-5xl font-black">
          Terms & Conditions
        </p>
        <TermsAndPolicyCard
          title="1. Acceptance of Terms"
          text1="1.1 By accessing and using CallUp.ai (hereinafter referred to as 'CallUp' or 'the Service'), you agree to comply with and be bound by these Terms and Conditions."
          text2="
          1.2 If you do not agree with any part of these terms, you may not use CallUp."
        />
        <TermsAndPolicyCard
          title="2. Use of the Service"
          text1="2.1 CallUp is a platform designed to provide AI-driven sales call services. Users are solely responsible for their use of the service."
          text2="2.2 Users must provide accurate and up-to-date information during the registration process."
        />
        <TermsAndPolicyCard
          title="3. Privacy and Data Security"
          text1="3.1 CallUp takes user privacy seriously. The use of personal information is governed by our Privacy Policy, which users are encouraged to review."
          text2="3.2 Users are responsible for maintaining the confidentiality of their login credentials and are liable for all activities conducted under their account."
        />
        <TermsAndPolicyCard
          title="4. Service Availability"
          text1="4.1 CallUp strives to ensure the availability and reliability of its service. However, interruptions and downtime may occur due to maintenance or unforeseen circumstances.
"
          text2="4.2 CallUp reserves the right to modify, suspend, or discontinue the service with or without notice."
        />
        <TermsAndPolicyCard
          title="5. User Conduct"
          text1="5.1 Users agree not to engage in any conduct that may disrupt or interfere with the proper functioning of CallUp.
"
          text2="5.2 Users must not attempt to gain unauthorized access to any part of the service, including other users' accounts."
        />
        <TermsAndPolicyCard
          title="6. Intellectual Property"
          text1="6.1 All content and materials available on CallUp, including but not limited to text, graphics, logos, and software, are the property of CallUp and are protected by intellectual property laws."
          text2="6.2 Users may not reproduce, distribute, or use any content from CallUp without explicit permission."
        />
        <TermsAndPolicyCard
          title="7. Limitation of Liability"
          text1="7.1 CallUp shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use the service."
          text2="7.2 Users acknowledge that the use of AI technology carries inherent risks, and CallUp shall not be held responsible for any inaccuracies, errors, or consequences arising from the use of AI-generated content."
        />
        <TermsAndPolicyCard
          title="8. Termination"
          text1="CallUp reserves the right to terminate or suspend user accounts at its discretion for violations of these terms or for any other reason."
          text2=""
        />
        <TermsAndPolicyCard
          title="9. Changes to Terms and Conditions"
          text1="CallUp reserves the right to modify these terms at any time. Users will be notified of such changes, and continued use of the service constitutes acceptance of the updated terms."
          text2=""
        />
        <TermsAndPolicyCard
          title="10. Governing Law"
          text1="These terms and conditions are governed by and construed in accordance with the laws of United States of America."
          text2=""
        />
      </div>
    </div>
  );
};

export default TermsAndConditionsSection;
