import "./budget.css";
import Table from "./Table.jsx";
import Donut from "./Donut.jsx";
import Bar from "./Bar-chart.jsx";
import NewCategory from "./NewCategory";
import NewCatForm from "./NewCatForm";
import { useState } from "react";

const Budget = ({
  categories,
  currentTab,
  showNewCatForm,
  isNewCatSelected,
}) => {
  const [isCatSelected, setIsCatSelected] = useState(false);

  const handleEditCat = () => {
    setIsCatSelected(true);
    console.log("Edit has been selected");
  };

  const handleDeleteClick = () => {
    console.log("Delete has been clicked");
  };

  return (
    <>
      <div className="Budget">
        {currentTab === "progress" ? (
          <Bar categories={categories} currentTab={currentTab} />
        ) : (
          <Donut categories={categories} currentTab={currentTab} />
        )}
        {/* <Donut categories={categories} currentTab={currentTab} /> */}
        {isNewCatSelected ? (
          <NewCatForm />
        ) : (
          <Table
            categories={categories}
            currentTab={currentTab}
            handleEditCat={handleEditCat}
          />
        )}

        <NewCategory showNewCatForm={showNewCatForm} />
      </div>
    </>
  );
};

export default Budget;
