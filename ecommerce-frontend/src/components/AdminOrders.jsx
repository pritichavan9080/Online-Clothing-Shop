
import { useEffect, useState } from "react";
import axios from "axios";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch orders from backend when component mounts
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:9080/api/orders"); 
      console.log(response.data);// Adjust URL if needed
      setOrders(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };

  if (loading) return <p>Loading orders...</p>;
  if (orders.length === 0) return <p>No orders found.</p>;

  return (
    <div>
      <h2>All Orders</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#fff",
        }}
      >
        <thead>
          <tr style={{ background: "#eee" }}>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Order ID</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Email</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Address</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Items</th>
           
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Total</th>
             <th style={{ border: "1px solid #ccc", padding: "8px" }}>Payment Method</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{order.id}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{order.name}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{order.email}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{order.address}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {order.items.map((item, index) => (
                  <div key={index}>
                    {item.name} x {item.quantity || 1} - ₹{item.price}
                  </div>
                ))}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>₹{order.total}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{order.paymentMethod}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {new Date(order.orderDate).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;
