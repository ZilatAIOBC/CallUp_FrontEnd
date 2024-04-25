import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import DeleteIcon from "@mui/icons-material/Delete";
import ArticleIcon from "@mui/icons-material/Article";

import EditContactForm from "../EditContactForm/EditContactForm";

import {
  createContacts,
  deleteContacts,
  fetchContacts,
  makingSearchedContacts,
} from "../../store/features/contacts/contactsSlice";

import ProfileImage from "../../utils/Images/profile2.jpg";
import { useState } from "react";

const ContactsTableItem = (props) => {
  const [showModal4, setShowModal4] = useState(false); // IGNORE THIS(ONLY A PLACEHOLDER)
  // ------VARIABLES DECALARATIONS---------

  const dispatch = useDispatch();
  // const agents = useSelector((state) => state.agents);

  const data = {
    name: `${props.name}(COPY)`,
    email: props.email,
    phone: props.phone,
    list_name: props.listName,
  };

  // -------HANDLERS----------
  const deleteContactHandler = () => {
    const id = props.id;
    dispatch(
      deleteContacts({
        id,
        dispatch,
        fetchContacts,
        makingSearchedContacts,
        toast,
      })
    );
  };

  const duplicateContactHandler = () => {
    dispatch(
      createContacts({
        data,
        setShowModal4,
        dispatch,
        fetchContacts,
        makingSearchedContacts,
      })
    );
  };
  return (
    <div className="w-full sm:w-5/6   p-1 sm:p-2  flex justify-around items-center text-white  sm:font-medium">
      <div className="flex items-center  w-36 sm:w-40">
        <img
          loading="lazy"
          src={ProfileImage}
          alt="Profile Image"
          className="w-8 sm:w-12 rounded-lg mx-0.5"
        />
        <p className="text-xs sm:text-md  sm:ms-1">{props.name}</p>
      </div>
      <p className="text-xs text-center sm:text-md  ms-0.5 sm:ms-1 w-36 sm:w-40">
        {props.listName}
      </p>
      <p className="text-xs text-center sm:text-md  ms-0.5 sm:ms-1 w-36 sm:w-40">
        About 2 hours ago
      </p>
      <div className=" flex flex-col  justify-center items-center sm:flex-row w-36 sm:w-40">
        <div>
          <ArticleIcon
            className="cursor-pointer"
            fontSize="small"
            onClick={duplicateContactHandler}
          />
          <EditContactForm
            id={props.id}
            name={props.name}
            email={props.email}
            phone={props.phone}
          />
        </div>
        <div className="flex justify-center items-center">
          <DeleteIcon
            className="cursor-pointer text-red-600 "
            fontSize="small"
            onClick={deleteContactHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactsTableItem;
