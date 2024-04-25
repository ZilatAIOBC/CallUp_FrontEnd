import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import LogoImage from "../../utils/Images/logo.png";
import HeadsetImage from "../../utils/Images/icons/headset.svg";

import "./MainFooter.css";

const MainFooter = () => {
  return (
    <footer className=" footer-bg p-10 pb-0  ">
      <div className="flex justify-center">
        <div className="sm:w-5/6  bg-slate-400/15 rounded-lg p-2 sm:p-8 flex flex-col lg:flex-row items-center  justify-between">
          <div className="flex flex-col sm:flex-row items-center my-2">
            <img
              loading="lazy"
              src={HeadsetImage}
              alt="Footer Image"
              className="w-20"
            />
            <div className="flex flex-col justify-center mx-4 mt-2">
              <p className="text-gray-100 text-base sm:text-lg mx-1 mt-2">
                Have a question? Call us 24/7
              </p>
              <p className="text-white font-black text-xl sm:text-2xl mt-2">
                +123 456 7890
              </p>
            </div>
          </div>
          <div>
            <div className="join sm:w-96 py-2 my-2">
              <input
                aria-label="Email"
                className="input input-bordered rounded-l-full bg-slate-900 join-item text-white w-full"
                placeholder="Email"
              />
              <button className="btn join-item rounded-r-full bg-white text-black hover:bg-yellow-400">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-b-2 border-gray-800">
        <div className="flex justify-around flex-col lg:flex-row  pb-5 md:px-16 lg:px-0">
          <div>
            <Fade direction="left">
              <img
                loading="lazy"
                src={LogoImage}
                alt="Logo Image"
                className="w-24 my-5"
              />
              <p className="text-gray-100 text-lg lg:w-96">
                Empowering Conversations, Elevating Sales: CallUp.ai - Your
                AI-driven Solution for Personalized and Effective Sales Calls.
              </p>
            </Fade>
          </div>
          <div className="flex flex-col  md:flex-row justify-between sm:w-96 mt-10">
            <Fade direction="up">
              <div className="flex flex-col">
                <header className="text-xl  text-white font-bold  my-5">
                  Links
                </header>
                <Link
                  to="/"
                  className="link link-hover text-gray-100 hover:text-yellow-400 my-2"
                >
                  Home
                </Link>
                <Link
                  to="/aboutus"
                  className="link link-hover text-gray-100 hover:text-yellow-400 my-2"
                >
                  About Us
                </Link>
                <Link
                  to="/features"
                  className=" inline-block text-gray-100 hover:text-yellow-400 my-2"
                >
                  Features
                </Link>
                <Link
                  to="/solutions"
                  className=" inline-block text-gray-100 hover:text-yellow-400 my-2"
                >
                  Solutions
                </Link>
                <Link
                  to="/pricing"
                  className="link link-hover text-gray-100 hover:text-yellow-400 my-2"
                >
                  Pricing
                </Link>
                <Link
                  to="/contact"
                  className="link link-hover text-gray-100 hover:text-yellow-400 my-2"
                >
                  Contact Us
                </Link>
              </div>
            </Fade>
            <Fade direction="up">
              <div className="flex flex-col">
                <header className="text-xl text-white font-bold my-5">
                  Company
                </header>
                <Link
                  to="/terms-conditions"
                  className="link link-hover text-gray-100 hover:text-yellow-400
                my-2"
                >
                  Terms and Conditions
                </Link>
                <Link
                  to="/privacy-policy"
                  className="link link-hover text-gray-100 hover:text-yellow-400
                my-2"
                >
                  Privacy policy
                </Link>
                <Link
                  to="/aboutus"
                  className="link link-hover text-gray-100 hover:text-yellow-400
                my-2"
                >
                  FAQs
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-100 text-xl py-5">
        Copyright ©2023 CallUp.ai
      </p>
    </footer>
  );
};

export default MainFooter;
