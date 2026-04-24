"use client";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Chart = () => {
  const [state, setState] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      theme: {
        mode: "light",
      },
      dataLabels: {
        style: {
          fontSize: "13px",
        },
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      colors: ["#6366F1", "#22C55E", "#F59E0B", "#EF4444", "#3B82F6"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return (
    <div className="fixed bottom-0 w-full z-100">
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="pie"
          width={380}
        />
      </div>
      <div id="html-dist"></div>
      <button className="mx-auto w-full py-5 bg-red-400">click</button>
    </div>
  );
};

export default Chart;
