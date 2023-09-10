import { AiOutlineDownload } from "react-icons/ai";
import { TbTemperatureCelsius } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { BsMoisture } from "react-icons/bs";

import SensorCard from "../components/SensorCard";

const sensors = [
  {
    name: "Temperature",
    data: 0,
    icon: <TbTemperatureCelsius size={40} className="text-slate-500 text-opacity-40" />,
    borderColor: "border-l-sky-500",
  },
  {
    name: "Humidity",
    data: 0,
    icon: <WiHumidity size={40} className="text-slate-500 text-opacity-40" />,
    borderColor: "border-l-orange-500",
  },
  {
    name: "Moisture",
    data: 0,
    icon: <BsMoisture size={30} className="text-slate-500 text-opacity-40" />,
    borderColor: "border-l-rose-950",
  },
  {
    name: "pH",
    data: 0,
    icon: <BsMoisture size={30} className="text-slate-500 text-opacity-40" />,
    borderColor: "border-l-yellow-500",
  },
];

const Dashboard = () => {
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

        <section id="sensor" className="flex flex-wrap w-full gap-6 lg:gap-0">
          {sensors.map((sensor, index) => {
            return (
              <>
                <SensorCard key={index} name={sensor.name} data={sensor.data} icon={sensor.icon} borderColor={sensor.borderColor} />
              </>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
