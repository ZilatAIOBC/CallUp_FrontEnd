import VoiceLottie from "../../utils/Lotties/voicerecording2.json";

import { Player } from "@lottiefiles/react-lottie-player";

const VoiceAnimation = () => {
  return (
    <div className="">
      <Player loop src={VoiceLottie} className=""></Player>
    </div>
  );
};

export default VoiceAnimation;
