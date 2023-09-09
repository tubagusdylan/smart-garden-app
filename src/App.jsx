import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Control from "./pages/Control";
import SideBar from "./components/SideBar";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <div>
        <SideBar />
      </div>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/control" element={<Control />} />
        <Route path="/setting" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
