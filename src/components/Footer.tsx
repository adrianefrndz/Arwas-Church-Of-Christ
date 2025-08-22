const Footer: React.FC = () => (
  <footer
    className="text-center py-4"
    style={{ backgroundColor: "#222222", color: "white" }}
  >
    <div className="container">
      <span className="d-block fw-semibold">
        &copy; {new Date().getFullYear()} Church of Christ. All rights reserved.
      </span>
      <span className="d-block">Arwas, Bani, Pangasinan</span>
    </div>
  </footer>
);

export default Footer;
