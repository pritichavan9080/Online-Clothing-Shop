
import { useState } from "react";
import UpdateStock from "./UpdateStock";
import AddProductModal from "./AddProductModal";
import "./ViewStock.css";

const ViewStock = () => {
  const [stockData, setStockData] = useState([
    {
      id: 1,
      product: "Kurta Set",
      category: "Ethnic Wear",
      size: "M",
      color: "Blue",
      quantity: 12,
    },
    {
      id: 2,
      product: "Dress",
      category: "Women",
      size: "L",
      color: "Red",
      quantity: 0,
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const getStatus = (qty) => {
    if (qty === 0) return { text: "Out of Stock", cls: "out" };
    if (qty <= 5) return { text: "Low Stock", cls: "low" };
    return { text: "In Stock", cls: "in" };
  };

  // Update stock quantity
  const updateStock = (newQty) => {
    setStockData((prev) =>
      prev.map((item) =>
        item.id === selectedProduct.id
          ? { ...item, quantity: newQty }
          : item
      )
    );
    setSelectedProduct(null);
  };

  // Add new product
  const addNewProduct = (product) => {
    const newId =
      stockData.length > 0 ? stockData[stockData.length - 1].id + 1 : 1;
    setStockData([...stockData, { id: newId, ...product }]);
    setIsAddModalOpen(false);
  };

  return (
    <div className="stock-container">
     

      {/* Buttons above table */}
      <div className="stock-actions">
        <button className="add-product-btn" onClick={() => setIsAddModalOpen(true)}>
          
        </button>
      </div>

      <table className="stock-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Size</th>
            <th>Color</th>
            <th>Qty</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {stockData.map((item) => {
            const status = getStatus(item.quantity);
            return (
              <tr key={item.id}>
                <td>{item.product}</td>
                <td>{item.size}</td>
                <td>{item.color}</td>
                <td>{item.quantity}</td>
                <td className={`status ${status.cls}`}>{status.text}</td>
                <td>
                  <button
                    className="update-btn"
                    onClick={() => setSelectedProduct(item)}
                  >
                    Update
                  </button>
                  <button
                    className="add-btn"
                    onClick={() => setIsAddModalOpen(true)}
                  >
                    Add
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* UpdateStock Modal */}
      {selectedProduct && (
        <UpdateStock
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onSave={updateStock}
        />
      )}

      {/* AddProductModal */}
      {isAddModalOpen && (
        <AddProductModal
          onClose={() => setIsAddModalOpen(false)}
          onSave={addNewProduct}
          sizeOptions={["S", "M", "L", "XL"]}
          colorOptions={["Red", "Blue", "Green", "Black"]}
        />
      )}
    </div>
  );
};

export default ViewStock;
