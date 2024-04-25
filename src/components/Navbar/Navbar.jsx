import { Link } from "react-router-dom";

import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";

import "./Navbar.css";

import Logo from "../../utils/Images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="navbar-start lg:ms-10">
        <p className=" gradient-text text-lg font-bold">Call Up!</p>

        <Link to="/">
          <img src={Logo} alt="Logo Image" className="w-16" />
        </Link>
      </div>
      <div className="navbar-center lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center">
          <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 lg:w-24 flex  items-center mx-1 ">
            <Link
              to="/agents"
              className="lg:text-lg text-white font-semibold aai-gradient-outline-btn p-4 rounded-full"
            >
              Agents
            </Link>
          </li>
          <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 lg:w-32 flex  items-center  mx-2 ">
            <Link
              to="/contacts"
              //   activeClassName="active"
              className="lg:text-lg text-white font-semibold aai-gradient-outline-btn p-4 rounded-full"
            >
              Contacts
            </Link>
          </li>
          <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 lg:w-32 flex  items-center  mx-2">
            <Link
              to="/campaigns"
              //   activeClassName="active"
              className="lg:text-lg text-white font-semibold aai-gradient-outline-btn p-4 rounded-full"
            >
              Campaigns
            </Link>
          </li>
          <li
            id="navbar"
            className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 lg:w-32 flex  items-center  mx-2"
          >
            <Link
              to="/recordings"
              //   activeClassName="active"
              className="lg:text-lg text-white font-semibold aai-gradient-outline-btn p-4 rounded-full "
            >
              {" "}
              Recordings
            </Link>
          </li>
          <li
            id="navbar"
            className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 lg:w-32 flex  items-center  mx-1"
          >
            <Link
              to="/settings"
              //   activeClassName="active"
              className="lg:text-lg text-white font-semibold aai-gradient-outline-btn p-4 rounded-full "
            >
              {" "}
              Settings
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end lg:me-10 ">
        <p className="border-r-4 border-gray-400 px-2 ">
          <MessageIcon className="text-purple-400 mx-0.5 " />
          Ask Bot?
        </p>
        <p className="mx-2">
          <NotificationsIcon className="text-purple-400" />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
