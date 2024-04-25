import useSound from "use-sound";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import femaleVoiceFile from "../../utils/Sounds/female-voice.mp3";

const FemaleVoiceItem = () => {
  const [play, { stop }] = useSound(femaleVoiceFile);
  return (
    <div className="flex items-center">
      <FormControlLabel
        className="text-black w-36"
        value="gUzcionDlcxCd0Zlkz3f"
        control={<Radio />}
        label="Isabella"
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

export default FemaleVoiceItem;
