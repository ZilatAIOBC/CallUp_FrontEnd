import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import DeleteIcon from "@mui/icons-material/Delete";
import ArticleIcon from "@mui/icons-material/Article";

import EditAgentForm from "../EditAgentForm/EditAgentForm";
import ProfileImage from "../../utils/Images/profile2.jpg";
import {
  createAgents,
  deleteAgents,
  fetchAgents,
  makingSearchedAgents,
} from "../../store/features/agents/agentsSlice";
import { useState } from "react";

const TableItem = (props) => {
  const [showModal3, setShowModal3] = useState(false); // IGNORE THIS(ONLY A PLACEHOLDER)
  // ------VARIABLES DECALARATIONS---------

  const dispatch = useDispatch();

  const agentData = {
    name: `${props.name}(COPY)`,
    prompt: props.prompt,
    sub_prompt: props.sub_prompt,
  };

  // -------HANDLERS----------

  const deleteAgentHandler = () => {
    const id = props.id;
    dispatch(
      deleteAgents({ id, dispatch, fetchAgents, makingSearchedAgents, toast })
    );
  };

  const duplicateAgentHandler = () => {
    dispatch(
      createAgents({
        agentData,
        setShowModal3,
        dispatch,
        fetchAgents,
        makingSearchedAgents,
      })
    );
  };
  return (
    <div className="w-full sm:w-5/6   p-1 sm:p-2  flex justify-around items-center text-white  sm:font-medium">
      <div className="flex items-center  w-36 sm:w-40">
        <img
          loading="lazy"
          src={ProfileImage}
          alt="Profile Image"
          className="w-8 sm:w-12 rounded-lg mx-0.5"
        />
        <p className="text-xs sm:text-md  sm:ms-1">{props.name}</p>
      </div>
      <p className="text-xs text-center sm:text-md  ms-0.5 sm:ms-1 w-36 sm:w-40">
        Sales
      </p>
      <p className="text-xs text-center sm:text-md  ms-0.5 sm:ms-1 w-36 sm:w-40">
        About 2 hours ago
      </p>
      <div className=" flex flex-col  justify-center items-center sm:flex-row w-36 sm:w-40">
        <div>
          <ArticleIcon
            className="cursor-pointer"
            fontSize="small"
            onClick={duplicateAgentHandler}
          />

          <EditAgentForm
            id={props.id}
            name={props.name}
            prompt={props.prompt}
            sub_prompt={props.sub_prompt}
            voice_id={props.voice_id}
          />
        </div>
        <div className="flex justify-center items-center">
          <DeleteIcon
            className="cursor-pointer text-red-600 "
            fontSize="small"
            onClick={deleteAgentHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default TableItem;
