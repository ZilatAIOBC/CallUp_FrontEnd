import { Link, useNavigate } from "react-router-dom";

import Logo from "../../utils/Images/logo.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "../../store/features/users/usersSlice";
const MainNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const goToDashboardHandler = () => {
    dispatch(fetchCurrentUser())
      .then(async (result) => {
        if (result.meta.requestStatus === "fulfilled") {
          if (result.payload.isSubscribed) {
            navigate("/agents");
          } else {
            toast.error("You are not subscribed to a plan.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar py-4    ">
      <div className="navbar-start ms-10 flex">
        <Link to="/">
          <img src={Logo} alt="Logo Image" className="min-w-20 max-w-20" />
        </Link>
      </div>
      <div className="navbar-center lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center">
          <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center mx-1 ">
            <Link
              to="/"
              className="lg:text-lg hover:text-amber-300 text-white p-4 hover:bg-transparent"
            >
              Home
            </Link>
          </li>
          <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 flex  items-center mx-1 ">
            <Link
              to="/aboutus"
              className="lg:text-lg hover:text-amber-300 text-white p-4 hover:bg-transparent"
            >
              About Us
            </Link>
          </li>
          <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center mx-1 ">
            <Link
              to="/features"
              className="lg:text-lg hover:text-amber-300 text-white p-4 hover:bg-transparent"
            >
              Features
            </Link>
          </li>
          <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center mx-1 ">
            <Link
              to="/solutions"
              className="lg:text-lg hover:text-amber-300 text-white p-4 hover:bg-transparent"
            >
              Solutions
            </Link>
          </li>
          <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center mx-1 ">
            <Link
              to="/pricing"
              className="lg:text-lg hover:text-amber-300 text-white p-4 hover:bg-transparent"
            >
              Pricing
            </Link>
          </li>
          <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 flex  items-center mx-1 ">
            <Link
              to="/contact"
              className="lg:text-lg hover:text-amber-300 text-white p-4 hover:bg-transparent "
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end me-10  xl:mx-10 ">
        {token && token !== null ? (
          <>
            <button
              // to="/agents"
              onClick={goToDashboardHandler}
              className="text-white text-lg hover:text-gray-300"
            >
              Go To Dashboard <ArrowForwardIcon />
            </button>
          </>
        ) : (
          <>
            {" "}
            <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center  mx-2 sm:mx-5 ">
              <Link
                to="/authentication/login"
                className="xl:text-lg text-white  underline underline-offset-8 font-semibold hover:text-yellow-300  "
              >
                Login
              </Link>
            </li>
            <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 lg:w-32 flex  items-center  mx-2 ">
              <Link
                to="/authentication/signup"
                className="xl:text-lg text-white font-semibold aai-gradient-outline-btn p-4 lg:px-8 rounded-full"
              >
                Signup
              </Link>
            </li>
          </>
        )}
      </div>
    </div>
  );
};

export default MainNavbar;
