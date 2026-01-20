import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
 import Products from "./pages/Products";
 import ContactPage from "./pages/ContactPage";



import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CategoryPage from "./pages/CategoryPage";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import MyOrdersPage from "./pages/MyOrdersPage";

const App = () => {
  return (
    <Router>
      <>
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/MyordersPage" element={<MyOrdersPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />

          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </>
    </Router>
  );
};

export default App;
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import Products from "./pages/Products";



// import CategoryPage from "./pages/CategoryPage";

// const App = () => {
//   return (
//     <Router>
//       <>
//     <Navbar />
      
//         <main >
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
            
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/checkout" element={<Checkout />} />
//             <Route path="/category/:id" element={<CategoryPage />} />
//             <Route path="/products" element={<Products />} />
//             <Routes>
  
  
// </Routes>

//           </Routes>
//         </main>

//         <Footer />
//       </>
//     </Router>
//   );
// };

// export default App;
