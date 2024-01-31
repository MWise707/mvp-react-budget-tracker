import "./budget.css";
import Table from "./Table.jsx";
import Donut from "./Donut.jsx";
import Bar from "./Bar-chart.jsx";
import NewCategory from "./NewCategory";
import NewCatForm from "./NewCatForm";
import { useState } from "react";
import UpdateCatForm from "./UpdateCatForm";

const Budget = ({
  categories,
  currentTab,
  showNewCatForm,
  isNewCatSelected,
  addNewCategory,
  handleUpdateCategory,
}) => {
  const [isCatSelected, setIsCatSelected] = useState(false);
  const [categoryToUpdate, setCategoryToUpdate] = useState({});

  const handleEditCat = (category) => {
    setIsCatSelected(true);
    setCategoryToUpdate(category);
    console.log("Edit has been selected");
  };

  const resetChartsOnSubmit = () => {
    setIsCatSelected(false);
  }

  const handleDeleteClick = () => {
    console.log("Delete has been clicked");
  };

  const showForms = (
    isCatSelected,
    isNewCatSelected,
    currentTab,
    categories
  ) => {
    if (isNewCatSelected) {
      return <NewCatForm addNewCategory={addNewCategory} />;
    } else if (isCatSelected) {
      return (
        <UpdateCatForm
          handleUpdateCategory={handleUpdateCategory}
          categoryToUpdate={categoryToUpdate}
          resetChartsOnSubmit={resetChartsOnSubmit}
        />
      );
    } else {
      return showCharts(currentTab, categories);
    }
  };

  const showCharts = (currentTab, categories) => {
    if (currentTab === "progress") {
      return <Bar categories={categories} currentTab={currentTab} />;
    } else {
      return <Donut categories={categories} currentTab={currentTab} />;
    }
  };

  return (
    <>
      <div className="Budget">
        {showForms(isCatSelected, isNewCatSelected, currentTab, categories)}
        <Table
          categories={categories}
          currentTab={currentTab}
          handleEditCat={handleEditCat}
        />
        {/* {showForms(isCatSelected, isNewCatSelected)} */}
        <NewCategory showNewCatForm={showNewCatForm} />
      </div>
    </>
  );
};

export default Budget;
