import { useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { makingNewContact } from "../../store/features/contacts/contactsSlice";
import { createLists, fetchLists } from "../../store/features/lists/listsSlice";

const ContactModal3 = (props) => {
  // ----USE STATES--------
  const [listName, setListName] = useState("");

  // ------VARIABLES DECALARATIONS---------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const lists = useSelector((state) => state.lists);

  const data = {
    name: listName,
  };

  // ----------HANDLERS--------
  const onSubmit = () => {
    const setShowModal2 = props.setShowModal2;
    dispatch(createLists({ data, setShowModal2, dispatch, fetchLists }));
    // if (!errors.information) {
    //   props.setShowModal2(false);
    //   dispatch(makingNewContact({ listName }));
    //   document.getElementById("contact_modal_5").showModal();
    // }
  };

  return (
    <div>
      <dialog id="contact_modal_4" className="modal">
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
                Create A New List
              </h3>
              <div className="flex justify-center">
                <input
                  // {...register("listName", { required: true })}
                  type="text"
                  placeholder="List Name"
                  aria-label="List Name"
                  value={listName}
                  onChange={(e) => setListName(e.target.value)}
                  className="input input-bordered input-primary w-full max-w-xs bg-white text-black "
                />
              </div>

              {lists.error && (
                <p className="text-center text-red-500 font-semibold mt-1">
                  {lists.error.includes("Required") ? lists.error : null}
                  {lists.error.includes("Duplicate")
                    ? "List already exists."
                    : null}
                </p>
              )}
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-center mt-5"
            >
              <button
                type="submit"
                className="btn px-16 py-0 mt-5 bg-green-400 border-none text-black hover:bg-green-400 hover:text-white"
              >
                Add List
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ContactModal3;
