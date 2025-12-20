import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Stations from "./components/pages/Stations/Stations";
import Missions from "./components/pages/Missions/Missions";
import Satellites from "./components/pages/Satellites/Satellites";
import DataSharing from "./components/pages/DataSharing/DataSharing";
import Admin from "./components/pages/Admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/satellites" element={<Satellites />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/datasharing" element={<DataSharing />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
