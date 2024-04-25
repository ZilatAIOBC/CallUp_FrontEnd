import useSound from "use-sound";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import voice5 from "../../utils/Sounds/voice-5.mp3";

const Voice5 = () => {
  const [play, { stop }] = useSound(voice5);
  return (
    <div className="flex  items-center">
      <FormControlLabel
        className="text-black w-36"
        value="9tksLKBDgTvZEmMTWzsF"
        control={<Radio />}
        label="Mason"
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

export default Voice5;
