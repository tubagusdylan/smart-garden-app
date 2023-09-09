import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Control from "./pages/Control";
import SideBar from "./components/SideBar";
import Settings from "./pages/Settings";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <div>
        <TopBar />
        <div className="lg:flex w-full">
          <div className="hidden lg:block lg:w-[20%]">
            <SideBar />
          </div>
          <div className="mt-32 lg:mt-[66px] px-4 lg:px-0 lg:w-[80%]">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/control" element={<Control />} />
              <Route path="/setting" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
