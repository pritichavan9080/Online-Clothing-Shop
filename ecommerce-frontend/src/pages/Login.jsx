

// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("user"); // ui role
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:9080/api/auth/login",{

//         email, password, role: role.toUpperCase() } // send role
//       );
//       console.log("Login successful", res.data);
//       localStorage.setItem("user", JSON.stringify(res.data));
      

//       if (res.data.role === "ADMIN") {
//         navigate("/admin-dashboard");
//       } else {
//         navigate("/user-dashboard");
//       }

//     } catch (error) {
//       alert("Invalid login credentials");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-box">
//         <h2>Login</h2>

//         {/* ROLE SELECTION */}
//         <select
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           style={{ padding: "10px", margin: "10px 0", width: "100%" }}
//         >
//           <option value="admin">Admin</option>
//           <option value="user">User</option>
//         </select>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button type="submit">Login</button>
//         </form>

//         {/* ✅ REGISTER ONLY FOR USER */}
//         {role === "user" && (
//           <p className="login-footer">
//             Don't have an account?{" "}
//             <span
//               className="register-link"
//               onClick={() => navigate("/register")}
//             >
//               Register
//             </span>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("user");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:9080/api/auth/login", {
//         email,
//         password,
//         role: role.toUpperCase(),
//       });

//       console.log("Login successful", res.data);

//       // ✅ Store full user object
//       localStorage.setItem("user", JSON.stringify(res.data));

//       // ✅ Navigate based on role
//       if (res.data.role === "ADMIN") {
//         navigate("/admin-dashboard");
//       } else {
//         navigate("/user-dashboard");
//       }
//     } catch (error) {
//       alert("Invalid login credentials");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-box">
//         <h2>Login</h2>

//         <select
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           style={{ padding: "10px", margin: "10px 0", width: "100%" }}
//         >
//           <option value="admin">Admin</option>
//           <option value="user">User</option>
//         </select>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button type="submit">Login</button>
//         </form>

//         {role === "user" && (
//           <p className="login-footer">
//             Don't have an account?{" "}
//             <span
//               className="register-link"
//               onClick={() => navigate("/register")}
//             >
//               Register
//             </span>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;


import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:9080";
      const res = await axios.post(`${API_URL}/api/auth/login`, { email, password });

      console.log("Login successful", res.data);

      // ✅ Store token & role only
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      // ✅ Navigate based on role
      if (res.data.role === "ADMIN") {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } catch (error) {
      const message = error.response?.data?.message || "Invalid login credentials";
      alert(message);
      console.error(error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="login-footer">
          Don't have an account?{" "}
          <span className="register-link" onClick={() => navigate("/register")}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
