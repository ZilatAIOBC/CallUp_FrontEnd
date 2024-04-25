/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CancelIcon from "@mui/icons-material/Cancel";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import {
  createCampaigns,
  deleteCampaigns,
  fetchCampaigns,
  launchCampaigns,
  makingSearchedCampaigns,
  stopCampaign,
} from "../../store/features/campaigns/campaignsSlice";
import { useState } from "react";

const CampaignsTableItem = (props) => {
  const [showModal1, setShowModal1] = useState(false); // IGNORE THIS(ONLY A PLACEHOLDER)
  // ------VARIABLES DECALARATIONS---------

  const dispatch = useDispatch();

  const data = {
    campaign_name: `${props.name}(COPY)`,
    agent_id: props.agent_id,
    agent_name: props.agent_name,
    list_name: props.list,
    max_budget: props.maxBudget,
  };

  // -------HANDLERS----------
  const deleteCampaignHandler = () => {
    const id = props.id;
    dispatch(
      deleteCampaigns({
        id,
        dispatch,
        fetchCampaigns,
        makingSearchedCampaigns,
        toast,
      })
    );
  };

  const duplicateCampaignHandler = () => {
    dispatch(
      createCampaigns({
        data,
        setShowModal1,
        dispatch,
        fetchCampaigns,
        launchCampaigns,
        makingSearchedCampaigns,
      })
    );
  };

  const stopCampaignHandler = () => {
    const data = {
      auth_key: "@aiobc.io",
      phone_number: props.phone_number,
      campaign_id: props.id,
    };

    dispatch(stopCampaign(data))
      .then((result) => {
        if (result.meta.requestStatus === "fulfilled") {
          dispatch(fetchCampaigns());
          toast.success("Campaign Cancelled!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-full py-1 md:w-5/6   sm:p-2  flex justify-around items-center text-white  sm:font-medium">
      <p className=" text-xs lg:text-sm  w-28 sm:w-36 text-center  ">
        {props.name}
      </p>
      <p className=" text-xs lg:text-sm  w-28 sm:w-36 text-center ">
        {props.type}
      </p>
      <p className=" text-xs lg:text-sm  w-28 sm:w-36   text-center">
        ${props.maxBudget}
      </p>
      <p className=" text-xs lg:text-sm  w-28 sm:w-36  text-center">
        {props.list}
      </p>
      <p className=" text-xs lg:text-sm  w-28 sm:w-36  text-center">
        {props.agent_name}
      </p>
      {/* <p className=" text-xs lg:text-sm  w-28 sm:w-36  text-center"></p> */}
      <div className="w-28 sm:w-36 flex justify-center ">
        {props.type === "Inbound" ? (
          props.isCancel ? (
            <>
              <Tooltip title="Cancelled" arrow>
                <DoNotDisturbAltIcon
                  className=" cursor-pointer text-red-500"
                  fontSize="small"
                />
              </Tooltip>
              <DeleteIcon
                className=" cursor-pointer text-red-600 "
                fontSize="small"
                onClick={deleteCampaignHandler}
              />
            </>
          ) : (
            <CancelIcon
              className=" cursor-pointer text-red-500"
              fontSize="small"
              onClick={stopCampaignHandler}
            />
          )
        ) : (
          <>
            {" "}
            <ContentCopyIcon
              className=" cursor-pointer"
              fontSize="small"
              onClick={duplicateCampaignHandler}
            />
            <DeleteIcon
              className=" cursor-pointer text-red-600 "
              fontSize="small"
              onClick={deleteCampaignHandler}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CampaignsTableItem;
