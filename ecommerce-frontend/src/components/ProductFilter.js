import { useState } from "react";

export default function ProductFilter({ products, setFilteredProducts }) {
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);

    let sorted = [...products]; // copy products
    if (value === "priceLowHigh") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "priceHighLow") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sorted); // send sorted list back to parent
  };

  return (
    <div>
      <select value={sortOption} onChange={handleSortChange}>
        <option value="">Sort By</option>
        <option value="priceLowHigh">Price Low to High</option>
        <option value="priceHighLow">Price High to Low</option>
      </select>
    </div>
  );
}
