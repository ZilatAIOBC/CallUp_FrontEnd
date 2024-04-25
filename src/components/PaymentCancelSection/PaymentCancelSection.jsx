import FailLottie from "../../utils/Lotties/fail.json";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Player } from "@lottiefiles/react-lottie-player";

const PaymentCancelSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-72 p-2">
      <Player autoplay loop src={FailLottie}></Player>
      <p className="text-lg text-black font-bold text-center">
        Unsuccessful Attempt To Subscribe{" "}
        <span>
          <Link
            to="/"
            className="text-red-500 ms-3 font-bold underline underline-offset-2 text-lg text-center "
          >
            Home <ArrowForwardIcon />
          </Link>
        </span>
      </p>
      <p></p>
    </div>
  );
};

export default PaymentCancelSection;
