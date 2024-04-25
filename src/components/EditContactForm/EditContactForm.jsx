import { useForm } from "react-hook-form";
import { useState } from "react";

import EditIcon from "@mui/icons-material/Edit";
import {
  updateContacts,
  fetchContacts,
  makingSearchedContacts,
} from "../../store/features/contacts/contactsSlice";
import { useDispatch } from "react-redux";

const EditContactForm = (props) => {
  // -------USE STATES--------

  const [updatedContactName, setUpdatedContactName] = useState(props.name);
  const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState(props.phone);
  const [updatedEmail, setUpdatedEmail] = useState(props.email);
  const [isOpen, setIsOpen] = useState(true);

  //   -------VARIABLES DECALARATIONS----------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const data = {
    name: updatedContactName,
    email: updatedEmail,
    phone: updatedPhoneNumber,
  };

  //   ---------HANDLERS-----------
  const onSubmit = () => {
    if (!errors.updatedAgentName) {
      const id = props.id;
      dispatch(
        updateContacts({
          data,
          id,
          dispatch,
          fetchContacts,
          makingSearchedContacts,
          setIsOpen,
        })
      );
    }
  };
  return (
    <>
      <EditIcon
        onClick={() =>
          document.getElementById("contact_edit_modal_3").showModal()
        }
        className="cursor-pointer text-green-500"
        fontSize="small"
      />
      {isOpen ? (
        <dialog id="contact_edit_modal_3" className="modal">
          <div className="modal-box bg-white">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg text-black text-center ">
              Update Contact
            </h3>
            <div className="mt-5">
              <p className="text-black text- font-semibold m-0.5">
                Contact Name
              </p>
              <input
                {...register("updatedContactName", { required: true })}
                type="text"
                aria-label="Contact Name"
                placeholder="Enter Contact Name"
                value={updatedContactName}
                onChange={(e) => setUpdatedContactName(e.target.value)}
                className="input input-bordered input-primary w-full  bg-white text-black"
              />
              {errors.updatedContactName && (
                <p className="text-center text-red-500 font-semibold mt-1">
                  This field is required
                </p>
              )}
            </div>
            <div className="mt-3">
              <p className="text-black text- font-semibold m-0.5">Email</p>
              <input
                {...register("updatedEmail", { required: true })}
                type="email"
                aria-label="Email"
                placeholder="Enter Email"
                value={updatedEmail}
                onChange={(e) => setUpdatedEmail(e.target.value)}
                className="input input-bordered input-primary w-full  bg-white text-black"
              />
              {errors.updatedEmail && (
                <p className="text-center text-red-500 font-semibold mt-1">
                  This field is required
                </p>
              )}
            </div>
            <div className="mt-3">
              <p className="text-black text- font-semibold m-0.5">
                Phone Number
              </p>
              <input
                {...register("updatedPhoneNumber", { required: true })}
                type="text"
                aria-label="Phone Number"
                placeholder="Phone No: e.g(+9230809645263)"
                value={updatedPhoneNumber}
                onChange={(e) => setUpdatedPhoneNumber(e.target.value)}
                className="input input-bordered input-primary w-full  bg-white text-black"
              />
              {errors.updatedPhoneNumber && (
                <p className="text-center text-red-500 font-semibold mt-1">
                  This field is required
                </p>
              )}
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-center mt-3 "
            >
              <button
                type="submit"
                className="btn px-16 py-0 bg-green-400 border-none text-black hover:bg-green-400 hover:text-white"
              >
                Update
              </button>
            </form>
          </div>
        </dialog>
      ) : null}
    </>
  );
};

export default EditContactForm;
