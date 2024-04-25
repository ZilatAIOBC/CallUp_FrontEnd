import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

import AuthImage from "../AuthImage/AuthImage";
import AuthNavbar from "../AuthNavbar/AuthNavbar";
import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";

const Authentication = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    token && token !== null ? navigate("/agents") : null;
    // const user = JSON.parse(queryParams.get("user"));

    if (token) localStorage.setItem("token", token);

    // Handle the token and user data as needed (e.g., store in local storage, state, or perform actions)

    // console.log("User:", user);
  }, [location.search]);

  // const token = localStorage.getItem("token");

  // useEffect(() => {
  //   token && token !== null ? navigate("/agents") : null;
  // }, [token]);

  return (
    <div>
      <AuthNavbar />
      <div className="xl:grid xl:grid-cols-3 xl:gap-2">
        <AuthImage />
        <AuthenticationForm />
      </div>
    </div>
  );
};

export default Authentication;
