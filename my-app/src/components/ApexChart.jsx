import React, { useState } from "react";
import Chart from "react-apexcharts";

const ApexChart = () => {
  const [chartData] = useState({
    options: {
      //   markers: {
      //     size: 0,
      //   },
      stroke: {
        curve: "smooth",
      },

      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
      //   tooltip: {
      //     enabled: true,
      //   },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "series-2",
        data: [70, 10, 25, 70, 29, 10, 80, 51],
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
  });

  return (
    <div className="app h-full">
      <div className="row h-full">
        <div className="mixed-chart h-full">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="area"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default ApexChart;
