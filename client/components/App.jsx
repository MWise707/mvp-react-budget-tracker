import React, { useEffect, useState, Components } from "react";

import Budget from "./Budget.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  const [categories, setcategories] = useState([]);
  const [currentTab, setTab] = useState("planned");
  const [isNewCatSelected, setNewCatSelected] = useState(false);
  const [newCategoryRequested, setNewCategoryRequested] = useState(false);
  // const [updateRequested, setUpdateRequested] = useState(false);
  const [idToUpdate, setidToUpdate] = useState(null);
  const [newCategory, setNewCategory] = useState({});
  // TODO Patch route logic
  const [updatedCategory, setUpdatedCategory] = useState({});
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

  const handleUpdateCategory = (id, fieldsToEdit) => {
    console.log("At app level- edit data: ", fieldsToEdit, id);
    setidToUpdate(id);
    setUpdatedCategory(fieldsToEdit);
  };

  const editCategory = (id, updatedCategory) => {
    const RequestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedCategory),
    };

    fetch(`/api/categories/${id}`, RequestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Updated category", data);
        // Fetch updated data after the patch
        fetch("/api/categories")
          .then((res) => res.json())
          .then((categories) => {
            setcategories(categories);
          })
          .catch((error) => {
            console.error("Error fetching categories", error);
          });
      })
      .then(() => {
        setUpdatedCategory({});
        setidToUpdate(null);
        setNewCatSelected(false);
        setNewCatSelected(false);
      })
      .catch((error) => {
        console.error("Error updating new category", error);
      });

    // fetch(`/api/categories/${id}`, RequestOptions)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("HTTP error! Status: ${response.status}");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("Updated category", data);
    //   })
    //   .then(() => {
    //     setUpdatedCategory({});
    //     setidToUpdate(null);
    //     setNewCatSelected(false);
    //     setNewCatSelected(false);
    //   })
    //   .catch((error) => {
    //     console.error("Error updating new category", error);
    //   });
  };

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((categories) => {
        setcategories(categories);
      })
      .catch((error) => {
        console.error("Error fetching categories", error);
      });
  }, [categories, idToUpdate, updatedCategory]);

  // Check if newCategory has been requested and if newCategory exists
  useEffect(() => {
    if (newCategoryRequested && newCategory) {
      addCatToDB(newCategory);
    }
  }, [newCategoryRequested, newCategory]);

  useEffect(() => {
    if (idToUpdate && Object.keys(updatedCategory).length > 0) {
      editCategory(idToUpdate, updatedCategory);
    }
  }, [idToUpdate, updatedCategory]);

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
        handleUpdateCategory={handleUpdateCategory}
      />
      <Footer />
    </main>
  );
};

export default App;
