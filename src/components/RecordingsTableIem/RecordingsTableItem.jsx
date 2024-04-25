/* eslint-disable react/prop-types */
import { useState } from "react";

import ReactHowler from "react-howler";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const RecordingsTableItem = (props) => {
  // ------USE STATES-------
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);

  const date = new Date(props.date);

  // Options for formatting the date
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const readableDate = date.toLocaleDateString("en-US", options);

  return (
    <div className="w-full md:w-5/6   py-1 sm:p-2  flex justify-around items-center text-white  sm:font-medium">
      <p className=" text-xxs sm:text-xs lg:text-sm w-24  md:w-36 text-center  ">
        {props.contact_name}
      </p>
      <p className=" text-xxs sm:text-xs lg:text-sm  w-24  md:w-36 text-center ">
        {props.contact_number}
      </p>
      <p className=" text-xxs sm:text-xs lg:text-sm w-24   md:w-36   text-center">
        {props.campaign_name}
      </p>
      <p className=" text-xxs sm:text-xs lg:text-sm w-24   md:w-36  text-center">
        {props.direction}
      </p>
      <p className=" text-xxs sm:text-xs lg:text-sm w-24  md:w-36  text-center">
        {readableDate}
      </p>
      <p className=" text-xxs sm:text-xs lg:text-sm w-24  md:w-36  text-center">
        {props.duration}
      </p>

      {props.recording === "none" ? (
        <p className=" text-xxs sm:text-xs lg:text-sm w-24  md:w-36  text-center">
          none
        </p>
      ) : isSoundPlaying ? (
        <button
          onClick={() => {
            setIsSoundPlaying(false);
          }}
          className="flex justify-center items-center text-xxs sm:text-xs lg:text-sm    w-24  md:w-36 cursor-pointer"
        >
          <ReactHowler
            src={props.recording}
            loop
            playing={isSoundPlaying}
            format={["wav"]}
          />
          <span role="img" aria-label="trumpet">
            <PauseIcon className="" fontSize="small" />
          </span>
          <p className="text-center mx-1">stop</p>
        </button>
      ) : (
        <button
          onClick={() => {
            setIsSoundPlaying(true);
          }}
          className="flex justify-center items-center text-xxs sm:text-xs lg:text-sm    w-24  md:w-36 cursor-pointer"
        >
          <ReactHowler
            src={props.recording}
            loop
            playing={isSoundPlaying}
            format={["wav"]}
          />
          <span role="img" aria-label="trumpet">
            <PlayArrowIcon className="" fontSize="small" />
          </span>
          <p className="text-center mx-1">play</p>
        </button>
      )}
    </div>
  );
};

export default RecordingsTableItem;
