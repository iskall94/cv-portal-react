import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <p>Isak Erbing</p>
      <Link to="/contact" className="footer-btn">
        Kontakta mig
      </Link>
    </footer>
  );
}