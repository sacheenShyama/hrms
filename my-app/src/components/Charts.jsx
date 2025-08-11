import React, { useState } from "react";
import Chart from "react-apexcharts";

const Charts = () => {
  const months = [
    "Jan",
    "Fab",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const seriesData = [
    {
      name: "Developer",
      data: [100, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    { name: "Sales", data: [40, 40, 40, 40, 90, 90, 40, 40, 40, 40, 40, 40] },
    { name: "Support", data: [5, 20, 100, 10, 20, 50, 20, 80, 30, 20, 90, 20] },
    {
      name: "Designer",
      data: [10, 80, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    {
      name: "Project Manager",
      data: [20, 20, 40, 20, 20, 20, 20, 20, 20, 20, 20, 100],
    },
  ];

  const [chartData] = useState({
    options: {
      chart: {
        type: "area",
        toolbar: { show: true },
      },
      title: {
        text: "Over all Employee Performance",
        align: "center",
      },
      dataLabels: { enabled: false },
      stroke: { curve: "smooth" },
      xaxis: { categories: months },
      yaxis: { min: 0 },
      tooltip: { enabled: true },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },
    },
    series: seriesData,
  });

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="area"
      width="100%"
      height="100%"
    />
  );
};

export default Charts;
