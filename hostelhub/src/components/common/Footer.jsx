import React from 'react';
import { Link } from "react-router-dom";
import './css/footer.css';
import Logo from './Logo';

const Footer = ({ role }) => {
  const footerLinks = {
    renter: [
      { to: "/user", label: "Home" },
      { to: "/user/favorites", label: "Favorites" },
      { to: "/user/profile", label: "Profile" },
    ],
    owner: [
      { to: "/owner", label: "Home" },
      { to: "/owner/myHostels", label: "My Hostels" },
      { to: "/owner/manageHostels", label: "Add Hostel" },
      { to: "/owner/profile", label: "Profile" },
    ],
    guest: [
      { to: "/", label: "Home" },
      { to: "/allhostels", label: "All Hostels" },
      { to: "/login", label: "Login" },
      { to: "/signup", label: "Signup" },
    ],
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <img src={'/logo dark.png'} alt="logo" />
          <p>
            Livanzo is your trusted platform to find, list, and manage hostels, rooms, and flats with ease.
            Simplifying accommodation for students, employees, and families.
          </p>
          <p className="made-with">Made with ❤️ by Shivansh Singh Rathore</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {footerLinks[role || "guest"].map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:livanzo.support@gmail.com">livanzo.support@gmail.com</a></p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: India</p>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Livanzo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
