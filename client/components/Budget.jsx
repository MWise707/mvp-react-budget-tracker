import "./budget.css";
import Table from "./Table.jsx";
import Donut from "./Donut.jsx";
import Bar from "./Bar-chart.jsx";
import { useState } from "react";

const Budget = ({ categories, currentTab }) => {
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
        <Table
          categories={categories}
          currentTab={currentTab}
          handleEditCat={handleEditCat}
        />
      </div>
    </>
  );
};

export default Budget;
