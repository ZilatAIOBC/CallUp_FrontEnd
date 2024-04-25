const TableHead = () => {
  return (
    <div className=" w-full sm:w-5/6  bg-white p-2  rounded-lg flex justify-around ">
      <p className="font-bold text-black text-md w-36 sm:w-40 text-center">
        Agent Name
      </p>
      <p className="font-bold text-black text-md  w-36 sm:w-40 text-center">
        Type
      </p>
      <p className="font-bold text-black text-md w-36 sm:w-40 text-center">
        Last Edited
      </p>
      <p className="font-bold text-black text-md w-36 sm:w-40  text-center">
        Action
      </p>
    </div>
  );
};

export default TableHead;
