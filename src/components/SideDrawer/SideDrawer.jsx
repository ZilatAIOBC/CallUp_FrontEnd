import * as React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ContactsIcon from "@mui/icons-material/Contacts";
import CampaignIcon from "@mui/icons-material/Campaign";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";

import Logo from "../../utils/Images/logo.png";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
        <ListItem disablePadding className=" border-b-4 border-violet-500 p-2">
          {/* <p className=" gradient-text text-lg font-bold">Call Up!</p> */}
          <img
            loading="lazy"
            src={Logo}
            alt="Logo Image"
            className="w-16 mx-2"
          />
          <div className="flex ">
            <p className="border-r-4 border-gray-400 px-2 ">
              <MessageIcon className="text-purple-400 mx-0.5 " />
              Ask Bot?
            </p>
            <p className="mx-2">
              <NotificationsIcon className="text-purple-400" />
            </p>
          </div>
        </ListItem>
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/agents">
            <ListItemButton>
              <ListItemIcon>
                <SupportAgentIcon className="text-violet-500" />
              </ListItemIcon>
              <p className=" p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-violet-500 ">
                Agents
              </p>
              {/* <ListItemText primary="Home" /> */}
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/contacts">
            <ListItemButton>
              <ListItemIcon>
                <ContactsIcon className="text-violet-500" />
              </ListItemIcon>
              <p className="p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-violet-500 ">
                Contacts
              </p>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/campaigns">
            <ListItemButton>
              <ListItemIcon>
                <CampaignIcon className="text-violet-500" />
              </ListItemIcon>
              <p className=" p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-violet-500 ">
                Campaigns
              </p>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/recordings">
            <ListItemButton>
              <ListItemIcon>
                <RecordVoiceOverIcon className="text-violet-500" />
              </ListItemIcon>
              <p className=" p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-violet-500 ">
                Recordings
              </p>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
          <Link to="/settings">
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon className="text-violet-500" />
              </ListItemIcon>
              <p className=" p-1 text-lg font-semibold  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-violet-500 ">
                Settings
              </p>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="  z-20  ">
      <div className=" top-4 right-4">
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <div className=" flex w-screen justify-between">
              <div className="flex justify-center items-center">
                <p className=" gradient-text text-lg font-bold ms-3">
                  Call Up!
                </p>
                <img src={Logo} alt="Logo Image" className="w-16  m-3 ms-0" />
              </div>
              <Button
                id="al"
                aria-label="Menu"
                onClick={toggleDrawer(anchor, true)}
                className=""
              >
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
