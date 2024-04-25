const ContactModal1 = (props) => {
  return (
    <>
      <dialog id="contact_modal_3" className="modal">
        <div className="modal-box bg-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <p className="text-black text-center text-lg sm:text-xl font-bold">
            Create A Contact
          </p>
          <div className="flex justify-around  my-10">
            <div
              className="  bg-violet-100 p-4 py-8  rounded-lg mx-1 w-36 cursor-pointer"
              onClick={() => {
                props.setShowModal1(false);
                document.getElementById("contact_modal_4").showModal();
              }}
            >
              <p className="text-center text-black font-medium">
                Add New Contacts In New List
              </p>
            </div>
            <div
              className="  bg-violet-100 p-4 py-8  rounded-lg w-36 cursor-pointer"
              onClick={() => {
                props.setShowModal1(false);
                document.getElementById("contact_modal_5").showModal();
              }}
            >
              <p className="text-center text-black font-medium">
                Add New Contacts In Existing List
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ContactModal1;
