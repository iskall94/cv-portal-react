import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  const [eggModalOpen, setEggModalOpen] = useState(false);

  useEffect(() => {
    let eggSecret = "";

    const handleKeyDown = (event) => {
      eggSecret = (eggSecret + event.key.toLowerCase()).slice(-5);
      if (eggSecret === "aldor") {
        setEggModalOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />

      <button
        id="egg-btn"
        aria-label="Toggle hidden theme"
        onClick={() => document.body.classList.toggle("alt-bg")}
      />

      <div
        id="egg-modal"
        className={`modal-overlay${eggModalOpen ? " open" : ""}`}
        onClick={(event) => {
          if (event.target.id === "egg-modal") {
            setEggModalOpen(false);
          }
        }}
      >
        <div className="modal-box">
          <button className="modal-close" onClick={() => setEggModalOpen(false)}>
            &#x2715;
          </button>
          <h3>🐉 Aldor</h3>
          <p>You found the secret. Aldor watches over this portfolio.</p>
        </div>
      </div>
    </>
  );
}