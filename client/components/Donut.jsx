import "./donut.css";
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const Donut = ({ categories, currentTab }) => {
  const [chartData, setChartData] = useState({
    options: {},
    series: [],
  });

  const updateChartData = () => {
    const categoryLabels = categories.map((category) => category.name);
    const data =
      currentTab === "planned"
        ? categories.map((category) => category.planned)
        : categories.map((category) => category.spent);

    setChartData({
      options: {
        labels: categoryLabels,
        title: { text: currentTab.toUpperCase() },
      },
      series: data,
    });
  };

  React.useEffect(() => {
    updateChartData();
  }, [currentTab, categories]);

  return (
    <>
      <div className="donut-wrapper">
        <div className="donut">
          <Chart
            className="chart"
            options={chartData.options}
            series={chartData.series}
            type="donut"
            width="380"
          />
        </div>
      </div>
    </>
  );
};

export default Donut;
