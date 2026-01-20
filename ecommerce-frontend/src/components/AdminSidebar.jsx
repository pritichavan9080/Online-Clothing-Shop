
import "./Admin.css";

const AdminSidebar = ({ setActivePage, onLogout, activePage }) => {
  return (
    <div
      style={{
        width: "240px",
        background: "#1f2937",
        color: "white",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "30px", fontSize: "22px" }}>
        Admin Panel
      </h2>

      <button
        className={`sidebar-btn ${
          activePage === "customers" ? "active" : ""
        }`}
        onClick={() => setActivePage("customers")}
      >
        <span className="icon">👤</span>
        Customers
      </button>

      <button
        className={`sidebar-btn ${
          activePage === "products" ? "active" : ""
        }`}
        onClick={() => setActivePage("products")}
      >
        <span className="icon">📦</span>
        Products
      </button>
      {/* Orders Button Added */}
      <button
        className={`sidebar-btn ${activePage === "orders" ? "active" : ""}`}
        onClick={() => setActivePage("orders")}
      >
        <span className="icon">🛒</span>
        Orders
      </button>

      <button
        className={`sidebar-btn ${
          activePage === "stock" ? "active" : ""
        }`}
        onClick={() => setActivePage("stock")}
      >
        <span className="icon">📊</span>
        Stock
      </button>

      <hr style={{ margin: "20px 0", borderColor: "#444" }} />

      <button className="sidebar-btn logout" onClick={onLogout}>
        <span className="icon">🔓</span>
        Logout
      </button>
    </div>
  );
};

export default AdminSidebar;
