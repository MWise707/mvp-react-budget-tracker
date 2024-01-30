import React, { useEffect, useState, Components } from "react";

import Budget from "./Budget.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  const [categories, setcategories] = useState([]);
  const [currentTab, setTab] = useState("planned");
  const [isNewCatSelected, setNewCatSelected] = useState(false);
  const [newCategoryRequested, setNewCategoryRequested] = useState(false);
  // const [series, setSeries] = useState();
  const [newCategory, setNewCategory] = useState({});
  const tabOptions = ["Planned", "Spent", "Progress"];

  const changeTabs = (tab) => {
    console.log("Running App level Function: changeTabs to", tab);
    setTab(tab.toLowerCase());
  };

  const showNewCatForm = () => {
    console.log("Handle new category at app level");
    setNewCatSelected(true);
  };

  const addNewCategory = (userNewCat) => {
    setNewCatSelected(false);
    setNewCategoryRequested(true);
    setNewCategory(userNewCat);
  };

  const addCatToDB = (newCategory) => {
    const RequestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCategory),
    };

    fetch("/api/categories", RequestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("New category added: ", data);
        // how to re-render page
      })
      .catch((error) => {
        console.error("Error adding new category", error);
      });
  };

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((categories) => {
        setcategories(categories);
      });
  }, [categories]);

  // Check if newCategory has been requested and if newCategory exists
  useEffect(() => {
    if (newCategoryRequested && newCategory) {
      addCatToDB(newCategory);
    }
  }, [newCategoryRequested, newCategory]);

  return (
    <main>
      <Header
        currentTab={currentTab}
        handleTabSeletion={changeTabs}
        tabOptions={tabOptions}
      />
      <Budget
        categories={categories}
        currentTab={currentTab}
        showNewCatForm={showNewCatForm}
        isNewCatSelected={isNewCatSelected}
        addNewCategory={addNewCategory}
      />
      <Footer />
    </main>
  );
};

export default App;
