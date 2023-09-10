/* eslint-disable react/prop-types */
import SideBar from "./SideBar";

const TopBar = ({ connect, status, disconnect }) => {
  const url = "wss://broker.emqx.io:8084/mqtt";
  const option = {
    keepalive: 60,
    clientId: "emqx_react_" + Math.random().toString(16).substring(2, 8),
    protocolId: "MQTT",
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000, //ms
    connectTimeout: 30 * 1000, //ms
  };

  return (
    <>
      <div className="bg-white fixed top-0 right-0 overflow-hidden w-full lg:shadow-sm lg:w-[80%]">
        <div className="container mx-auto py-3 px-4 border-b-2 lg:border-none">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-lg lg:text-xl  text-teal-500">SmartGarden</h1>
            </div>
            <div className="flex items-center gap-5">
              <div className={`w-[20px] h-[20px] rounded-full ${status === "connected" ? "bg-green-400" : "bg-red-400"}`}></div>
              <span className="hidden lg:inline">Connected to broker: {status === "connected" ? <b>{url}</b> : ""}</span>
              {status === "connected" ? (
                <button className="py-2 px-4 bg-teal-500 rounded-full text-white hover:bg-teal-400 active:bg-teal-800" onClick={() => disconnect()}>
                  Disconnect
                </button>
              ) : (
                <button className="py-2 px-4 bg-teal-500 rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-teal-400 active:bg-teal-800" onClick={() => connect(url, option)} disabled={status === "connecting"}>
                  Connect
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default TopBar;
