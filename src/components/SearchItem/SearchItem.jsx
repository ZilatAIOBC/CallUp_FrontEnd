/* eslint-disable react/prop-types */
const SearchItem = (props) => {
  return props.buy ? (
    <div className="flex justify-between p-1  w-full border text-black border-grey-500 rounded-sm bg-gray-50  z-10">
      <p className=" text-black ">{props.text}</p>
      <button
        className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-md px-2 py-0"
        onClick={() => props.buyNumberHandler(props.text)}
      >
        Buy
      </button>
    </div>
  ) : (
    <p className="w-full border text-black border-grey-500 rounded-sm bg-gray-50 p-1 z-10 cursor-pointer">
      {props.text}
    </p>
  );
};

export default SearchItem;
