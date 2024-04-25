/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { loadStripe } from "@stripe/stripe-js";
import "./PricingCard.css";

const PricingCard = (props) => {
  const email = localStorage.getItem("email");
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_live_51OcbJWBTcYrruW3uZkeClTSsjhTOfGUaT6GvROoY0V7iWIM2186BjAdIZIUlXx9h08yZZry9iZs5YaY929FyUyvd001Mc4vrha"
    );

    const body = {
      name: props.planName,
      price: props.price,
      email,
    };

    const headers = {
      "Content-Type": "application/json", // Fix the typo here
    };

    try {
      const response = await fetch(
        `https://callup-backend-1.vercel.app/api/payments/create-checkout-session`,
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const session = await response.json();

      // navigate(session);
      window.open(session);
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error);
      }
    } catch (error) {
      console.error("Error making payment:", error);
    }
  };

  const token = localStorage.getItem("token");

  return (
    <div className="my-4 mx-2 sm:mx-0  sm:w-4/5">
      <Fade direction="up">
        <div
          className="aai-price-table  "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex flex-col xl:flex-row  xl:items-center xl:justify-between ">
            <div className="lg:flex lg:justify-around lg:items-center lg:mt-3">
              <div className="mb-5 xl:mb-0 xl:mx-4">
                <div className="aai-price-pack">
                  <h3 className="aai-price-pack-name">{props.planName}</h3>
                  <p className="aai-price-pack-desc">{props.description}</p>
                </div>
              </div>
              <div className="xl:my-4">
                <ul className="aai-price-lists ">
                  <li className="aai-price-list-item flex items-center">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.4839 10.0673C15.907 9.64423 16.5929 9.64423 17.016 10.0673C17.4065 10.4578 17.4366 11.0723 17.1061 11.4973L17.016 11.5994L12.6827 15.9327C12.2921 16.3232 11.6776 16.3533 11.2527 16.0228L11.1506 15.9327L8.98393 13.766C8.56086 13.343 8.56086 12.657 8.98393 12.234C9.37445 11.8434 9.98895 11.8134 10.4139 12.1438L10.516 12.234L11.9166 13.6338L15.4839 10.0673Z"
                        fill="#DADADA"
                      />
                      <g opacity="0.5">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13 2.16666C7.01687 2.16666 2.16663 7.01691 2.16663 13C2.16663 18.9831 7.01687 23.8333 13 23.8333C18.983 23.8333 23.8333 18.9831 23.8333 13C23.8333 7.01691 18.983 2.16666 13 2.16666ZM13 4.33333C17.7864 4.33333 21.6666 8.21353 21.6666 13C21.6666 17.7865 17.7864 21.6667 13 21.6667C8.21349 21.6667 4.33329 17.7865 4.33329 13C4.33329 8.21353 8.21349 4.33333 13 4.33333Z"
                          fill="#DADADA"
                        />
                      </g>
                    </svg>
                    <span className="aai-price-list-item-text">
                      {props.firstPoint}
                    </span>
                  </li>
                  <li className="aai-price-list-item flex items-center">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.4839 10.0673C15.907 9.64423 16.5929 9.64423 17.016 10.0673C17.4065 10.4578 17.4366 11.0723 17.1061 11.4973L17.016 11.5994L12.6827 15.9327C12.2921 16.3232 11.6776 16.3533 11.2527 16.0228L11.1506 15.9327L8.98393 13.766C8.56086 13.343 8.56086 12.657 8.98393 12.234C9.37445 11.8434 9.98895 11.8134 10.4139 12.1438L10.516 12.234L11.9166 13.6338L15.4839 10.0673Z"
                        fill="#DADADA"
                      />
                      <g opacity="0.5">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13 2.16666C7.01687 2.16666 2.16663 7.01691 2.16663 13C2.16663 18.9831 7.01687 23.8333 13 23.8333C18.983 23.8333 23.8333 18.9831 23.8333 13C23.8333 7.01691 18.983 2.16666 13 2.16666ZM13 4.33333C17.7864 4.33333 21.6666 8.21353 21.6666 13C21.6666 17.7865 17.7864 21.6667 13 21.6667C8.21349 21.6667 4.33329 17.7865 4.33329 13C4.33329 8.21353 8.21349 4.33333 13 4.33333Z"
                          fill="#DADADA"
                        />
                      </g>
                    </svg>
                    <span className="aai-price-list-item-text">
                      {props.secondPoint}
                    </span>
                  </li>
                  <li className="aai-price-list-item flex items-center">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.4839 10.0673C15.907 9.64423 16.5929 9.64423 17.016 10.0673C17.4065 10.4578 17.4366 11.0723 17.1061 11.4973L17.016 11.5994L12.6827 15.9327C12.2921 16.3232 11.6776 16.3533 11.2527 16.0228L11.1506 15.9327L8.98393 13.766C8.56086 13.343 8.56086 12.657 8.98393 12.234C9.37445 11.8434 9.98895 11.8134 10.4139 12.1438L10.516 12.234L11.9166 13.6338L15.4839 10.0673Z"
                        fill="#DADADA"
                      />
                      <g opacity="0.5">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13 2.16667C7.01687 2.16667 2.16663 7.01692 2.16663 13C2.16663 18.9831 7.01687 23.8333 13 23.8333C18.983 23.8333 23.8333 18.9831 23.8333 13C23.8333 7.01692 18.983 2.16667 13 2.16667ZM13 4.33333C17.7864 4.33333 21.6666 8.21353 21.6666 13C21.6666 17.7865 17.7864 21.6667 13 21.6667C8.21349 21.6667 4.33329 17.7865 4.33329 13C4.33329 8.21353 8.21349 4.33333 13 4.33333Z"
                          fill="#DADADA"
                        />
                      </g>
                    </svg>
                    <span className="aai-price-list-item-text">
                      {props.thirdPoint}
                    </span>
                  </li>
                  <li className="aai-price-list-item flex items-center">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.4839 10.0673C15.907 9.64423 16.5929 9.64423 17.016 10.0673C17.4065 10.4578 17.4366 11.0723 17.1061 11.4973L17.016 11.5994L12.6827 15.9327C12.2921 16.3232 11.6776 16.3533 11.2527 16.0228L11.1506 15.9327L8.98393 13.766C8.56086 13.343 8.56086 12.657 8.98393 12.234C9.37445 11.8434 9.98895 11.8134 10.4139 12.1438L10.516 12.234L11.9166 13.6338L15.4839 10.0673Z"
                        fill="#DADADA"
                      />
                      <g opacity="0.5">
                        <path
                          d="M13 2.16666C7.01687 2.16666 2.16663 7.01691 2.16663 13C2.16663 18.9831 7.01687 23.8333 13 23.8333C18.983 23.8333 23.8333 18.9831 23.8333 13C23.8333 7.01691 18.983 2.16666 13 2.16666ZM13 4.33333C17.7864 4.33333 21.6666 8.21353 21.6666 13C21.6666 17.7865 17.7864 21.6667 13 21.6667C8.21349 21.6667 4.33329 17.7865 4.33329 13C4.33329 8.21353 8.21349 4.33333 13 4.33333Z"
                          fill="#DADADA"
                        />
                      </g>
                    </svg>
                    <span className="aai-price-list-item-text">
                      {props.fourthPoint}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:flex lg:justify-between lg:mx-14 lg:mt-5">
              <div className="mt-5 xl:mt-0 xl:mx-4">
                <div className="aai-price-value">
                  {props.price === "Custom" ? (
                    <h2 className="aai-price">{props.price}</h2>
                  ) : (
                    <h2 className="aai-price">
                      ${props.price}
                      <span style={{ fontSize: "14px", fontWeight: "lighter" }}>
                        /Month
                      </span>
                    </h2>
                  )}

                  <p className="text-slate-200 text-sm">{props.time}</p>
                </div>
              </div>
              <div className="my-4 xl:my-0 xl:mx-4">
                <div>
                  {/* {props.planName === "Trial Plan" ? (
                    <Link
                      to="/agents"
                      className="aai-gradient-outline-btn p-4 px-8"
                    >
                      Get Started
                    </Link>
                  ) : token && token !== null ? (
                    <button
                      onClick={makePayment}
                      className="aai-gradient-outline-btn p-4 px-8"
                    >
                      Get Started
                    </button>
                  ) : (
                    <Link
                      to="/contact"
                      className="aai-gradient-outline-btn p-4 px-8"
                    >
                      Get Started
                    </Link>
                  )} */}
                  {props.planName === "Agency Plan" ? (
                    <Link
                      to="/contact"
                      className="aai-gradient-outline-btn p-4 px-8"
                    >
                      Get Started
                    </Link>
                  ) : token && token !== null ? (
                    <button
                      onClick={makePayment}
                      className="aai-gradient-outline-btn p-4 px-8"
                    >
                      Get Started
                    </button>
                  ) : (
                    <Link
                      to="/authentication/signup"
                      className="aai-gradient-outline-btn p-4 px-8"
                    >
                      Get Started
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default PricingCard;
