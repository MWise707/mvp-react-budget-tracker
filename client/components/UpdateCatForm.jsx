import { useState } from "react";
import "./UpdateCatForm.css";

const UpdateCatForm = ({ handleUpdateCategory, categoryToUpdate }) => {
  const [updatedCategory, setupdatedCategory] = useState({
    name: "",
    planned: "",
    spent: "",
    isdiscretionary: false,
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
    handleUpdateCategory(updatedCategory);
  };

  return (
    <>
      <div className="new-cat-form">
        <form className="form">
          <div className="form-row">
            <label htmlFor="name" className="label">
              Category Name
            </label>
            <input
              className="input"
              id="name"
              type="text"
              onChange={(event) => recordUserInputs(event, "name")}
              placeholder="e.g. Rent"
            />
          </div>
          <div className="form-row">
            <label htmlFor="planned" className="label">
              Planned expenditures:
            </label>
            <input
              className="input"
              id="planned"
              type="number"
              placeholder="e.g. 250"
              onChange={(event) => recordUserInputs(event, "planned")}
            />
          </div>
          <div className="form-row">
            <label htmlFor="spent" className="label">
              Spent? If none: enter 0
            </label>
            <input
              className="input"
              id="spent"
              type="number"
              placeholder="e.g. 200"
              onChange={(event) => recordUserInputs(event, "spent")}
            />
          </div>
          <div className="form-row">
            <label htmlFor="true">Select if discretionary spending: </label>
            <input
              className="input"
              type="radio"
              id="true"
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
