import { useMediaQuery } from "react-responsive";

import MainNavbar from "../MainNavbar/MainNavbar";
import MainSideDrawer from "../MainSideDrawer/MainSideDrawer";

const MainHeader = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return isMobile ? <MainSideDrawer /> : <MainNavbar />;
};

export default MainHeader;
