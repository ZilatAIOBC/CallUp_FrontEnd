import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import CampaignIcon from "@mui/icons-material/Campaign";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import CallIcon from "@mui/icons-material/Call";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Logo from "../../utils/Images/logo.png";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "../../store/features/users/usersSlice";
import { toast } from "react-toastify";

export default function SwipeableTemporaryDrawer() {
  const token = localStorage.getItem("token");
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToDashboardHandler = () => {
    dispatch(fetchCurrentUser())
      .then(async (result) => {
        if (result.meta.requestStatus === "fulfilled") {
          if (result.payload.isSubscribed) {
            navigate("/agents");
          } else {
            toast.error("You are not subscribed to a plan.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
      //   className="bg-violet-200 h-screen"
    >
      <List className="flex flex-col items-center">
        <ListItem disablePadding className=" border-b-4 border-violet-950 p-2">
          <img src={Logo} alt="Logo Image" className="w-16 mx-2" />{" "}
        </ListItem>
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/">
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon className="text-violet-900" />
              </ListItemIcon>
              <p className=" p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-violet-900 ">
                Home
              </p>
              {/* <ListItemText primary="Home" /> */}
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/aboutus">
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon className="text-violet-900" />
              </ListItemIcon>
              <p className="p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-violet-900 ">
                About Us
              </p>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/features">
            <ListItemButton>
              <ListItemIcon>
                <CampaignIcon className="text-violet-900" />
              </ListItemIcon>
              <p className=" p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-violet-900 ">
                Features
              </p>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/solutions">
            <ListItemButton>
              <ListItemIcon>
                <EmojiObjectsIcon className="text-violet-900" />
              </ListItemIcon>
              <p className=" p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-violet-900 ">
                Solutions
              </p>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/pricing">
            <ListItemButton>
              <ListItemIcon>
                <MonetizationOnIcon className="text-violet-900" />
              </ListItemIcon>
              <p className=" p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-violet-900 ">
                Pricing
              </p>
            </ListItemButton>
          </Link>
        </ListItem>{" "}
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/contact">
            <ListItemButton>
              <ListItemIcon>
                <CallIcon className="text-violet-900" />
              </ListItemIcon>
              <p className=" p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-violet-900 ">
                Contact
              </p>
            </ListItemButton>
          </Link>
        </ListItem>
        <div className="flex mt-2">
          {token && token !== null ? (
            <button
              // to="/agents"
              onClick={goToDashboardHandler}
              className="text-black text-lg hover:text-gray-700"
            >
              Go To Dashboard <ArrowForwardIcon />
            </button>
          ) : (
            <>
              {" "}
              <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center  mx-2 sm:mx-5 ">
                <Link
                  to="/authentication/login"
                  className="xl:text-lg text-black  underline underline-offset-8 font-semibold hover:text-yellow-300  "
                >
                  Login
                </Link>
              </li>
              <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 lg:w-32 flex  items-center  mx-2 ">
                <Link
                  to="/authentication/signup"
                  className="xl:text-lg text-white font-semibold aai-gradient-outline-btn p-4 lg:px-8 rounded-full bg-black"
                >
                  Signup
                </Link>
              </li>
            </>
          )}
        </div>
      </List>
    </Box>
  );

  return (
    <div className="  z-20  ">
      <div className=" top-4 right-4">
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <div className=" flex w-screen justify-between">
              <Link to="/" className="flex justify-center items-center">
                <img src={Logo} alt="Logo Image" className="w-20  m-5   " />
              </Link>
              <Button onClick={toggleDrawer(anchor, true)} className="">
                <MenuIcon fontSize="large" className="text-white" />
              </Button>
            </div>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
