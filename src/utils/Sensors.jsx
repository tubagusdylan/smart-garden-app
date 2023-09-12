import { TbTemperatureCelsius } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { BsMoisture } from "react-icons/bs";

export const sensors = [
  {
    id: 1,
    name: "Temperature",
    data: 0,
    icon: <TbTemperatureCelsius size={40} className="text-slate-500 text-opacity-40" />,
    borderColor: "border-l-sky-500",
    chartColor: "#0ea5e9",
    msgArray: [],
    timeArray: [],
  },
  {
    id: 2,
    name: "Humidity",
    data: 0,
    icon: <WiHumidity size={40} className="text-slate-500 text-opacity-40" />,
    borderColor: "border-l-orange-500",
    chartColor: "#f97316",
    msgArray: [],
    timeArray: [],
  },
  {
    id: 3,
    name: "Moisture",
    data: 0,
    icon: <BsMoisture size={30} className="text-slate-500 text-opacity-40" />,
    borderColor: "border-l-rose-950",
    chartColor: "#4c0519",
    msgArray: [],
    timeArray: [],
  },
  {
    id: 4,
    name: "pH",
    data: 0,
    icon: <BsMoisture size={30} className="text-slate-500 text-opacity-40" />,
    borderColor: "border-l-yellow-500",
    chartColor: "#eab308",
    msgArray: [],
    timeArray: [],
  },
];
