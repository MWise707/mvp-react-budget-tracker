import Table from "./Table.jsx";
import Donut from "./Chart.jsx";

const Budget = ({ categories, currentTab }) => (
  <>
    {console.log(categories)}
    <div className="Budget">
      <Donut categories={categories} currentTab={currentTab} />
      <Table categories={categories} currentTab={currentTab} />
    </div>
  </>
);

export default Budget;
