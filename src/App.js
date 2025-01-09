import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../src/utils/constants";
import Header from "./components/Header";
import Body from "./components/Body";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="footer-logo-image" />
        </div>
        <div className="footer-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">Contact Us</a>
        </div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
