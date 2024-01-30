import "./bar-chart.css";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const Bar = ({ categories, currentTab }) => {
  const [barData, setBarData] = useState({
    series: [],
    options: {},
  });

  const updateBarData = () => {
    // const categoryLabels = categories.map((category) => category.map.name);

    setBarData({
      series: [
        {
          name: "Planned",
          group: "budget",
          data: categories.map((category) => category.planned),
        },
        {
          name: "Spent",
          group: "actual",
          data: categories.map((category) => category.spent),
        },
        {
          name: "Remaining",
          group: "budget",
          data: categories.map((category) =>
            category.planned > category.spent
              ? category.planned - category.spent
              : 0
          ),
        },
        {
          name: "Overspent",
          group: "actual",
          data: categories.map((category) =>
            category.spent > category.planned
              ? category.spent - category.planned
              : 0
          ),
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
        },
        dataLabels: {
          formatter: (val) => {
            return "$" + val;
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        xaxis: {
          categories: categories.map((category) => category.name),
          labels: {
            formatter: (val) => {
              return "$" + val;
            },
          },
        },
        fill: {
          opacity: .75,
        },
        colors: ["#ffff00", "#008FFB", "#32CD32", "#FF0000"],
        legend: {
          position: "top",
          horizontalAlign: "left",
        },
      },
    });
  };

  React.useEffect(() => {
    updateBarData();
  }, [categories]);

  return (
    <>
      <div className="bar-chart-wrapper">
        <div className="bar-chart">
          <div id="chart">
            <ReactApexChart
              options={barData.options}
              series={barData.series}
              type="bar"
              height={350}
            />
          </div>
          <div id="html-dist"></div>
        </div>
      </div>
    </>
  );
};

export default Bar;
