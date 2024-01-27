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

  const [currentTab, setTab] = useState('Planned');

  return (
    <main>
      <Header currentTab={currentTab}/>
      <Budget categories={categories} currentTab={currentTab}/>
      <Footer/>
    </main>
  );
};

export default App;
