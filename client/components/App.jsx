import React, { useEffect, useState } from "react";
import Budget from "./Budget.jsx";
import Header from "./Header.jsx";

const App = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((categories) => {
        setcategories(categories);
      });
  }, []);

  return (
    <main>
      <Header />
      <Budget categories={categories} />
    </main>
  );
};

export default App;
