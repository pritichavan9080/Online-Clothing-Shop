import { useEffect, useState } from "react";
import "./BannerSlider.css";

const BannerSlider = ({ banners }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="banner-slider">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`banner-slide ${
            index === current ? "active" : ""
          }`}
        >
          <img src={banner.imageUrl} alt={banner.title} />
        </div>
      ))}
    </div>
  );
};

export default BannerSlider;
