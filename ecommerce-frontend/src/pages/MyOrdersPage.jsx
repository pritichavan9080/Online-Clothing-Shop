// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import OrderCard from "../components/OrderCard";
// import { getUserOrders } from "../api/api";

// const MyOrdersPage = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMsg, setErrorMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const email = localStorage.getItem("email");

//       // ✅ PROTECT ROUTE
//         try {
//         const data = await getUserOrders(email);
//         setOrders(Array.isArray(data) ? data : []);
//       } catch (err) {
//         setErrorMsg("Failed to fetch orders");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [navigate]);

//   if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
//   if (errorMsg) return <p style={{ color: "red", textAlign: "center" }}>{errorMsg}</p>;

//   return (
//     <div style={{ maxWidth: "900px", margin: "20px auto" }}>
//       <h2 style={{ textAlign: "center" }}>My Orders</h2>

//       {orders.length === 0 ? (
//         <p style={{ textAlign: "center" }}>No orders found.</p>
//       ) : (
//         orders.map((order) => <OrderCard key={order.id} order={order} />)
//       )}
//     </div>
//   );
// };

// export default MyOrdersPage;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getUserOrders } from "../api/api"; // adjust path if needed
// import OrderCard from "../components/OrderCard";

// const MyOrdersPage = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMsg, setErrorMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//   const fetchOrders = async () => {
//     const user = JSON.parse(localStorage.getItem("user") || "{}");
//     const email = user.email;

//     if (!email) {
//       setErrorMsg("No user email found. Please log in again.");
//       setLoading(false);
//       navigate("/login");
//       return;
//     }

//     try {
//       const data = await getUserOrders(email);
//       setOrders(data);
//     } catch (err) {
//       setErrorMsg("Failed to fetch orders. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchOrders();
// }, [navigate]);

//   if (loading) return <p style={{ textAlign: "center" }}>Loading orders...</p>;
//   if (errorMsg) return <p style={{ color: "red", textAlign: "center" }}>{errorMsg}</p>;

//   return (
//     <div style={{ maxWidth: "900px", margin: "20px auto", padding: "0 10px" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>My Orders</h2>

//       {orders.length === 0 ? (
//         <p style={{ textAlign: "center", fontSize: "16px" }}>
//           No orders found. <a href="/shop">Place your first order</a>.
//         </p>
//       ) : (
//         orders.map(order => <OrderCard key={order.id} order={order} />)
//       )}

//       {/* <footer style={{ textAlign: "center", marginTop: "40px", fontSize: "14px", color: "#888" }}>
//         © 2026 ByShreeRAM. All rights reserved.
//       </footer> */}
//     </div>
//   );
// };

// export default MyOrdersPage;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserOrders } from "../api/api";
import OrderCard from "../components/OrderCard";
import "./MyOrdersPage.css"; // Create this CSS file


const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const email = user.email;

      if (!email) {
        setErrorMsg("No user email found. Please log in again.");
        setLoading(false);
        navigate("/login");
        return;
      }

      try {
        const data = await getUserOrders(email);
        setOrders(data);
      } catch (err) {
        setErrorMsg("Failed to fetch orders. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate]);

  // Filter and search orders
  const filteredOrders = orders.filter(order => {
    // Apply status filter
    if (filter !== "all" && order.status !== filter) {
      return false;
    }
    
    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return (
        order.id.toString().includes(searchLower) ||
        order.items?.some(item => 
          item.name.toLowerCase().includes(searchLower)
        )
      );
    }
    
    return true;
  });

  // Get order statistics
  const orderStats = {
    total: orders.length,
    delivered: orders.filter(o => o.status === "DELIVERED").length,
    pending: orders.filter(o => o.status !== "DELIVERED").length,
    totalSpent: orders.reduce((sum, order) => sum + (order.total || 0), 0)
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading your orders...</p>
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h3 className="error-title">Something went wrong</h3>
        <p className="error-message">{errorMsg}</p>
        <button 
          className="retry-btn"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="my-orders-page">
      {/* Hero Header */}
      <header className="orders-header">
        <div className="header-content">
          <h1 className="page-title">My Orders</h1>
          <p className="page-subtitle">Track and manage all your purchases</p>
        </div>
        <div className="header-illustration">
          <div className="package-icon">📦</div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon total-orders">📋</div>
          <div className="stat-info">
            <h3 className="stat-value">{orderStats.total}</h3>
            <p className="stat-label">Total Orders</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon delivered">✅</div>
          <div className="stat-info">
            <h3 className="stat-value">{orderStats.delivered}</h3>
            <p className="stat-label">Delivered</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon pending">⏳</div>
          <div className="stat-info">
            <h3 className="stat-value">{orderStats.pending}</h3>
            <p className="stat-label">Pending</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon spent">💰</div>
          <div className="stat-info">
            <h3 className="stat-value">₹{orderStats.totalSpent.toLocaleString()}</h3>
            <p className="stat-label">Total Spent</p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="filters-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by Order ID or product name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Orders
          </button>
          <button
            className={`filter-btn ${filter === "DELIVERED" ? "active" : ""}`}
            onClick={() => setFilter("DELIVERED")}
          >
            Delivered
          </button>
          <button
            className={`filter-btn ${filter === "PLACED" ? "active" : ""}`}
            onClick={() => setFilter("PLACED")}
          >
            Processing
          </button>
          <button
            className={`filter-btn ${filter === "SHIPPED" ? "active" : ""}`}
            onClick={() => setFilter("SHIPPED")}
          >
            Shipped
          </button>
        </div>
      </div>

      {/* Orders List */}
      <main className="orders-container">
        {filteredOrders.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <h3 className="empty-title">No orders found</h3>
            <p className="empty-description">
              {searchTerm || filter !== "all" 
                ? "Try changing your search or filter"
                : "Start shopping to see your orders here"}
            </p>
            <button 
              className="shop-now-btn"
              onClick={() => navigate("/categories")}
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="orders-list">
            <div className="results-count">
              Showing {filteredOrders.length} of {orders.length} orders
            </div>
            
            {filteredOrders.map(order => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="page-footer">
        <div className="footer-content">
          <p className="footer-text">
            Need help with an order?{" "}
            <button 
              className="contact-support-link"
              onClick={() => navigate("/ContactPage")}
            >
              Contact Support
            </button>
          </p>
          <p className="footer-copyright">
            © {new Date().getFullYear()} ByShreeRAM. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MyOrdersPage;