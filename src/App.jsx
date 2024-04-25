import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AgentsPage from "./containers/AgentsPage/AgentsPage";
import ContactsPage from "./containers/ContactsPage/ContactsPage";
import CampaignsPage from "./containers/CampaignsPage/CampaignsPage";
import RecordingsPage from "./containers/RecordingsPage/RecordingsPage";
import AuthenticationPage from "./containers/AuthenticationPage/AuthenticationPage";
import SettingsPage from "./containers/SettingsPage/SettingsPage";

import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import ForgotPasswordPage from "./containers/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "./containers/ResetPasswordPage/ResetPasswordPage";
import PrivateRoutes from "./utils/Functions/PrivateRoutes";
import HomePage from "./containers/HomePage/HomePage";
import AboutUsPage from "./containers/AboutUsPage/AboutUsPage";
import SolutionsPage from "./containers/SolutionsPage/SolutionsPage";
import PricingPage from "./containers/PricingPage/PricingPage";
import FeaturesPage from "./containers/FeaturesPage/FeaturesPage";
import ContactPage from "./containers/ContactPage/ContactPage";
import TermsAndConditionPage from "./containers/TermsAndConditionPage/TermsAndConditionPage";
import PolicyPage from "./containers/PolicyPage/PolicyPage";
import PaymentSuccessPage from "./containers/PaymentSuccessPage/PaymentSuccessPage";
import PaymentCancelPage from "./containers/PaymentCancelPage/PaymentCancelPage";

function App() {
  return (
    <div
      className="bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-950 min-h-screen"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/recordings" element={<RecordingsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/paymentsuccess" element={<PaymentSuccessPage />} />
          <Route path="/paymentcancel" element={<PaymentCancelPage />} />
        </Route>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/pricing" element={<PricingPage />} />{" "}
        <Route path="/features" element={<FeaturesPage />} />{" "}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms-conditions" element={<TermsAndConditionPage />} />
        <Route path="/privacy-policy" element={<PolicyPage />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route
          path="/resetPassword/:resetToken"
          element={<ResetPasswordPage />}
        />
        <Route
          path="/authentication/:method"
          element={<AuthenticationPage />}
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
