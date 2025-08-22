import React from "react";
import "./PhotoMarquee.css";

const images = [
  { src: "/assets/images/gallery/photo1.jpg", shape: "square" },
  { src: "/assets/images/gallery/photo2.jpg", shape: "vertical" },
  { src: "/assets/images/gallery/photo3.jpg", shape: "square" },
  { src: "/assets/images/gallery/photo4.jpg", shape: "vertical" },
  { src: "/assets/images/gallery/photo5.jpg", shape: "square" },
  { src: "/assets/images/gallery/photo6.jpg", shape: "vertical" },
  { src: "/assets/images/gallery/photo7.jpg", shape: "square" },
  { src: "/assets/images/gallery/photo8.jpg", shape: "vertical" },
];

const PhotoMarquee: React.FC = () => (
  <section className="photo-marquee-section">
    <div className="photo-marquee-marquee-container">
      <div className="photo-marquee-marquee">
        {/* Repeat images enough times for a seamless loop */}
        {Array(3)
          .fill(images)
          .flat()
          .map((img, idx) => (
            <span
              className={`photo-marquee-img-wrapper ${
                img.shape === "square"
                  ? "photo-marquee-square"
                  : "photo-marquee-vertical"
              }`}
              key={idx}
            >
              <img
                src={img.src}
                alt={`Church Gallery ${idx + 1}`}
                className="photo-marquee-img"
              />
            </span>
          ))}
      </div>
    </div>
  </section>
);

export default PhotoMarquee;
