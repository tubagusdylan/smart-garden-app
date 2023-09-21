/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { CategoryScale, LineElement, LinearScale, PointElement } from "chart.js";
import Chart from "chart.js/auto";
import LineChart from "./LineChart";

Chart.register(CategoryScale, LineElement, LinearScale, PointElement);

const ChartCard = ({ name, message, timeArray, chartColor }) => {
  let chartData = {
    labels: timeArray,
    datasets: [
      {
        label: name,
        data: message,
        borderColor: chartColor,
        borderWidth: 2,
      },
    ],
  };

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
