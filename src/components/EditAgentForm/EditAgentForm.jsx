/* eslint-disable react/prop-types */
import { useState } from "react";

import { useForm } from "react-hook-form";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import EditIcon from "@mui/icons-material/Edit";

import { useDispatch } from "react-redux";
import {
  fetchAgents,
  updateAgents,
  makingSearchedAgents,
} from "../../store/features/agents/agentsSlice";
import MaleVoiceItem from "../MaleVoiceItem/MaleVoiceItem";
import FemaleVoiceItem from "../FemaleVoiceItem/FemaleVoiceItem";
import Voice3 from "../Voice3/Voice3";
import Voice4 from "../Voice4/Voice4";
import Voice5 from "../Voice5/Voice5";
import Voice6 from "../Voice6/Voice6";

const EditAgentForm = (props) => {
  // -------USE STATES--------

  const [caseValue, setCaseValue] = useState("Sales");
  const [voiceValue, setVoiceValue] = useState(props.voice_id);
  const [updatedAgentName, setUpdatedAgentName] = useState(props.name);
  const [updatedPrompt, setUpdatedPrompt] = useState(props.prompt);
  const [updatedRules, setUpdatedRules] = useState(props.sub_prompt);
  const [isOpen, setIsOpen] = useState(true);

  // -----------VARIABLES DECALARATIONS------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const data = {
    name: updatedAgentName,
    voice_id: voiceValue,
    prompt: updatedPrompt,
    sub_prompt: updatedRules,
  };
  // -------HANLDERS--------------
  const onSubmit = () => {
    if (!errors.updatedAgentName) {
      const id = props.id;
      dispatch(
        updateAgents({
          data,
          id,
          dispatch,
          fetchAgents,
          makingSearchedAgents,
          setIsOpen,
        })
      );
    }
  };

  return (
    <>
      <EditIcon
        onClick={() => {
          // setIsOpen(true);
          document.getElementById("edit_modal_3").showModal();
        }}
        className="cursor-pointer text-green-500"
        fontSize="small"
      />
      {isOpen ? (
        <dialog id="edit_modal_3" className="modal">
          <div className="modal-box bg-white">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg text-black text-center ">
              Update Agent
            </h3>
            <div className="mt-5">
              <p className="text-black text- font-semibold m-0.5">Agent Name</p>
              <input
                {...register("updatedAgent", { required: true })}
                type="text"
                aria-label="Agent Name"
                placeholder="Enter Agent Name"
                value={updatedAgentName}
                onChange={(e) => setUpdatedAgentName(e.target.value)}
                className="input input-bordered input-primary w-full  bg-white text-black"
              />
              {errors.updatedAgent && (
                <p className="text-center text-red-500 font-semibold mt-1">
                  This field is required
                </p>
              )}
            </div>
            <div className="mt-2">
              <div>
                <p className="text-black text- font-semibold m-0.5">Prompt</p>
                <textarea
                  {...register("updatedPrompt", { required: true })}
                  type="text"
                  placeholder="Add Information"
                  value={updatedPrompt}
                  onChange={(e) => setUpdatedPrompt(e.target.value)}
                  className="textarea textarea-primary bg-white text-black py-1 textarea-lg w-full h-24 sm:h-28"
                ></textarea>

                {errors.updatedPrompt && (
                  <p className="text-center text-red-500 font-semibold mt-1">
                    This field is required
                  </p>
                )}
              </div>
              <div>
                <p className="text-black text- font-semibold m-0.5">Rules</p>
                <textarea
                  {...register("updatedRules", { required: true })}
                  type="text"
                  placeholder="Add Information"
                  value={updatedRules}
                  onChange={(e) => setUpdatedRules(e.target.value)}
                  className="textarea textarea-primary bg-white text-black py-1 textarea-lg w-full h-24 sm:h-28"
                ></textarea>

                {errors.updatedRules && (
                  <p className="text-center text-red-500 font-semibold mt-1">
                    This field is required
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-around mt-2 m-1">
              <div>
                {" "}
                <FormControl>
                  <p className="text-black  font-medium my-1">
                    Choose your case:
                  </p>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Sales"
                    name="radio-buttons-group"
                    value={caseValue}
                    onChange={(e) => setCaseValue(e.target.value)}
                  >
                    <FormControlLabel
                      className="text-black"
                      value="Sales"
                      control={<Radio size="medium" />}
                      label="Sales"
                    />
                    <FormControlLabel
                      className="text-black"
                      value="Customer Service"
                      control={<Radio size="medium" />}
                      label="Customer Service"
                    />
                    <FormControlLabel
                      className="text-black"
                      value="Custom Case"
                      control={<Radio size="medium" />}
                      label="Custom Case"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="sm:border-r-4 sm:border-gray-400 sm:my-1"></div>
              <div className="mt-0.5 sm:h-44 overflow-auto">
                <div>
                  <h3 className="font-medium  text-black  my-1">
                    Select Voice:
                  </h3>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="vK3QzyncmoX3zNal2Nji"
                      name="radio-buttons-group"
                      value={voiceValue}
                      onChange={(e) => setVoiceValue(e.target.value)}
                    >
                      <Voice3 />
                      <Voice4 />
                      <Voice5 />
                      <Voice6 />
                      <MaleVoiceItem />
                      <FemaleVoiceItem />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-center mt-3 "
            >
              <button
                type="submit"
                className="btn px-16 py-0 bg-green-400 border-none text-black hover:bg-green-400 hover:text-white"
                // onClick={updateAgentHandler}
              >
                Update
              </button>
            </form>
          </div>
        </dialog>
      ) : null}
    </>
  );
};

export default EditAgentForm;
