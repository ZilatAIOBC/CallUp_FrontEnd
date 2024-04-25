import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const AgentsPaginationButtons = (props) => {
  return (
    <div className="flex justify-center py-8  ">
      <button
        className="btn btn-sm btn-circle bg-white text-black  hover:bg-gray-300 m-1"
        onClick={props.prevPage}
      >
        <ChevronLeftIcon />
      </button>
      {props.numbers.map((n, i) => (
        <button className={` m-1 `} key={i}>
          <a
            href="#"
            className={`btn btn-sm bg-white text-black btn-circle   hover:bg-gray-300  ${
              props.currentPage === n ? "bg-yellow-400" : ""
            }`}
            onClick={() => props.setCurrentPage(n)}
          >
            {n}
          </a>
        </button>
      ))}
      <button
        className="btn btn-sm btn-circle bg-white text-black  hover:bg-gray-300  m-1"
        onClick={props.nextPage}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default AgentsPaginationButtons;
