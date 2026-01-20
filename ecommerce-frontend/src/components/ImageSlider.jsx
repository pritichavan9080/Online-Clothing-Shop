import { useEffect, useState } from "react";
import "./ImageSlider.css";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

const slides = [slide1, slide2, slide3];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // change image every 7 sec

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      {slides.map((img, index) => (
        <img
          key={index}
          src={img}
          className={index === current ? "slide active" : "slide"}
          alt="slider"
        />
      ))}
    </div>
  );
}
