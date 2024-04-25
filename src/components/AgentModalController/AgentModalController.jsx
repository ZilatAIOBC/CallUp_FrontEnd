import { useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";

import AgentModal1 from "../AgentModal1/AgentModal1";
import AgentModal2 from "../AgentModal2/AgentModal2";
import AgentModal3 from "../AgentModal3/AgentModal3";

const AgentModalController = () => {
  // -----USE STATES---------
  const [showModal1, setShowModal1] = useState(true);
  const [showModal2, setShowModal2] = useState(true);
  const [showModal3, setShowModal3] = useState(true);

  // -----USE EFFECCTS----------
  useEffect(() => {
    setShowModal1(true);
  }, [showModal1]);
  useEffect(() => {
    setShowModal2(true);
  }, [showModal2]);
  useEffect(() => {
    setShowModal3(true);
  }, [showModal3]);

  return (
    <>
      <button
        className="btn btn-sm md:btn-md p-1 bg-violet-400 text-black  hover:text-white hover:bg-violet-400 mx-1 h-10"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <AddIcon className="" fontSize="small" />
        New Agent
      </button>

      {showModal1 ? <AgentModal1 setShowModal1={setShowModal1} /> : null}
      {showModal2 ? <AgentModal2 setShowModal2={setShowModal2} /> : null}
      {showModal3 ? <AgentModal3 setShowModal3={setShowModal3} /> : null}
    </>
  );
};

export default AgentModalController;
