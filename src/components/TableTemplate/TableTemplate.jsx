/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import TableHead from "../TableHead/TableHead";
import TableItem from "../TableItem/TableItem";
import RecordingsTableItem from "../RecordingsTableIem/RecordingsTableItem";
import CampaignsTableItem from "../CampaignsTableItem/CampaignsTableItem";
import CampaignsTableHead from "../CampaignsTableHead/CampaignsTableHead";
import RecordingsTableHead from "../RecordingsTableHead/RecordingsTableHead";
import ContactsTableItem from "../ContactsTableItem/ContactsTableItem";
import ContactsTableHead from "../ContactsTableHead/ContactsTableHead";
import AgentsPaginationButtons from "../AgentsPaginationButtons/AgentsPaginationButtons";
import ContactsPaginationButtons from "../ContactsPaginationButtons/ContactsPaginationButtons";
import CampaignsPaginationButtons from "../CampaignsPaginationButtons/CampaignsPaginationButtons";
import RecordingsPaginationButtons from "../RecordingsPaginationButtons/RecordingsPaginationButtons";

const TableTemplate = (props) => {
  // --------USE STATES----------
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  // ----------USE EFFECTS-----------

  useEffect(() => {
    setCurrentPage(1);
  }, [props.page]);

  // ---------VARIABLES DECALARATIONS--------
  const agents = useSelector((state) => state.agents);
  const contacts = useSelector((state) => state.contacts);
  const campaigns = useSelector((state) => state.campaigns);
  const recordings = useSelector((state) => state.recordings);

  // -------------LOGIC--------------
  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // AGENTS LOGIC
  const currentAgents = agents.agents.slice(indexOfFirstItem, indexOfLastItem);

  const totalPagesAgents = Math.ceil(agents.agents.length / itemsPerPage);

  const AgentNumbers = [...Array(totalPagesAgents + 1).keys()].slice(1);

  // CONTACTS LOGIC
  const currentContacts = contacts.contacts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPagesContacts = Math.ceil(contacts.contacts.length / itemsPerPage);

  const ContactNumbers = [...Array(totalPagesContacts + 1).keys()].slice(1);

  // CAMPAIGNS LOGIC
  const currentCampaigns = campaigns.campaigns.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPagesCampaigns = Math.ceil(
    campaigns.campaigns.length / itemsPerPage
  );

  const CampaignNumbers = [...Array(totalPagesCampaigns + 1).keys()].slice(1);

  // RECORDINGS LOGIC
  const currentRecordings = recordings.recordings.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPagesRecordings = Math.ceil(
    recordings.recordings.length / itemsPerPage
  );

  const RecordingNumbers = [...Array(totalPagesRecordings + 1).keys()].slice(1);

  // ----------HANDLERS-----------
  const prevPageHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const agentsNextPageHandler = () => {
    if (currentPage !== totalPagesAgents) {
      setCurrentPage(currentPage + 1);
    }
  };

  const contactsNextPageHandler = () => {
    if (currentPage !== totalPagesContacts) {
      setCurrentPage(currentPage + 1);
    }
  };

  const campaignsNextPageHandler = () => {
    if (currentPage !== totalPagesCampaigns) {
      setCurrentPage(currentPage + 1);
    }
  };

  const recordingsNextPageHandler = () => {
    if (currentPage !== totalPagesRecordings) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {/* {props.page == "Recordings" ? ( */}
      <div className="flex justify-center md:justify-start">
        <button className="btn  md:ms-24 mb-8  md:mb-20 rounded-full text-lg px-8 sm:px-14 bg-violet-400 text-black  hover:bg-violet-400">
          {props.title}
        </button>
      </div>

      <div className="flex items-center flex-col">
        {props.page === "Agents" ? <TableHead /> : null}
        {props.page === "Agents"
          ? agents.searchedAgents.length !== 0 &&
            agents.searchedAgents.length !== agents.agents.length
            ? agents.searchedAgents.map((agent) => {
                return (
                  <TableItem
                    key={agent?._id}
                    id={agent?._id}
                    name={agent?.name}
                    prompt={agent?.prompt}
                    sub_prompt={agent?.sub_prompt}
                    voice_id={agent?.voice_id}
                  />
                );
              })
            : currentAgents.map((agent) => {
                return (
                  <TableItem
                    key={agent?._id}
                    id={agent?._id}
                    name={agent?.name}
                    prompt={agent?.prompt}
                    sub_prompt={agent?.sub_prompt}
                    voice_id={agent?.voice_id}
                  />
                );
              })
          : null}
        {props.page === "Agents" ? (
          <div className="">
            <AgentsPaginationButtons
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              numbers={AgentNumbers}
              prevPage={prevPageHandler}
              nextPage={agentsNextPageHandler}
            />
          </div>
        ) : null}
        {props.page === "Contacts" ? <ContactsTableHead /> : null}
        {props.page === "Contacts"
          ? contacts.searchedContacts.length !== 0 &&
            contacts.searchedContacts.length !== contacts.contacts.length
            ? contacts.searchedContacts.map((contact) => {
                return (
                  <ContactsTableItem
                    key={contact?._id}
                    id={contact?._id}
                    name={contact?.name}
                    email={contact?.email}
                    phone={contact?.phone}
                    listName={contact?.list_name}
                  />
                );
              })
            : currentContacts.map((contact) => {
                return (
                  <ContactsTableItem
                    key={contact?._id}
                    id={contact?._id}
                    name={contact?.name}
                    email={contact?.email}
                    phone={contact?.phone}
                    listName={contact?.list_name}
                  />
                );
              })
          : null}
        {props.page === "Contacts" ? (
          <div>
            <ContactsPaginationButtons
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              numbers={ContactNumbers}
              prevPage={prevPageHandler}
              nextPage={contactsNextPageHandler}
            />
          </div>
        ) : null}
        {props.page === "Campaigns" ? <CampaignsTableHead /> : null}
        {props.page === "Campaigns"
          ? campaigns.searchedCampaigns.length !== 0 &&
            campaigns.searchedCampaigns.length !== campaigns.campaigns.length
            ? campaigns.searchedCampaigns.map((campaign) => {
                return (
                  <CampaignsTableItem
                    key={campaign?._id}
                    id={campaign?._id}
                    name={campaign?.campaign_name}
                    type={campaign?.campaign_type}
                    agent_name={campaign?.agent_name}
                    agent_id={campaign?.agent_id}
                    list={campaign?.list_name}
                    phone_number={campaign?.inbound_phone_number}
                    isCancel={campaign?.isCancelled}
                    maxBudget={campaign?.max_budget}
                  />
                );
              })
            : currentCampaigns.map((campaign) => {
                return (
                  <CampaignsTableItem
                    key={campaign?._id}
                    id={campaign?._id}
                    name={campaign?.campaign_name}
                    type={campaign?.campaign_type}
                    agent_name={campaign?.agent_name}
                    agent_id={campaign?.agent_id}
                    list={campaign?.list_name}
                    phone_number={campaign?.inbound_phone_number}
                    isCancel={campaign?.isCancelled}
                    maxBudget={campaign?.max_budget}
                  />
                );
              })
          : null}
        {props.page === "Campaigns" ? (
          <div>
            <CampaignsPaginationButtons
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              numbers={CampaignNumbers}
              prevPage={prevPageHandler}
              nextPage={campaignsNextPageHandler}
            />
          </div>
        ) : null}
        {props.page === "Recordings" ? <RecordingsTableHead /> : null}
        {props.page === "Recordings"
          ? recordings.searchedRecordings.length !== 0 &&
            recordings.searchedRecordings.length !==
              recordings.recordings.length
            ? recordings.searchedRecordings.map((recording) => {
                return (
                  <RecordingsTableItem
                    key={recording?._id}
                    contact_name={recording?.contact_name}
                    campaign_name={recording?.campaign_name}
                    contact_number={recording?.contact_number}
                    direction={recording?.direction}
                    duration={recording?.duration}
                    date={recording?.createdAt}
                    recording={recording?.recording}
                  />
                );
              })
            : currentRecordings.map((recording) => {
                return (
                  <RecordingsTableItem
                    key={recording?._id}
                    contact_name={recording?.contact_name}
                    campaign_name={recording?.campaign_name}
                    contact_number={recording?.contact_number}
                    direction={recording?.direction}
                    duration={recording?.duration}
                    date={recording?.createdAt}
                    recording={recording?.recording}
                  />
                );
              })
          : null}
        {props.page === "Recordings" ? (
          <div>
            <RecordingsPaginationButtons
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              numbers={RecordingNumbers}
              prevPage={prevPageHandler}
              nextPage={recordingsNextPageHandler}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};
export default TableTemplate;
