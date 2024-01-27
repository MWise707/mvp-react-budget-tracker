import React, { useEffect, useState } from "react";
import Budget from "./Budget.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((categories) => {
        setcategories(categories);
      });
  }, []);

  /* Tab Functionality will share state with budget */
  const [currentTab, setTab] = useState("Planned");
  const changeTabs = (tab) => {
    console.log("Running App level Function: changeTabs to", tab);
    setTab(tab);
  };
  const tabOptions = ["Planned", "Spent", "Progress"];

  return (
    <main>
      <Header
        currentTab={currentTab}
        handleTabSeletion={changeTabs}
        tabOptions={tabOptions}
      />
      <Budget categories={categories} currentTab={currentTab} />
      <Footer />
    </main>
  );
};

export default App;
