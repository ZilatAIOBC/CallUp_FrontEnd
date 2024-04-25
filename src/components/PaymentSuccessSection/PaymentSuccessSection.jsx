// import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SuccessLottie from "../../utils/Lotties/success.json";

import { Player } from "@lottiefiles/react-lottie-player";

const PaymentSuccessSection = () => {
  //   const { name } = useParams();
  return (
    <div className="bg-white rounded-lg shadow-lg w-72 p-2">
      <Player autoplay loop src={SuccessLottie}></Player>
      <p className="text-lg text-black font-bold text-center">
        Congratulations on your subscription!
        <span>
          <Link
            to="/agents"
            className="text-emerald-500 ms-3 font-bold underline underline-offset-2 text-lg text-center "
          >
            Dashboard <ArrowForwardIcon />
          </Link>
        </span>
      </p>
      <p></p>
    </div>
  );
};

export default PaymentSuccessSection;
