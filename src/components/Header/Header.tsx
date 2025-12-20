import "./Header.css";
import { useLocation } from "react-router-dom";
import Select from "react-select";

const options = [
  { value: "admin", label: "Admin" },
  { value: "analyst", label: "Analyst" },
  { value: "manager", label: "Manager" },
];

const routeTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/satellites": "Satellites",
  "/stations": "Stations",
  "/missions": "Missions",
  "/datasharing": "Data Sharing",
  "/admin": "Admin",
};

const Header = () => {
  const location = useLocation();

  const title = routeTitles[location.pathname] ?? "Dashboard";

  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>

      <div className="header-right">
        <span className="role-label">Role:</span>
        <Select defaultValue={options[0]} options={options} />
      </div>
    </header>
  );
};

export default Header;
