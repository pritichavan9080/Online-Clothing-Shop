
import { useEffect, useState } from "react";

const Customers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:9080/api/users");
        const data = await res.json();
        console.log("Fetched users:", data);
        setUsers(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching users:", err);
        setUsers([]);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Customer List</h2>
      <div style={{ maxHeight: "70vh", overflowY: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
            boxShadow: "0 2px 8px hsla(250, 18%, 19%, 0.93)"
          }}
        >
          <thead style={{ backgroundColor: "rgba(10, 208, 239, 1)" }}>
            <tr>
              <th style={{ padding: "10px" }}>ID</th>
              <th style={{ padding: "10px" }}>Name</th>
              <th style={{ padding: "10px" }}>Email</th>
              <th style={{ padding: "10px" }}>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#eee7e7ff" : "hsla(0, 52%, 96%, 1.00)",
                  transition: "background-color 0.3s"
                }}
              >
                <td style={{ padding: "10px" }}>{user.id}</td>
                <td style={{ padding: "10px" }}>{user.name}</td>
                <td style={{ padding: "10px" }}>{user.email}</td>
                <td style={{ padding: "10px" }}>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
