// import { useState } from "react";

import useSound from "use-sound";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import maleVoiceFile from "../../utils/Sounds/male-voice.mp3";

const MaleVoiceItem = () => {
  const [play, { stop }] = useSound(maleVoiceFile);
  return (
    <div className="flex  items-center">
      <FormControlLabel
        className="text-black w-36"
        value="vK3QzyncmoX3zNal2Nji"
        control={<Radio />}
        label="Jordan"
      />
      <div className="">
        <button onMouseEnter={() => play()} onMouseLeave={() => stop()}>
          <span role="img" aria-label="trumpet">
            <PlayArrowIcon className="text-black" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default MaleVoiceItem;
