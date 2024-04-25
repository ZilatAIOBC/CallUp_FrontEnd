import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { makingNewAgent } from "../../store/features/agents/agentsSlice";

import MaleVoiceItem from "../MaleVoiceItem/MaleVoiceItem";
import FemaleVoiceItem from "../FemaleVoiceItem/FemaleVoiceItem";
import Voice3 from "../Voice3/Voice3";
import Voice4 from "../Voice4/Voice4";
import Voice5 from "../Voice5/Voice5";
import Voice6 from "../Voice6/Voice6";

const AgentModal2 = (props) => {
  // -------USE STATES--------

  const [voiceValue, setVoiceValue] = useState("U8DcRzLsjb09knES204b");
  // ------VARIABLES DECALARATIONS---------

  const dispatch = useDispatch();
  const agents = useSelector((state) => state.agents);

  // -----HANDLERS---------
  const FormSubmitHandler = () => {
    props.setShowModal2(false);
    dispatch(makingNewAgent({ ...agents.newAgent, voice_id: voiceValue }));
    document.getElementById("my_modal_5").showModal();
  };

  return (
    <>
      <dialog id="my_modal_4" className="modal ">
        <div className="modal-box bg-white">
          <div>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div>
              <h3 className="font-semibold text-xl text-black text-center  ">
                Select Voice
              </h3>
              <p className="text-gray-500 text-sm text-center mb-5">
                Hove on <PlayArrowIcon /> to play the sound
              </p>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="U8DcRzLsjb09knES204b"
                  name="radio-buttons-group"
                  value={voiceValue}
                  onChange={(e) => setVoiceValue(e.target.value)}
                >
                  <div className="flex flex-col">
                    <Voice3 />
                    <Voice4 />
                    <Voice5 />
                    <Voice6 />
                    <MaleVoiceItem />
                    <FemaleVoiceItem />
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
            <form
              onSubmit={FormSubmitHandler}
              className="flex justify-center mt-2 sm:mt-6 mb-2"
            >
              <button
                type="submit"
                className="btn px-16 py-0 bg-green-400 border-none text-black hover:bg-green-400 hover:text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AgentModal2;
