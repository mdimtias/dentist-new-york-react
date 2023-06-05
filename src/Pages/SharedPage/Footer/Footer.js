import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "./../../../assets/Logo/logo.png"
const Footer = () => {
  return (
    <div className="footer-section">     
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div className="flex flex-col justify-center items-center">
        <img src={Logo} alt="" className="w-16 h-16 rounded-full" />
          <p>
           Dentist New York
            <br />
            Providing reliable service
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Branding
          </Link>
          <Link to="/" className="link link-hover">
            Design
          </Link>
          <Link to="/" className="link link-hover">
            Marketing
          </Link>
          <Link to="/" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Jobs
          </Link>
          <Link to="/" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
