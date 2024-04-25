import SearchIcon from "@mui/icons-material/Search";

import AgentModalController from "../AgentModalController/AgentModalController";
import ContactModalController from "../ContactModalController/ContactModalController";
import CampaignModalController from "../CampaignModalController/CampaignModalController";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makingSearchedAgents } from "../../store/features/agents/agentsSlice";
import { makingSearchedContacts } from "../../store/features/contacts/contactsSlice";
import { makingSearchedCampaigns } from "../../store/features/campaigns/campaignsSlice";
import { makingSearchedRecordings } from "../../store/features/recordings/recordingsSlice";

const SearchBar = (props) => {
  // ------USE STATES--------
  const [searchedAgentsValue, setSearchedAgentsValue] = useState("");
  const [searchedContactsValue, setSearchedContactsValue] = useState("");
  const [searchedCampaignsValue, setSearchedCampaignsValue] = useState("");
  const [searchedRecordingsValue, setSearchedRecordingsValue] = useState("");

  // --------VARIABLE DECALARATIONS-------------

  const dispatch = useDispatch();

  const agents = useSelector((state) => state.agents);
  const contacts = useSelector((state) => state.contacts);
  const campaigns = useSelector((state) => state.campaigns);
  const recordings = useSelector((state) => state.recordings);

  let input;

  // ----------USE EFFECTS-----------

  useEffect(() => {
    const searchedAgents = agents.agents.filter((agent) => {
      return agent?.name
        .toLowerCase()
        .includes(searchedAgentsValue.toLowerCase());
    });

    dispatch(makingSearchedAgents(searchedAgents));
  }, [searchedAgentsValue]);

  useEffect(() => {
    const searchedContacts = contacts.contacts.filter((contact) => {
      return contact?.name
        .toLowerCase()
        .includes(searchedContactsValue.toLowerCase());
    });

    dispatch(makingSearchedContacts(searchedContacts));
  }, [searchedContactsValue]);

  useEffect(() => {
    const searchedCampaigns = campaigns.campaigns.filter((campaign) => {
      return campaign?.campaign_name
        .toLowerCase()
        .includes(searchedCampaignsValue.toLowerCase());
    });

    dispatch(makingSearchedCampaigns(searchedCampaigns));
  }, [searchedCampaignsValue]);

  useEffect(() => {
    const searchedRecordings = recordings.recordings.filter((recording) => {
      return recording?.campaign_name
        .toLowerCase()
        .includes(searchedRecordingsValue.toLowerCase());
    });

    dispatch(makingSearchedRecordings(searchedRecordings));
  }, [searchedRecordingsValue]);

  // -------CONDITIONALS------------

  if (props.modal === "Agent") {
    input = (
      <input
        type="text"
        aria-label="Search Agent"
        placeholder="Search Agent"
        value={searchedAgentsValue}
        onChange={(e) => setSearchedAgentsValue(e.target.value)}
        className="bg-white w-full text-xs sm:text-base text-black"
      />
    );
  } else if (props.modal === "Contact") {
    input = (
      <input
        type="text"
        aria-label="Search Contacts"
        placeholder="Search Contacts"
        value={searchedContactsValue}
        onChange={(e) => setSearchedContactsValue(e.target.value)}
        className="bg-white w-full text-xs sm:text-base  text-black"
      />
    );
  } else if (props.modal === "Campaign") {
    input = (
      <input
        type="text"
        aria-label="Search Campaigns"
        placeholder="Search Campaigns"
        value={searchedCampaignsValue}
        onChange={(e) => setSearchedCampaignsValue(e.target.value)}
        className="bg-white w-full text-xs sm:text-base   text-black"
      />
    );
  } else if (props.modal === "Recording") {
    input = (
      <input
        type="text"
        aria-label="Search Recordings"
        placeholder="Search Recordings"
        value={searchedRecordingsValue}
        onChange={(e) => setSearchedRecordingsValue(e.target.value)}
        className="bg-white w-full text-xs sm:text-base   text-black"
      />
    );
  }

  return (
    <div className="flex  justify-center md:justify-end md:me-10  pt-10 mb-5 md:mb-0  p-2">
      <div className="input input-bordered input-primary w-full max-w-xs bg-white flex items-center h-10 md:h-12">
        <SearchIcon className="text-black me-1 sm:me-2 " />
        {input}
      </div>

      {props.modal === "Agent" ? <AgentModalController /> : null}
      {props.modal === "Contact" ? <ContactModalController /> : null}
      {props.modal === "Campaign" ? (
        <CampaignModalController from="Search" />
      ) : null}
    </div>
  );
};

export default SearchBar;
