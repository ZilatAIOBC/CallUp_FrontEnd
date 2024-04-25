import useSound from "use-sound";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import voice4 from "../../utils/Sounds/intense-deep-elder.mp3";

const Voice4 = () => {
  const [play, { stop }] = useSound(voice4);
  return (
    <div className="flex  items-center">
      <FormControlLabel
        className="text-black w-36"
        value="QhbTRab6QPbAB4duLZbp"
        control={<Radio />}
        label="Harper"
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

export default Voice4;
