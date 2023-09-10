import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { useState } from "react";
import LineChart from "./LineChart";

Chart.register(CategoryScale);

/* eslint-disable react/prop-types */
const ChartCard = ({ name, datas, borderColor }) => {
  /*
    publish json (ini setelah subcribe, diparsing dulu agar formatnya menjadi begini)-> datas: {
        msg,
        updatedAt
    }
  */
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: name,
        data: [],
        borderColor: borderColor,
        borderWidth: 2,
      },
    ],
  });

  setInterval(() => {
    setChartData(datas);
  }, 5000);

  return (
    <>
      <div className="w-full lg:w-1/2">
        <div className={`w-full lg:w-[95%] lg:mb-8 mx-auto shadow-md rounded-md`}>
          <header className="w-full bg-slate-50 py-3 px-4 overflow-hidden font-semibold text-teal-500">{name}</header>
          <LineChart chartData={chartData} />
        </div>
      </div>
    </>
  );
};

export default ChartCard;
