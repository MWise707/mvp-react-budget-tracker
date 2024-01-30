import "./newCategory.css";

const NewCategory = ({ showNewCatForm }) => {
  const handleAddClick = () => {
    showNewCatForm();
  };
  return (
    <>
      <div className="new-category">
        <button className="button" onClick={() => handleAddClick()}>
          ADD Category
        </button>
      </div>
    </>
  );
};

export default NewCategory;
