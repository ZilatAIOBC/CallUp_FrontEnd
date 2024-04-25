const RecordingsTableHead = () => {
  return (
    <div className=" w-full md:w-5/6  bg-white p-2  rounded-lg flex justify-around  ">
      <p className="font-bold text-black text-xxs sm:text-xs lg:text-sm w-24  md:w-36  text-center">
        Contact Name
      </p>
      <p className="font-bold text-black text-xxs sm:text-xs lg:text-sm  w-24  md:w-36  text-center">
        Contact Number
      </p>
      <p className="font-bold text-black text-xxs sm:text-xs lg:text-sm w-24  md:w-36  text-center">
        Campaign Name
      </p>
      <p className="font-bold text-black text-xxs sm:text-xs lg:text-sm w-24  md:w-36  text-center">
        Direction
      </p>
      <p className="font-bold text-black text-xxs sm:text-xs lg:text-sm w-24  md:w-36  text-center">
        Date
      </p>
      <p className="font-bold text-black text-xxs sm:text-xs lg:text-sm w-24  md:w-36  text-center">
        Duration
      </p>

      <p className="font-bold text-black text-xxs sm:text-xs lg:text-sm w-24   md:w-36  text-center">
        Recording
      </p>
    </div>
  );
};

export default RecordingsTableHead;
