import { Outlet } from "react-router-dom";
import Header from "../CommonRoute/Header/Header";
import Footer from "../CommonRoute/Footer/Footer";

const Layout = () => {
  return (
    <div className="ubuntu">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
