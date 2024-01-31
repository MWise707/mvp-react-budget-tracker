import "./Table.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdRadioButtonChecked } from "react-icons/md";

const Table = ({ categories, currentTab, handleEditCat }) => {
  const displayAmount = (category) => {
    if (currentTab === "planned") return category.planned;
    if (currentTab === "spent") return category.spent;
    return category.planned - category.spent;
  };

  const editCategory = (category) => {
    console.log("Selected category id: ", category.category_id);
    handleEditCat(category);
  };

  return (
    <>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>CATEGORY</th>
              <th>{currentTab.toUpperCase()}</th>
              <th>DISCRETIONARY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.category_id}>
                <td className="expand">{category.name}</td>
                <td>${displayAmount(category)}</td>
                <td>
                  {category.isdiscretionary ? (
                    <MdRadioButtonChecked />
                  ) : (
                    <MdOutlineRadioButtonUnchecked />
                  )}
                </td>
                <td className="actions">
                  <>
                    <BsFillPencilFill onClick={() => editCategory(category)} />
                    <BsFillTrashFill />
                  </>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
