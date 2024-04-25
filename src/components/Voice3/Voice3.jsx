import useSound from "use-sound";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import voice3 from "../../utils/Sounds/deep-and-powerful.mp3";

const Voice3 = () => {
  const [play, { stop }] = useSound(voice3);
  return (
    <div className="flex  items-center">
      <FormControlLabel
        className="text-black w-36"
        value="U8DcRzLsjb09knES204b"
        control={<Radio />}
        label="Alex"
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

export default Voice3;
