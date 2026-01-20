
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import Customers from "../components/Customers";
import Products from "../components/Products";
import Stock from "../components/Stock";
import AdminAddProduct from "../components/AdminAddProduct";
import AdminOrders from "../components/AdminOrders"; // ✅ added

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("customers");

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      navigate("/login");
      return;
    }

    const user = JSON.parse(userStr);
    if (user.role !== "ADMIN") {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const renderContent = () => {
    switch (activePage) {
      case "customers":
        return <Customers />;

      case "products":
        return (
          <div>
            <h2 className="add-product-title">Add New Product</h2>
            <AdminAddProduct />
            <hr style={{ margin: "20px 0" }} />
            <Products hideFrontend={true} />
          </div>
        );

      case "stock":
        return <Stock />;

      case "orders":
        return <AdminOrders />; // ✅ orders page

      default:
        return <Customers />;
    }
  };

  return (
    <div className="admin-page" style={{ display: "flex", height: "100vh" }}>
      <AdminSidebar setActivePage={setActivePage} onLogout={handleLogout} />

      <div
        style={{
          flex: 1,
          padding: "20px",
          background: "#f5f5f5",
          overflowY: "auto",
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
