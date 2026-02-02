import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-content">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
