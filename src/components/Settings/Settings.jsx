import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchCurrentUser } from "../../store/features/users/usersSlice";

import Header from "../Header/Header";
import Spinner from "../Spinner/Spinner";
import AccountSettings from "../AccountSettings/AccountSettings";

const Settings = () => {
  // ------VARIABLES DECALARATIONS---------

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  // ----USE FEECTS----------
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, []);

  return (
    <div>
      <Header />
      {users.loading ? <Spinner /> : <AccountSettings />}
    </div>
  );
};

export default Settings;
