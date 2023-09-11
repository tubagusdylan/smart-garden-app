/* eslint-disable react-hooks/exhaustive-deps */
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
// import { useState, useEffect } from "react";
import LineChart from "./LineChart";

Chart.register(CategoryScale);

/* eslint-disable react/prop-types */
const ChartCard = ({ name, message, timeArray, chartColor }) => {
  /*
    publish json (ini setelah subcribe, diparsing dulu agar formatnya menjadi begini)-> datas: {
        msg,
        updatedAt
    }
  */

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
