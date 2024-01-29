import React, { Component } from "react";
import Chart from "react-apexcharts";

class Donut extends Component {
  constructor(props) {
    super(props);

    const { categories, currentTab } = props;
    console.log("Categories at chart", categories);
    const categoryLabels = categories.map((category) => category.name);
    const seriesPlanned = categories.map((category) => category.planned);

    this.state = {
      options: { labels: categoryLabels },
      series: seriesPlanned,
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

export default Donut;
