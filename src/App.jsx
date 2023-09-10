import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Control from "./pages/Control";
import SideBar from "./components/SideBar";
import Settings from "./pages/Settings";
import TopBar from "./components/TopBar";
import { connect } from "mqtt";

function App() {
  const [client, setClient] = useState(null);
  const [mqttStatus, setMqttStatus] = useState("disconnect");

  const handleClientConnect = (url, option) => {
    setMqttStatus("connecting");
    const clientMqtt = connect(url, option);
    setClient(clientMqtt);
  };

  const handleClientDisconnect = () => {
    if (client) {
      client.end(() => {
        setMqttStatus("disconnect");
      });
    }
  };

  useEffect(() => {
    client?.on("connect", () => {
      setMqttStatus("connected");
      console.log("mqtt connected");
    });
  }, [client]);

  return (
    <>
      <div>
        <TopBar connect={handleClientConnect} status={mqttStatus} disconnect={handleClientDisconnect} />
        <div className="lg:flex w-full">
          <div className="hidden lg:block lg:w-[20%]">
            <SideBar />
          </div>
          <div className="mt-32 lg:mt-[66px] px-4 lg:px-0 lg:w-[80%]">
            <Routes>
              <Route path="/" element={<Dashboard client={client} />} />
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
