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
  const [subcribeTopic, setSubcribeTopic] = useState("smartgarden/iot/tebe");
  const [publishTopic, setPublishTopic] = useState("smartgarden/iot");
  const [msgPayload, setMsgPayload] = useState({});

  const handleClientConnect = (url, option) => {
    setMqttStatus("connecting");
    setClient(connect(url, option));
  };

  const handleClientDisconnect = () => {
    client?.end(() => {
      setMqttStatus("disconnect");
      setClient(null);
    });
  };

  const handleSubcribeTopic = (topic) => {
    setSubcribeTopic(topic);
  };

  const handlePublishTopic = (topic) => {
    setPublishTopic(topic);
  };

  useEffect(() => {
    client?.on("connect", () => {
      setMqttStatus("connected");
      client.subscribe(subcribeTopic, { qos: 2 }, (error) => {
        if (error) return;
      });
    });
    client?.on("error", (err) => {
      console.error("Connection error: ", err);
      client.end();
    });
    client?.on("reconnect", () => {
      setMqttStatus("Reconnecting");
    });
  }, [client, subcribeTopic]);

  useEffect(() => {
    client?.on("message", (topic, message) => {
      const payload = JSON.parse(message);
      console.log(payload);
      setMsgPayload(payload);
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
          <div className="mt-32 lg:mt-[66px] px-4 lg:p-4 lg:w-[80%]">
            <Routes>
              <Route path="/" element={<Dashboard payload={msgPayload} />} />
              <Route path="/control" element={<Control />} />
              <Route path="/setting" element={<Settings subcribeTopic={subcribeTopic} publishTopic={publishTopic} onChangeSubcribeTopic={handleSubcribeTopic} onChangePublishTopic={handlePublishTopic} />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
