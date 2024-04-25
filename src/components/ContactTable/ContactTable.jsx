const ContactTable = () => {
  return (
    <div className="overflow-x-auto w-80 ">
      <table className="table border mt-2 border-black">
        {/* head */}
        <thead>
          <tr>
            <th className="text-black">name</th>
            <th className="text-black">email</th>
            <th className="text-black">phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="text-black text-xs">John</th>
            <th className="text-black text-xs">john@gmail.com</th>
            <th className="text-black text-xs">+13964564252</th>
          </tr>
        </tbody>
      </table>
      <p className="text-xs text-red-500 font-semibold">
        This is the standard format for uploading file. If file didn't follow
        this format Contacts will not be created
      </p>
    </div>
  );
};

export default ContactTable;
