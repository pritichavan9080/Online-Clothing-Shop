import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => (
  <Link to={`/category/${category.id}`}>
    <div className="border p-2 rounded hover:shadow-lg">
      <img
        src={category.image || "https://via.placeholder.com/150"}
        alt={category.name}
        className="w-full h-32 object-cover"
      />
      <h3 className="text-center font-semibold mt-1">
        {category.name}
      </h3>
    </div>
  </Link>
);

export default CategoryCard;
