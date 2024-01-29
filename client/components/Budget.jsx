import Table from "./Table.jsx";
// import DonutPlanned from "./DonutPlanned.jsx";
import DonutSpent from "./DonutSpent.jsx";

const Budget = ({ categories, currentTab }) => {

  const handleEditClick = {

  }
  return (
    <>
      <div className="Budget">
        <DonutSpent categories={categories} currentTab={currentTab} />
        <Table categories={categories} currentTab={currentTab} />
      </div>
    </>
  );
};

export default Budget;
