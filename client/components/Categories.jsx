const Categories = ({ categories }) =>
  categories.map((category) => (
    <span className="task" key={category.category_id}>
      {category.name}
    </span>
  ));

export default Categories;
