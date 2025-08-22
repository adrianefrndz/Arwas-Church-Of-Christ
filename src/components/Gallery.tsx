// Import your images
import church1 from "../assets/images/church/church1.jpg";
import church2 from "../assets/images/church/church2.jpg";
const images = [church1, church2];

const Gallery: React.FC = () => (
  <section
    id="gallery"
    style={{ backgroundColor: "#DCC5B2", color: "#2D2320", padding: "3rem 0" }}
  >
    <div className="container text-center">
      <h2 className="display-6 fw-bold mb-4">Photo Gallery</h2>

      <div className="d-flex flex-column align-items-center g-4">
        {images.map((src, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-md-4">
            <div
              className="card h-100 border-0"
              style={{ backgroundColor: "#DCC5B2", overflow: "visible" }}
            >
              <div
                style={{
                  width: "200%",
                  marginBottom: "1rem",
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)", // 👈 centers even when wider
                }}
              >
                <img
                  src={src}
                  alt={`Church event ${idx + 1}`}
                  className="img-fluid rounded-4 shadow-sm"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    opacity: 0.9,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
