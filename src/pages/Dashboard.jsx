/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { AiOutlineDownload } from "react-icons/ai";
import SensorCard from "../components/SensorCard";
import ChartCard from "../components/ChartCard";
import { sensors } from "../utils/Sensors";

const Dashboard = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl lg:text-3xl">Dashboard</h1>
          <button className="bg-teal-500 py-1 px-3 text-white rounded-full hover:bg-teal-400 active:bg-teal-800 flex gap-2 items-center">
            <AiOutlineDownload />
            CSV
          </button>
        </header>

        <section id="sensor" className="flex flex-wrap w-full gap-6 md:gap-0 mb-10">
          {sensors.map((sensor) => {
            return <SensorCard key={sensor.id} name={sensor.name} data={sensor.data} icon={sensor.icon} borderColor={sensor.borderColor} />;
          })}
        </section>

        <section id="chart-sensor" className="flex flex-wrap w-full gap-6 md:gap-0">
          {sensors.map((sensor) => {
            return <ChartCard key={sensor.id} message={sensor.msgArray} timeArray={sensor.timeArray} name={sensor.name} chartColor={sensor.chartColor} />;
          })}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
