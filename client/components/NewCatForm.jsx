import { useState } from "react";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdRadioButtonChecked } from "react-icons/md";
import "./newCatForm.css";

const NewCatForm = ({ addNewCategory }) => {
  const [userNewCat, setUserNewCat] = useState({
    name: "",
    planned: "",
    spent: "",
    isdiscretionary: false,
  });

  const recordUserInputs = (event, id) => {
    setUserNewCat({ ...userNewCat, [id]: event.target.value });
  };

  const handleRadioChange = (event) => {
    setUserNewCat({ ...userNewCat, isdiscretionary: event.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewCategory(userNewCat);
  };

  return (
    <>
      <div className="new-cat-form">
        <form className="form">
          Add New Category
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

export default NewCatForm;
