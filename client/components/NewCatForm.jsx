import { useState } from "react";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdRadioButtonChecked } from "react-icons/md";
import "./newCatForm.css";

const NewCatForm = () => {
  const [userNewCat, setUserNewCat] = useState({});

  const recordNewCategory = (event) => {
    console.log("Form changed");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Cat submit clicked");
  };

  return (
    <>
      <div className="new-cat-form">
        <form className="form">
          <div className="form-row">
            <label for="name" className="label">
              Category Name
            </label>
            <input
              className="input"
              id="name"
              onChange={() => recordNewCategory(this.val)}
              placeholder="e.g. Rent"
            />
          </div>
          <div className="form-row">
            <label for="planned" className="label">
              Planned expenditures:
            </label>
            <input className="input" id="planned" placeholder="e.g. 250" />
          </div>
          <div className="form-row">
            <label for="spent" className="label">
              Spent? If none: enter 0
            </label>
            <input className="input" id="spent" placeholder="e.g. 200" />
          </div>
          <input type="submit" onClick={() => handleSubmit()} />
        </form>
      </div>
    </>
  );
};

export default NewCatForm;
