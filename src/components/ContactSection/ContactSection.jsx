import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import AddressImage from "../../utils/Images/icons/contact-1.svg";
import ContactImage from "../../utils/Images/icons/contact-2.svg";

import "./ContactSection.css";
import axios from "axios";

const ContactSection = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const data = {
    name: username,
    email,
    message,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendMessageHandler = async () => {
    axios
      .post("https://callup-backend-1.vercel.app/api/contacts/message", data)
      .then((res) =>
        toast.success("Email Sent!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      )
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center  pt-10">
      <div className="sm:w-5/6 grid grid-cols-1  lg:grid-cols-2 gap-4">
        <div className="flex flex-col items-center lg:items-start p-4">
          <p className="text-white text-4xl md:text-5xl font-black mb-5 tracking-wider ">
            Need a Demo or Have any Queries? Write to Us.
          </p>
          <div className="aai-contact-widget mb-4 w-full lg:w-96">
            <div className="aai-contact-widget-inner flex">
              <div>
                <img src={AddressImage} alt="Chart Image" />
              </div>
              <div>
                <h3 className="aai-contact-widget-title">Our Address</h3>
                <address className="aai-contact-address">
                  Northridge, CA 91324
                </address>
              </div>
            </div>
          </div>
          <div className="aai-contact-widget mb-4 w-full lg:w-96">
            <div className="aai-contact-widget-inner flex">
              <div>
                <img src={ContactImage} alt="Contact Image" />
              </div>
              <div>
                <h3 className="aai-contact-widget-title">Contact Info</h3>
                <p className="aai-contact-support text-base">
                  Open a chat or give us call at
                </p>
                <a href="tel:#" className="aai-contact-address">
                  +123 456 7890
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 lg:pt-20 p-2 flex flex-col justify-center">
          <div className="flex flex-col justify-around xl:flex-row">
            <div className="flex flex-col xl:items-center">
              <input
                {...register("name", { required: true })}
                type="text"
                aria-label="Full Name"
                placeholder="Full Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input input-bordered bg-slate-800 text-white xl:w-full xl:max-w-sm rounded-full p-7 m-2 xl:mx-4"
              />
              {errors.name && (
                <span className="text-red-500 font-semibold mx-2 xl:text-center">
                  Name is required
                </span>
              )}
            </div>
            <div className="flex flex-col xl:items-center">
              <input
                {...register("email", { required: true })}
                type="text"
                aria-label="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered bg-slate-800 text-white xl:w-full xl:max-w-sm rounded-full p-7 m-2  xl:mx-4"
              />
              {errors.email && (
                <span className="text-red-500 font-semibold mx-2 xl:text-center">
                  Email is required
                </span>
              )}
            </div>
          </div>
          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="textarea textarea-bordered bg-slate-800 text-white textarea-lg xl:w-full xl:max-w-full h-64 mt-10 sm:m-2"
          ></textarea>
          {errors.message && (
            <span className="text-red-500 font-semibold mx-2">
              Message is required
            </span>
          )}
          <button
            className="aai-gradient-outline-btn p-4 px-8 bg-white text-black my-4"
            onClick={handleSubmit(sendMessageHandler)}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
