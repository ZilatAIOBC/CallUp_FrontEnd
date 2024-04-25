import { useState } from "react";
import { useForm } from "react-hook-form";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchItem from "../SearchItem/SearchItem";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  buyNumber,
  createCampaigns,
  fetchCampaigns,
  fetchUserNumbers,
  launchCampaigns,
  launchInboundCampaigns,
  makingSearchedCampaigns,
} from "../../store/features/campaigns/campaignsSlice";

const CampaignModal1 = (props) => {
  // ------USE STATES-----
  const [campaignName, setCampaignName] = useState("");
  const [agentName, setAgentName] = useState("");
  const [agentId, setAgentId] = useState("");
  const [listName, setListName] = useState("");
  const [number, setNumber] = useState("");
  const [dailyBudget, setDailyBudget] = useState("");
  const [value, setValue] = useState("Inbound");
  const [showNumbers, setShowNumbers] = useState(false);

  // -----VARIABLE DECALARATIONS-------

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const agents = useSelector((state) => state.agents);

  const lists = useSelector((state) => state.lists);

  const campaigns = useSelector((state) => state.campaigns);

  const searchedAgents = agents.agents.filter((agent) => {
    return agent?.name.toLowerCase().includes(agentName.toLowerCase());
  });

  const searchedLists = lists.lists.filter((list) => {
    return list?.name.toLowerCase().includes(listName.toLowerCase());
  });

  // const data = {
  //   campaignName,
  //   value,
  //   agentName,
  //   listName,
  //   dailyBudget,
  // };

  let data;

  if (value === "Inbound") {
    data = {
      campaign_name: campaignName,
      campaign_type: value,
      agent_id: agentId,
      agent_name: agentName,
      max_budget: dailyBudget,
      inbound_phone_number: number,
    };
  } else if (value === "Outbound") {
    data = {
      campaign_name: campaignName,
      campaign_type: value,
      agent_id: agentId,
      agent_name: agentName,
      list_name: listName,
      max_budget: dailyBudget,
    };
  }

  // -----HANDLERS------

  const onSubmit = () => {
    const setShowModal1 = props.setShowModal1;
    if (value === "Inbound") {
      dispatch(
        createCampaigns({
          data,
          setShowModal1,
          dispatch,
          fetchCampaigns,
          launchCampaigns: launchInboundCampaigns,
          makingSearchedCampaigns,
        })
      )
        .then((result) => {
          if (result.meta.requestStatus === "fulfilled") {
            toast.success("Campaign Created!", {
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
    } else if (value === "Outbound") {
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
    }

    // if (!errors.agentName) {
    //   props.setShowModal1(false);
    //   document.getElementById("my_modal_4").showModal();
    // }
  };

  const buyNumberHandler = (number) => {
    const data = { number };
    dispatch(buyNumber(data))
      .then((result) => {
        if (result.meta.requestStatus === "fulfilled") {
          setNumber(number), setShowNumbers(false);
          toast.success("Number Buyed!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          dispatch(fetchUserNumbers());
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <dialog id="campaign_modal_3" className="modal">
        <div className="modal-box bg-white">
          <div>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="">
              <h3 className="font-semibold text-xl text-black text-center  mb-3">
                Create A New Campaign
              </h3>
              <div className="flex justify-center flex-col items-center mb-2">
                <input
                  {...register("campaignName", { required: true })}
                  type="text"
                  aria-label="Campaign Name"
                  placeholder="Campaign Name"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  className="input input-bordered input-primary w-full bg-white text-black "
                />
                {errors.campaignName && (
                  <p className="text-center text-red-500 font-semibold mt-1">
                    This field is required
                  </p>
                )}
              </div>

              <FormControl>
                <p className="text-black  font-medium my-1">
                  Choose your case:
                </p>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Inbound"
                  name="radio-buttons-group"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                >
                  <FormControlLabel
                    className="text-black   "
                    value="Inbound"
                    control={<Radio size="small" />}
                    label="Inbound"
                  />
                  <FormControlLabel
                    className="text-black"
                    value="Outbound"
                    control={<Radio size="small" />}
                    label="Outbound"
                  />
                </RadioGroup>
              </FormControl>
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <div className="m-0.5 sm:m-1 w-full">
                  <p className="text-start text-black font-semibold my-0.5 mx-1">
                    Agent
                  </p>
                  <div className="w-full ">
                    <div className="input input-bordered input-primary  bg-white flex items-center h-8">
                      <SearchIcon className="text-black me-1 sm:me-2 " />
                      <input
                        {...register("searchAgent", { required: true })}
                        type="text"
                        aria-label="Search Agent"
                        placeholder="Search Agent"
                        value={agentName}
                        onChange={(e) => setAgentName(e.target.value)}
                        className="bg-white w-full text-black "
                      />
                    </div>
                    {agentName !== ""
                      ? searchedAgents.map((agent) => {
                          return (
                            <div
                              key={agent?._id}
                              onClick={() => {
                                setAgentName(agent?.name);
                                setAgentId(agent?._id);
                              }}
                            >
                              <SearchItem text={agent?.name} />
                            </div>
                          );
                        })
                      : null}
                  </div>
                  {errors.searchAgent && (
                    <p className="text-center text-red-500 font-semibold mt-1">
                      Please Select a Agent
                    </p>
                  )}
                </div>
                <div className="m-0.5 sm:m-1 w-full">
                  {" "}
                  <p className="text-start text-black font-semibold my-0.5  mx-1">
                    {value === "Inbound" ? "Buy Number" : "List"}
                  </p>
                  <div className="w-full ">
                    {value === "Inbound" ? (
                      <>
                        <div
                          className="input input-bordered input-primary  bg-white flex items-center h-8 cursor-pointer"
                          onClick={() => setShowNumbers(!showNumbers)}
                        >
                          {showNumbers ? (
                            <KeyboardArrowUpIcon className="text-black me-1 sm:me-2 " />
                          ) : (
                            <KeyboardArrowDownIcon className="text-black me-1 sm:me-2 " />
                          )}

                          <input
                            // {...register("number", { required: true })}
                            type="text"
                            placeholder="Select Number"
                            aria-label="Select Number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            readOnly
                            className="bg-white w-full  text-black  "
                          />
                        </div>
                        {showNumbers ? (
                          <>
                            <>
                              <p className="bg-slate-200 px-1 text-sm font-bold tracking-wide text-black">
                                Your Numbers
                              </p>
                              <div className="max-h-28 overflow-y-scroll">
                                {campaigns.userNumbers.length < 0 ? (
                                  <SearchItem text="No Number to Show" />
                                ) : (
                                  campaigns.userNumbers.map((number) => {
                                    return (
                                      <div
                                        key={number?._id}
                                        onClick={() => {
                                          return (
                                            setNumber(number?.phoneNumber),
                                            setShowNumbers(false)
                                          );
                                        }}
                                      >
                                        <SearchItem
                                          text={number?.phoneNumber}
                                        />
                                      </div>
                                    );
                                  })
                                )}
                              </div>
                            </>

                            <>
                              <p className="bg-slate-200 px-1 text-sm font-bold tracking-wide text-black">
                                Buy New Numbers
                              </p>
                              <div className="max-h-28 overflow-y-scroll">
                                {campaigns.availableNumbers.length < 0 ? (
                                  <SearchItem text="No Number to Show" />
                                ) : (
                                  campaigns.availableNumbers.map((number) => {
                                    return (
                                      <div key={number}>
                                        <SearchItem
                                          text={number}
                                          buy={true}
                                          buyNumberHandler={buyNumberHandler}
                                        />
                                      </div>
                                    );
                                  })
                                )}
                              </div>
                            </>
                          </>
                        ) : null}

                        {/* {errors.number && (
                          <p className="text-center text-red-500 font-semibold mt-1">
                            Please Select a Number
                          </p>
                        )} */}
                      </>
                    ) : (
                      <>
                        <div className="input input-bordered input-primary  bg-white flex items-center h-8">
                          <SearchIcon className="text-black me-1 sm:me-2 " />
                          <input
                            {...register("selectList", { required: true })}
                            type="text"
                            placeholder="Search List"
                            aria-label="Search List"
                            value={listName}
                            onChange={(e) => setListName(e.target.value)}
                            className="bg-white w-full  text-black "
                          />
                        </div>
                        {listName !== ""
                          ? searchedLists.map((list) => {
                              return (
                                <div
                                  key={list?._id}
                                  onClick={() => {
                                    setListName(list?.name);
                                  }}
                                >
                                  <SearchItem text={list?.name} />
                                </div>
                              );
                            })
                          : null}
                        {errors.selectList && (
                          <p className="text-center text-red-500 font-semibold mt-1">
                            Please Select a List
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-center flex-col  m-0.5 mb-4 sm:mb-5">
                <p className=" text-start    text-black font-semibold my-0.5  mx-1">
                  Max Daily Budget
                </p>
                <input
                  {...register("dailyBudget", { required: true })}
                  type="text"
                  placeholder="$0.00"
                  aria-label="Budget"
                  value={dailyBudget}
                  onChange={(e) => setDailyBudget(e.target.value)}
                  className="input input-bordered input-primary w-full  bg-white text-black "
                />
                {errors.dailyBudget && (
                  <p className="text-center text-red-500 font-semibold mt-1">
                    This field is required
                  </p>
                )}
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-center "
            >
              <button
                type="submit"
                className="btn px-16 py-0 bg-green-400 border-none text-black hover:bg-green-400 hover:text-white"
              >
                Save & Launch
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CampaignModal1;
