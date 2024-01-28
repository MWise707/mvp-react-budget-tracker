import Table from "./Table.jsx";
import Chart from "./Chart.jsx";

const Budget = ({ categories, currentTab }) => (
  <>
    {console.log(currentTab)}
    <div className="Budget">
    <Chart categories={categories} currentTab={currentTab}/>
    <Table categories={categories} currentTab={currentTab} />
    </div>
  </>
);

export default Budget;
