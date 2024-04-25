import { useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import {
  createAgents,
  makingNewAgent,
  makingSearchedAgents,
  fetchAgents,
} from "../../store/features/agents/agentsSlice";

const AgentModal3 = (props) => {
  // ------USE STATES---------
  const [prompts, setPrompts] = useState("");
  const [rules, setRules] = useState("");

  // -------VARIABLE DECALARATIONS---------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const agents = useSelector((state) => state.agents);

  const agentData = {
    ...agents.newAgent,
    prompt: prompts,
    sub_prompt: rules,
  };

  // ------HANDLERS------
  const onSubmit = () => {
    if (!errors.information) {
      const setShowModal3 = props.setShowModal3;
      dispatch(
        createAgents({
          agentData,
          setShowModal3,
          dispatch,
          fetchAgents,
          makingSearchedAgents,
        })
      );
      // props.setShowModal3(false);
    }
  };
  return (
    <div>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box bg-white">
          <div>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="mb-2">
              <h3 className="font-semibold text-xl sm:text-2xl text-black text-center  mb-5">
                Prompts
              </h3>
              <div className="flex justify-center">
                <textarea
                  {...register("prompts", { required: true })}
                  type="text"
                  placeholder="Add Information"
                  value={prompts}
                  onChange={(e) => setPrompts(e.target.value)}
                  className="textarea textarea-primary bg-white text-black py-2 textarea-lg w-full h-36 "
                ></textarea>
              </div>

              {errors.prompts && (
                <p className="text-center text-red-500 font-semibold mt-1">
                  This field is required
                </p>
              )}
            </div>
            <div className="">
              <h3 className="font-semibold text-xl sm:text-2xl text-black text-center  mb-5">
                Rules
              </h3>
              <div className="flex justify-center">
                <textarea
                  {...register("rules", { required: true })}
                  type="text"
                  placeholder="Add Information"
                  value={rules}
                  onChange={(e) => setRules(e.target.value)}
                  className="textarea textarea-primary bg-white text-black py-2 textarea-lg w-full h-36"
                ></textarea>
              </div>

              {errors.rules && (
                <p className="text-center text-red-500 font-semibold mt-1">
                  This field is required
                </p>
              )}
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-center "
            >
              <button
                type="submit"
                className="btn px-16 py-0 mt-5 bg-green-400 border-none text-black hover:bg-green-400 hover:text-white"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AgentModal3;
