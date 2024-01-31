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

  const handleDeleteClick = () => {
    console.log("Delete has been clicked");
  };

  const showForms = (isCatSelected, isNewCatSelected) => {
    if (isCatSelected) {
      return <NewCatForm addNewCategory={addNewCategory} />;
    } else if (isNewCatSelected) {
      return (
        <UpdateCatForm
          handleUpdateCategory={handleUpdateCategory}
          categoryToUpdate={categoryToUpdate}
        />
      );
    } else {
      return (
        <Table
          categories={categories}
          currentTab={currentTab}
          handleEditCat={handleEditCat}
        />
      );
    }
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
        {showForms(isCatSelected, isNewCatSelected)}
        <NewCategory showNewCatForm={showNewCatForm} />
      </div>
    </>
  );
};

export default Budget;
