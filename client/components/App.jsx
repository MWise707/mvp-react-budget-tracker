import React, { useEffect, useState, Components } from "react";

import Budget from "./Budget.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  const [categories, setcategories] = useState([]);
  const [currentTab, setTab] = useState("planned");
  const [isNewCatSelected, setNewCatSelected] = useState(false);
  const [series, setSeries] = useState();
  const tabOptions = ["Planned", "Spent", "Progress"];

  const showNewCatForm = () => {
    console.log("Handle new category at app level");
    setNewCatSelected(true);
  };

  const changeTabs = (tab) => {
    console.log("Running App level Function: changeTabs to", tab);
    setTab(tab.toLowerCase());
  };

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((categories) => {
        setcategories(categories);
      });
  }, []);

  // useEffect(
  //   ({ name, planned, spent, isDiscretionary }) => {
  //     const RequestOptions = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ name, planned, spent, isDiscretionary }),
  //     };
  //     fetch("/api/categories", requestionOptions)
  //       .then((response) => response.json())
  //       .then((data) => console.log(data));
  //   },
  //   [categories]
  // );

  /* Tab Functionality will share state with budget */

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
      />
      <Footer />
    </main>
  );
};

export default App;
