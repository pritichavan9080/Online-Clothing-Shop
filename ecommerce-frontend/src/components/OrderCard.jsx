
// import React from "react";
// import { Link } from "react-router-dom";
// import OrderProgress from "./OrderProgress";
// import "./OrderCard.css";

// const OrderCard = ({ order }) => {
//   return (
//     <div className="order-card">
//       {/* Order Summary */}
//       <div className="order-info">
//         <p><strong>Order ID:</strong> {order.id}</p>
//         <p><strong>Total:</strong> ₹{order.total}</p>
//         <p><strong>Placed On:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
//       </div>

//       {/* Product Preview */}
//       <div className="order-items">
//         {order.items?.map((item) => (
//           <div key={item.id} className="order-item">
//             <img
//               src={item.imageUrl || "/images/placeholder.png"}
//               alt={item.name}
//               className="item-image"
//             />
//             <div className="item-details">
//               <p>{item.name}</p>
//               <p>Qty: {item.quantity}</p>
//               <p>₹{item.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Order Progress */}
//       <OrderProgress status={order.status} />

//       {/* View Details */}
//       <div className="order-actions">
//         <Link to={`/order/${order.id}`} className="view-details-btn">
//           View Details
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default OrderCard;

// import React from "react";

// import OrderProgress from "./OrderProgress";
// import "./OrderCard.css";

// const OrderCard = ({ order }) => {
//   return (
//     <div className="order-card">
//       {/* Order Summary */}
//       <div className="order-info">
//         <p><strong>Order ID:</strong> {order.id}</p>
//         <p><strong>Total:</strong> ₹{order.total}</p>
//         <p>
//           <strong>Placed On:</strong>{" "}
//           {new Date(order.createdAt).toLocaleDateString()}
//         </p>
//       </div>

//       {/* Product Preview */}
//       <div className="order-items">
//         {order.items?.map((item) => (
//           <div key={item.id} className="order-item">
//             <img
//               src={item.imageUrl || "/images/uploads.jpg"}
//               alt={item.name}
//               className="item-image"
//             />
//             <div className="item-details">
//               <p>{item.name}</p>
//               <p>Qty: {item.quantity}</p>
//               <p>₹{item.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Order Progress (Preview on card) */}
//       <OrderProgress
//         status={order.status}
//         placedDate={order.createdAt}
//       />

      
//     </div>
//   );
// };

// export default OrderCard;
import React from "react";
import OrderProgress from "./OrderProgress";
import "./OrderCard.css";

const OrderCard = ({ order }) => {
  const formatDate = (dateValue) => {
    if (!dateValue) return "N/A";
    const date = new Date(dateValue);
    return isNaN(date.getTime())
      ? "N/A"
      : date.toLocaleDateString("en-IN");
  };

  return (
    <div className="order-card">
      <div className="order-info">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Total:</strong> ₹{order.total}</p>
        <p>
          <strong>Placed On:</strong>{" "}
          {formatDate(order.createdAt || order.orderDate)}
        </p>
      </div>

      <div className="order-items">
        {order.items?.map((item) => (
          <div key={item.id} className="order-item">
            {/* <img
              src={
                item.imageUrl && item.imageUrl.trim() !== ""
                  ? item.imageUrl.startsWith("http")
                    ? item.imageUrl
                    : `http://localhost:9080/uploads/${item.imageUrl}`
                  : "/placeholder.jpg"
              }
              alt={item.name}
              className="item-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder.jpg";
              }}
            /> */}

            <div className="item-details">
              <p><strong>{item.name}</strong></p>
              <p>Qty: {item.quantity}</p>
              <p>₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <OrderProgress
        status={order.status}
        placedDate={order.createdAt || order.orderDate}
      />
    </div>
  );
};

export default OrderCard;
