import "./CategoryHeader.css";

export default function CategoryHeader({ total = 312 }) {
  return (
    <div className="category-header">
      {/* LEFT ICONS */}
      <div className="left-icons">
        <span className="Home"></span>
        <span className="box"></span>
        <span className="box"></span>
      </div>

      {/* CENTER */}
      <div className="center-text">
        {total} PRODUCTS
      </div>

      {/* RIGHT */}
      <div className="right-actions">
        <span className="sort">
          SORT BY <span className="arrow">⌄</span>
        </span>
        <span className="filter">FILTER</span>
      </div>
    </div>
  );
}
