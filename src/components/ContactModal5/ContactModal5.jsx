import { useState } from "react";
import { useForm } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import SearchItem from "../SearchItem/SearchItem";
import { useDispatch, useSelector } from "react-redux";
import {
  uploadContacts,
  fetchContacts,
} from "../../store/features/contacts/contactsSlice";
import ContactTable from "../ContactTable/ContactTable";

const ContactModal5 = (props) => {
  // -------USE STATES----------
  const [listName, setListName] = useState("");
  const [isXlxs, setIsXlxs] = useState(true);
  const [file, setFile] = useState(null);
  const [contactName, setContactName] = useState("");

  // ----------VARIABLES DECALARATIONS----------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const lists = useSelector((state) => state.lists);

  const searchedLists = lists.lists.filter((list) => {
    return list?.name.toLowerCase().includes(listName.toLowerCase());
  });

  const dispatch = useDispatch();

  // -------HANDLERS------------
  const onSubmit = () => {
    if (!errors.information) {
      const fileName = file.name;

      // Check if the file extension is .xlsx
      if (fileName.endsWith(".xlsx")) {
        setIsXlxs(true);
        const formData = new FormData();
        formData.append("uploadedFile", file);
        formData.append("list_name", listName);

        const setShowModal5 = props.setShowModal5;
        dispatch(
          uploadContacts({ formData, setShowModal5, dispatch, fetchContacts })
        );
      } else {
        setIsXlxs(false);
      }
    }
  };

  const fileSelectHandler = (event) => {
    setFile(event.target.files[0]);
    // const selectedFile =; // Assuming only one file is selected
  };
  return (
    <div>
      <dialog id="contact_modal_7" className="modal">
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
                <div className=" w-full max-w-xs">
                  <div className="input input-bordered input-primary bg-white flex items-center h-8">
                    <SearchIcon className="text-black me-1 sm:me-2 " />
                    <input
                      {...register("selectList", { required: true })}
                      type="text"
                      aria-label="Search List"
                      placeholder="Search List"
                      value={listName}
                      onChange={(e) => setListName(e.target.value)}
                      className="bg-white w-full text-black "
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
                  {...register("selectFile", { required: true })}
                  type="file"
                  aria-label="Select File"
                  className="file-input file-input-bordered file-input-warning w-full max-w-xs bg-white mt-5"
                  onChange={fileSelectHandler}
                />
              </div>
              {!isXlxs ? (
                <p className="text-center text-red-500 font-semibold mt-1">
                  Selected file is not an .xlsx file.
                </p>
              ) : null}
              {errors.selectFile && (
                <p className="text-center text-red-500 font-semibold mt-1">
                  Please Select a File
                </p>
              )}
            </div>
            <div className="flex  justify-center">
              <ContactTable />
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

export default ContactModal5;
