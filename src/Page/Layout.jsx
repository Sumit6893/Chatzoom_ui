
import { Outlet } from "react-router-dom";
import Navbar from "../Components/common/Navbar";
import Footer from "../Components/common/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
