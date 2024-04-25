import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import TableTemplate from "../TableTemplate/TableTemplate";
import { fetchRecordings } from "../../store/features/recordings/recordingsSlice";
import { useEffect } from "react";
import Spinner from "../Spinner/Spinner";

const Recordings = () => {
  // ------VARIABLE DECALARATIONS-------------
  const dispatch = useDispatch();
  const recordings = useSelector((state) => state.recordings);

  // -----USE EFFECTS----------
  useEffect(() => {
    dispatch(fetchRecordings());
  }, []);

  return (
    <div>
      <Header />
      <SearchBar
        placeholder="Search Recording"
        buttonText="New Recording"
        modal="Recording"
      />
      {recordings.loading ? (
        <Spinner />
      ) : (
        <TableTemplate page="Recordings" title="Recordings" />
      )}
    </div>
  );
};

export default Recordings;
