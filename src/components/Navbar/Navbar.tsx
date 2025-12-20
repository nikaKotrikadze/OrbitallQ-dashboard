import { useState } from "react";
import "./Navbar.css";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosRadio } from "react-icons/io";
import { IoSettingsOutline, IoServerOutline } from "react-icons/io5";
import { LuSatellite } from "react-icons/lu";
import { NavLink } from "react-router-dom";

interface NavItem {
  path: string;
  label: string;
  icon: any;
}

const Navbar = ({ children }: { children?: React.ReactNode }) => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const navItems: NavItem[] = [
    { path: "dashboard", label: "Dashboard", icon: <MdOutlineDashboard /> },
    { path: "satellites", label: "Satellites", icon: <LuSatellite /> },
    { path: "stations", label: "Stations", icon: <IoIosRadio /> },
    { path: "missions", label: "Missions", icon: <LuSatellite /> },
    { path: "datasharing", label: "Data Sharing", icon: <IoServerOutline /> },
    { path: "admin", label: "Admin", icon: <IoSettingsOutline /> },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>OrbitallQ</h2>
      </div>
      <ul className="navbar-menu">
        {navItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            className={({ isActive }) =>
              `navbar-item ${isActive ? "active" : ""}`
            }
            end={item.path === "/dashboard"}
            onClick={() => setActiveItem(item.path)}
          >
            <div className="navbar-icon">{item.icon}</div>
            <div className="navbar-label">{item.label}</div>
          </NavLink>
        ))}
      </ul>
      <main>{children}</main>
    </nav>
  );
};

export default Navbar;
