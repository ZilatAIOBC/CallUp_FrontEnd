import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "../../store/features/contacts/contactsSlice";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import TableTemplate from "../TableTemplate/TableTemplate";
import { fetchLists } from "../../store/features/lists/listsSlice";
import Spinner from "../Spinner/Spinner";

const Contacts = () => {
  // -----VARIABLES DECALARATION------
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  // USE EFFECTS

  useEffect(() => {
    dispatch(fetchContacts());
    dispatch(fetchLists());
  }, []);

  return (
    <div>
      <Header />
      <SearchBar
        placeholder="Search Contact"
        buttonText="New Contact"
        modal="Contact"
      />{" "}
      {contacts.loading ? (
        <Spinner />
      ) : (
        <TableTemplate title="Contacts" name="Contact Name" page="Contacts" />
      )}
    </div>
  );
};

export default Contacts;
