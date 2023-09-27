/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Control from "./pages/Control";
import Settings from "./pages/Settings";
import Tutorial from "./pages/Tutorial";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { connect } from "mqtt";
import { sensors } from "./utils/Sensors";

function App() {
  const [client, setClient] = useState(null);
  const [mqttStatus, setMqttStatus] = useState("disconnect");
  const [subcribeTopic, setSubcribeTopic] = useState("smartgarden/iot/tebe");
  const [publishTopic, setPublishTopic] = useState("smartgarden/iot");
  const [msgPayload, setMsgPayload] = useState({});
  const [actuators, setActuators] = useState([
    {
      id: 1,
      name: "Actuator 1",
      topic: "actuator1",
      status: "OFF",
    },
    {
      id: 2,
      name: "Actuator 2",
      topic: "actuator2",
      status: "OFF",
    },
    {
      id: 3,
      name: "Actuator 3",
      topic: "actuator3",
      status: "OFF",
    },
    {
      id: 4,
      name: "Actuator 4",
      topic: "actuator4",
      status: "OFF",
    },
  ]);

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

  const handleActuatorChange = (id) => {
    let msg;
    let newActuator;

    const index = actuators.findIndex((value) => {
      return value.id === id;
    });

    const currentActuator = actuators[index];

    if (currentActuator.status === "OFF") {
      msg = JSON.stringify({ payload: 1 });
      newActuator = { ...currentActuator, status: "ON" };
      actuators.splice(index, 1, newActuator);
      client?.publish(`${publishTopic}/${currentActuator.topic}`, msg);
      setActuators(actuators);
      return;
    }

    msg = JSON.stringify({ payload: 0 });
    newActuator = { ...currentActuator, status: "OFF" };
    actuators.splice(index, 1, newActuator);
    client?.publish(`${publishTopic}/${currentActuator.topic}`, msg);
    setActuators(actuators);
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
      let payload = JSON.parse(message);
      setMsgPayload(payload); // agar dilakukan rerender

      sensors[0].data = payload.temp;
      sensors[0].msgArray.push(payload.temp);
      sensors[0].timeArray.push(payload.updatedAt);

      sensors[1].data = payload.hum;
      sensors[1].msgArray.push(payload.hum);
      sensors[1].timeArray.push(payload.updatedAt);

      sensors[2].data = payload.moisture;
      sensors[2].msgArray.push(payload.moisture);
      sensors[2].timeArray.push(payload.updatedAt);

      sensors[3].data = payload.pH;
      sensors[3].msgArray.push(payload.pH);
      sensors[3].timeArray.push(payload.updatedAt);
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
              <Route path="/" element={<Dashboard />} />
              <Route path="/control" element={<Control onActuatorChange={handleActuatorChange} actuators={actuators} publishTopic={publishTopic} />} />
              <Route path="/setting" element={<Settings subcribeTopic={subcribeTopic} publishTopic={publishTopic} onChangeSubcribeTopic={handleSubcribeTopic} onChangePublishTopic={handlePublishTopic} />} />
              <Route path="/tutorial" element={<Tutorial />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
