import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Month",
    "Developer",
    "Sales",
    "support",
    "Designer",
    "Project Manager",
  ],
  ["Jan", 100, 40, 20, 10, 20],
  ["Fab", 10, 40, 20, 80, 20],
  ["Mar", 10, 40, 20, 10, 40],
  ["Apr", 10, 40, 20, 10, 20],
  ["May", 10, 90, 20, 10, 20],
  ["Jun", 10, 90, 20, 10, 20],
  ["Jul", 10, 40, 20, 10, 20],
  ["Aug", 10, 40, 80, 10, 20],
  ["Sep", 10, 40, 30, 10, 20],
  ["Oct", 10, 40, 20, 10, 20],
  ["Nov", 10, 40, 20, 10, 20],
  ["Dec", 10, 40, 20, 10, 100],
];

export const options = {
  title: "Over all Employee Performance",
  hAxis: { titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0, },
  chartArea: { width: "70%", height: "70%" },
};

export function Charts() {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
      
    />
  );
}
