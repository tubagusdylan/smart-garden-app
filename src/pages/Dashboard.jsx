/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { AiOutlineDownload } from "react-icons/ai";
import { TbTemperatureCelsius } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { BsMoisture } from "react-icons/bs";
import SensorCard from "../components/SensorCard";
import ChartCard from "../components/ChartCard";
import { useEffect } from "react";

const sensors = [
  {
    name: "Temperature",
    data: 0,
    icon: <TbTemperatureCelsius size={40} className="text-slate-500 text-opacity-40" />,
    borderColor: "border-l-sky-500",
    chartColor: "#0ea5e9",
    msgArray: [],
    timeArray: [],
  },
  {
    name: "Humidity",
    data: 0,
    icon: <WiHumidity size={40} className="text-slate-500 text-opacity-40" />,
    borderColor: "border-l-orange-500",
    chartColor: "#f97316",
    msgArray: [],
    timeArray: [],
  },
  {
    name: "Moisture",
    data: 0,
    icon: <BsMoisture size={30} className="text-slate-500 text-opacity-40" />,
    borderColor: "border-l-rose-950",
    chartColor: "#4c0519",
    msgArray: [],
    timeArray: [],
  },
  {
    name: "pH",
    data: 0,
    icon: <BsMoisture size={30} className="text-slate-500 text-opacity-40" />,
    borderColor: "border-l-yellow-500",
    chartColor: "#eab308",
    msgArray: [],
    timeArray: [],
  },
];

const Dashboard = ({ payload }) => {
  useEffect(() => {
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
  }, [payload]);

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-xl lg:text-2xl">Dashboard</h1>
          <button className="bg-teal-500 py-1 px-3 text-white rounded-full hover:bg-teal-400 active:bg-teal-800 flex gap-2 items-center">
            <AiOutlineDownload />
            CSV
          </button>
        </header>

        <section id="sensor" className="flex flex-wrap w-full gap-6 md:gap-0 mb-10">
          {sensors.map((sensor, index) => {
            return (
              <>
                <SensorCard key={index} name={sensor.name} data={sensor.data} icon={sensor.icon} borderColor={sensor.borderColor} />
              </>
            );
          })}
        </section>

        <section id="chart-sensor" className="flex flex-wrap w-full gap-6 md:gap-0">
          {sensors.map((sensor, index) => {
            return (
              <>
                <ChartCard key={index} message={sensor.msgArray} timeArray={sensor.timeArray} name={sensor.name} chartColor={sensor.chartColor} />
              </>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
