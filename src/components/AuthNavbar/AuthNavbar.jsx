import { Link } from "react-router-dom";

import Logo from "../../utils/Images/logo.png";

const AuthNavbar = () => {
  return (
    <div className="p-2 flex justify-between sm:px-20 pt-10">
      <Link to="/">
        <img src={Logo} alt="Logo Image" className="w-16 sm:w-20 " />
      </Link>
      <div className="flex ">
        <Link
          to="/authentication/login"
          className="text-white underline text-lg sm:text-xl underline-offset-8 hover:text-yellow-300 mx-2 sm:mx-5 my-4"
        >
          Login
        </Link>
        <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 lg:w-32 flex  items-center  mx-2 ">
          <Link
            to="/authentication/signup"
            className="lg:text-lg text-white font-semibold aai-gradient-outline-btn p-4 sm:px-8 rounded-full"
          >
            Signup
          </Link>
        </li>
      </div>
    </div>
  );
};

export default AuthNavbar;
