

import "./FreshDrop.css";



const products = [
  {
    id: 1,
    image: "/images/p1.jpg",
    title: "Winter Women Burgundy Embroidered Velvet",
    price: "₹4,198.99",
    oldPrice: "₹6,998.99",
  },
  {
    id: 2,
    image: "/images/p2.jpg",
    title: "Winter Women Velvet Pink Embroidered Kurta",
    price: "₹3,598.99",
    oldPrice: "₹5,998.99",
  },
  {
    id: 3,
    image: "/images/p3.jpg",
    title: "Winter Wear Women Velvet Blue Embroidered",
    price: "₹3000",
    oldPrice: "₹4000",
  },
  {
    id: 4,
    image: "/images/p4.jpg",
    title: "Winter Women Acrylic Jacquard Black Woven",
    price: "₹2,998.99",
    oldPrice: "₹4,998.99",
  },
];

const FreshDrop = () => {
  return (
    <section className="freshdrop">
      <div className="down-arrow">⌄</div>

      <h2>FRESH DROP</h2>

      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <span className="discount">SAVE 40%</span>
            <span className="wishlist">♡</span>

            <img src={p.image} alt={p.title} />

            <div className="product-info">
              <p className="title">{p.title}</p>
              <p className="price">
                <span className="new">{p.price}</span>
                <span className="old">{p.oldPrice}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
       
      
       
    </section>
  );
};

export default FreshDrop;
