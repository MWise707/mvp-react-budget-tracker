import { useState } from "react";
import "./UpdateCatForm.css";

const UpdateCatForm = ({
  handleUpdateCategory,
  categoryToUpdate,
  resetChartsOnSubmit,
}) => {
  const [updatedCategory, setupdatedCategory] = useState({
    name: categoryToUpdate?.name || "",
    planned: categoryToUpdate?.planned || "",
    spent: categoryToUpdate?.spent || "",
    isdiscretionary: categoryToUpdate?.isdiscretionary || false,
  });

  const recordUserInputs = (event, id) => {
    setupdatedCategory({ ...updatedCategory, [id]: event.target.value });
  };

  const handleRadioChange = (event) => {
    setupdatedCategory({
      ...updatedCategory,
      isdiscretionary: event.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateCategory(categoryToUpdate.category_id, updatedCategory);
    resetChartsOnSubmit();
  };

  return (
    <>
      <div className="new-cat-form">
        <form className="form">
          Edit {categoryToUpdate.name}
          <div className="form-row">
            <label htmlFor="name-update" className="label">
              Category Name
            </label>
            <input
              className="input"
              id="name-update"
              type="text"
              onChange={(event) => recordUserInputs(event, "name")}
              placeholder={categoryToUpdate?.name || ""}
            />
          </div>
          <div className="form-row">
            <label htmlFor="planned-update" className="label">
              Planned expenditures:
            </label>
            <input
              className="input"
              id="planned-update"
              type="number"
              placeholder={categoryToUpdate?.planned || ""}
              onChange={(event) => recordUserInputs(event, "planned")}
            />
          </div>
          <div className="form-row">
            <label htmlFor="spent-update" className="label">
              Spent? If none: enter 0
            </label>
            <input
              className="input"
              id="spent-update"
              type="number"
              placeholder={categoryToUpdate?.spent || ""}
              onChange={(event) => recordUserInputs(event, "spent")}
            />
          </div>
          <div className="form-row">
            <label htmlFor="true-update">
              Select if discretionary spending:{" "}
            </label>
            <input
              className="input"
              type="radio"
              id="true-update"
              checked={categoryToUpdate?.isdiscretionary || false}
              onChange={handleRadioChange}
            />
          </div>
          <input
            className="submit"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          />
        </form>
      </div>
    </>
  );
};

export default UpdateCatForm;
