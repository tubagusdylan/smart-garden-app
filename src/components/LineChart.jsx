/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";

const LineChart = ({ chartData }) => {
  return (
    <>
      <Line data={chartData} />
    </>
  );
};

export default LineChart;
