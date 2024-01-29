import "./DonutPlanned.css";
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const DonutSpent = ({ categories, currentTab }) => {
  const [chartData, setChartData] = useState({
    options: {},
    series: [],
    labels: [],
  });

  const updateChartData = () => {
    const categoryLabels = categories.map((category) => category.name);
    const data =
      currentTab === "planned"
        ? categories.map((category) => category.planned)
        : categories.map((category) => category.spent);

    setChartData({
      options: { labels: categoryLabels },
      series: data,
      labels: categoryLabels,
    });
  };

  React.useEffect(() => {
    updateChartData();
  }, [currentTab, categories]);

  return (
    <div className="donut">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        width="380"
      />
    </div>
  );
};

export default DonutSpent;

/*
class DonutSpent extends Component {
  constructor(props) {
    super(props);

    const { categories, currentTab } = props;
    console.log("Categories at chart", categories);
    const categoryLabels = categories.map((category) => category.name);
    const seriesSpent = categories.map((category) => category.spent);

    this.state = {
      options: { labels: categoryLabels },
      series: seriesSpent,
      labels: categoryLabels,
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="380"
        />
      </div>
    );
  }
}
*/
