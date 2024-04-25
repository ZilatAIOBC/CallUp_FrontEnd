import { useState } from "react";

import { useForm } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";

import SearchItem from "../SearchItem/SearchItem";
import {
  createContacts,
  fetchContacts,
  makingSearchedContacts,
} from "../../store/features/contacts/contactsSlice";

const ContactModal4 = (props) => {
  // --------USE STATES----------
  const [listName, setListName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  // ---------VARIABLES DECALARATIONS-------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const lists = useSelector((state) => state.lists);

  const data = {
    name: contactName,
    email,
    phone: phoneNumber,
    list_name: listName,
  };
  const searchedLists = lists.lists.filter((list) => {
    return list?.name.toLowerCase().includes(listName.toLowerCase());
  });

  // -----------HANDLERS----------
  const onSubmit = () => {
    // Your form submission logic here
    // For example, you can perform form validation checks
    // if (!errors.information) {
    //   props.setShowModal4(false);
    // }

    const setShowModal4 = props.setShowModal4;

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
    <div>
      <dialog id="contact_modal_6" className="modal">
        <div className="modal-box bg-white">
          <div>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="">
              <h3 className="font-semibold text-xl text-black text-center  mb-5">
                Create A Contact
              </h3>
              <div className="flex justify-center flex-col items-center">
                <div className="w-full max-w-xs ">
                  <div className="input input-bordered input-primary  bg-white flex items-center h-8 ">
                    <SearchIcon className="text-black me-1 sm:me-2 " />
                    <input
                      {...register("selectList", { required: true })}
                      type="text"
                      placeholder="Search List"
                      aria-label="Search List"
                      value={listName}
                      onChange={(e) => setListName(e.target.value)}
                      className="bg-white w-full text-black"
                    />
                  </div>
                  {listName !== ""
                    ? searchedLists.map((list) => {
                        return (
                          <div
                            key={list?._id}
                            onClick={() => {
                              setListName(list?.name);
                            }}
                          >
                            <SearchItem text={list?.name} />
                          </div>
                        );
                      })
                    : null}
                </div>
                {errors.selectList && (
                  <p className="text-center text-red-500 font-semibold mt-1">
                    Please Select a List
                  </p>
                )}
                <input
                  {...register("contactName", { required: true })}
                  type="text"
                  placeholder="Contact Name"
                  aria-label="Contact Name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="input input-bordered input-primary w-full max-w-xs bg-white text-black mt-5 "
                />
                {errors.contactName && (
                  <p className="text-center text-red-500 font-semibold mt-1">
                    This field is required
                  </p>
                )}
                <input
                  {...register("phoneNumber", { required: true })}
                  type="text"
                  aria-label="Phone Number"
                  placeholder="Phone No: e.g(+9230809645263)"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="input input-bordered input-primary w-full max-w-xs bg-white text-black mt-5 "
                />
                {errors.phoneNumber && (
                  <p className="text-center text-red-500 font-semibold mt-1">
                    This field is required
                  </p>
                )}
                <input
                  {...register("email", { required: true })}
                  type="email"
                  aria-label="Email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered input-primary w-full max-w-xs bg-white text-black mt-5 "
                />
                {errors.email && (
                  <p className="text-center text-red-500 font-semibold mt-1">
                    This field is required
                  </p>
                )}
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-center mt-5"
            >
              <button
                type="submit"
                className="btn px-16 py-0 mt-5 bg-green-400 border-none text-black hover:bg-green-400 hover:text-white"
              >
                Add Contact
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ContactModal4;
