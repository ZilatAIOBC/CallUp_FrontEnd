import useSound from "use-sound";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import voice6 from "../../utils/Sounds/voice-6.mp3";

const Voice6 = () => {
  const [play, { stop }] = useSound(voice6);
  return (
    <div className="flex  items-center">
      <FormControlLabel
        className="text-black w-36"
        value="J5ZBnxBy7q3Qgj3FgOOm"
        control={<Radio />}
        label="Xavier"
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

export default Voice6;
