import { useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { makingNewAgent } from "../../store/features/agents/agentsSlice";

const AgentModal1 = (props) => {
  // ----USE STATES--------

  const [agentName, setAgentName] = useState("");
  const [typeValue, setTypeValue] = useState("Sales");

  // ------VARIABLE DECALARATIONS----------

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const AgentData = {
    name: agentName,
    // type: typeValue,
  };

  // ----------HANDLERS--------

  const onSubmit = () => {
    if (!errors.agentName) {
      props.setShowModal1(false);
      dispatch(makingNewAgent(AgentData));
      document.getElementById("my_modal_4").showModal();
    }
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white">
          <div>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="">
              <h3 className="font-semibold text-xl text-black text-center  mb-5">
                Create A New Agent
              </h3>
              <div className="flex justify-center">
                <input
                  {...register("agentName", { required: true })}
                  type="text"
                  aria-label="Agent Name"
                  placeholder="Agent Name"
                  value={agentName}
                  onChange={(e) => setAgentName(e.target.value)}
                  className="input input-bordered input-primary w-full  bg-white text-black "
                />
              </div>

              {errors.agentName && (
                <p className="text-center text-red-500 font-semibold mt-1">
                  This field is required
                </p>
              )}
              <FormControl>
                <p className="text-black  font-medium my-1">
                  Choose your case:
                </p>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Sales"
                  name="radio-buttons-group"
                  value={typeValue}
                  onChange={(e) => setTypeValue(e.target.value)}
                >
                  <FormControlLabel
                    className="text-black"
                    value="Sales"
                    control={<Radio size="small" />}
                    label="Sales"
                  />
                  <FormControlLabel
                    className="text-black"
                    value="Customer Service"
                    control={<Radio size="small" />}
                    label="Customer Service"
                  />
                  <FormControlLabel
                    className="text-black"
                    value="Custom Case"
                    control={<Radio size="small" />}
                    label="Custom Case"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-center "
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
    </div>
  );
};

export default AgentModal1;
