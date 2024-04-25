import { useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";

import CampaignModal1 from "../CampaignModal1/CampaignModal1";

const CampaignModalController = (props) => {
  // ----USE STATES----
  const [showModal1, setShowModal1] = useState(true);

  // -----USE EFFECTS-----
  useEffect(() => {
    setShowModal1(true);
  }, [showModal1]);

  return (
    <>
      {props.from === "Section" ? (
        <button
          className="btn sm:btn-lg bg-violet-400 text-white hover:text-black my-10 rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-violet-400"
          onClick={() =>
            document.getElementById("campaign_modal_3").showModal()
          }
        >
          Launch a Campaign
        </button>
      ) : (
        <button
          className="btn btn-sm md:btn-md p-1 bg-violet-400 text-black  hover:text-white hover:bg-violet-400 mx-1 h-10"
          onClick={() =>
            document.getElementById("campaign_modal_3").showModal()
          }
        >
          <AddIcon className="" fontSize="small" />
          New Campaign
        </button>
      )}

      {showModal1 ? <CampaignModal1 setShowModal1={setShowModal1} /> : null}
    </>
  );
};

export default CampaignModalController;
