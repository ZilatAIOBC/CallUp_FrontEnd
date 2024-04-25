import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import GoogleIcon from "@mui/icons-material/Google";

import {
  auth,
  resetError,
} from "../../store/features/authentication/authenticationSlice";

import "./AuthenticationForm.css";
// import GoogleLoginButton from "../GoogleLoginButton/GoogleLoginButton";

const AuthenticationForm = () => {
  const { method } = useParams();
  // --------USE STATES-----------
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isSignUp, setIsSignUp] = useState(method === "signup" ? true : false);

  // ------VARIABLES DECALARATIONS---------
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authentication = useSelector((state) => state.authentication);

  const signUpData = {
    username,
    email,
    password,
    passwordConfirm,
  };
  const logInData = { email, password };

  const errorArray = authentication.error?.split(". ");

  // --------USE EFFECTS--------------

  useEffect(() => {
    setIsSignUp(method === "signup" ? true : false);
  }, [method]);

  // -------HANDLERS--------------

  const SubmitFormHandler = (e) => {
    e.preventDefault();
    dispatch(auth({ isSignUp, signUpData, logInData }))
      .then((result) => {
        // Check for successful authentication
        if (result.payload && result.payload.token) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        // Handle authentication failure if needed
      });
  };

  const google = () => {
    window.open("https://callup-backend-1.vercel.app/api/users/google");
  };
  return (
    <div className="flex justify-center xl:col-span-2">
      <div className="flex justify-center items-center form-wrapper  p-2 py-4 sm:p-8 w-screen sm:w-4/5">
        <form
          className="form-container  bg-slate-900 sm:py-8 sm:px-12 w-full"
          // onSubmit={SubmitFormHandler}
        >
          <p className="text-center text-white text-2xl sm:text-3xl font-bold">
            {isSignUp ? "Sign Up" : "Sign In"}
          </p>
          <div className="flex justify-center my-5">
            {/* <GoogleLoginButton /> */}
            <button
              onClick={google}
              type="button"
              className="outline outline-2 outline-offset-2 sm:text-lg hover:outline-yellow-400 btn-block font-semibold rounded-full text-gray-400 hover:text-white py-3 px-8 cursor-pointer"
            >
              <GoogleIcon className="text-violet-500" /> Continue with Google
            </button>
          </div>
          <p className="text-center text-gray-400 border-t border-t-gray-500 border-b border-b-gray-500 my-10 p-3 text-lg">
            Or with Email
          </p>
          <div className="flex flex-col ">
            {isSignUp ? (
              <>
                <input
                  type="text"
                  aria-label="Username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input input-bordered w-full sm:py-7 sm:text-lg  rounded-full bg-transparent border-gray-600 hover:border-yellow-400 my-2"
                />{" "}
                {authentication.error ? (
                  <p className="fs-6 m-0 text-red-500 fw-semibold">
                    {errorArray.filter((error) => error.includes("username"))}
                  </p>
                ) : null}
              </>
            ) : null}
            <input
              type="email"
              placeholder="Email"
              aria-label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full sm:py-7 sm:text-lg  rounded-full bg-transparent  border-gray-600  hover:border-yellow-400 my-2"
            />
            {authentication.error ? (
              isSignUp ? (
                <p className="fs-6 m-0 text-red-500 fw-semibold">
                  {errorArray.filter((error) => error.includes("email"))}
                </p>
              ) : null
            ) : null}
            <input
              type="text"
              placeholder="Password"
              aria-label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full sm:py-7 sm:text-lg   rounded-full bg-transparent  border-gray-600  hover:border-yellow-400 my-2"
            />
            {!isSignUp ? (
              <Link
                to="/forgotPassword"
                className="mx-2 text-yellow-400 cursor-pointer hover:underline"
                onClick={() => {
                  dispatch(resetError());
                }}
              >
                Forgot your Password?
              </Link>
            ) : null}
            {authentication.error ? (
              isSignUp ? (
                <p className="fs-6 m-0 text-red-500 fw-semibold">
                  {errorArray.filter(
                    (error) =>
                      error.includes("provide") && error.includes("password")
                  )}
                  {errorArray.filter((error) => error.includes("8"))}
                </p>
              ) : (
                <p className="fs-6 m-0 text-center text-red-500 fw-semibold">
                  {errorArray.filter(
                    (error) =>
                      error.includes("email") || error.includes("Kindly")
                  )}
                </p>
              )
            ) : null}
            {isSignUp ? (
              <>
                <input
                  type="text"
                  placeholder="Password Confirm"
                  aria-label="Password Confirm"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  className="input input-bordered w-full sm:py-7 sm:text-lg  rounded-full bg-transparent  border-gray-600  hover:border-yellow-400 my-2"
                />
                {authentication.error ? (
                  <>
                    <p className="fs-6 m-0 text-red-500 fw-semibold">
                      {errorArray.filter((error) => error.includes("confirm"))}
                      {errorArray.filter((error) => error.includes("match"))}
                    </p>
                    <p className="fs-6 m-0 text-center text-red-500 fw-semibold">
                      {errorArray.filter((error) =>
                        error.includes("Email/Password")
                      )}
                    </p>
                  </>
                ) : null}
              </>
            ) : null}
          </div>

          {isSignUp ? (
            <div className=" flex justify-center items-center my-2">
              <div className="form-control mx-1">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    aria-label="Checkbox"
                    checked="checked"
                    className="checkbox checkbox-warning "
                  />
                </label>
              </div>
              <p className="text-sm text-gray-500 font-semibold">
                By creating an account, you agreeing to our Privacy Policy, and
                Electronics Communication Policy.
              </p>
            </div>
          ) : null}

          <button
            className="py-3 font-semibold btn-block rounded-full bg-white text-black sm:text-lg my-2 mt-5
           aai-gradient-outline-btn"
            onClick={SubmitFormHandler}
            type="onSubmit"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <p className="text-center mt-1">
            {isSignUp ? " Already have an account?" : "Don't have an account?"}
            <strong
              className="underline underline-offset-2 hover:text-yellow-400 cursor-pointer mx-1"
              onClick={() => {
                setIsSignUp(!isSignUp);
                dispatch(resetError());
                setUsername("");
                setEmail("");
                setPassword("");
                setPasswordConfirm("");
              }}
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </strong>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthenticationForm;
