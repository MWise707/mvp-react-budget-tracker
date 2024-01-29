import "./Table.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdRadioButtonChecked } from "react-icons/md";

const Table = ({ categories, currentTab }) => {
  const displayAmount = (category) => {
    if (currentTab === "planned") return category.planned;
    if (currentTab === "spent") return category.spent;
    return category.planned - category.spent;
  };
  return (
    <>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount</th>
              <th>Discretionary</th>
              <th>Actions</th>
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
                  <BsFillTrashFill />
                  <BsFillPencilFill />
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
