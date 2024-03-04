import React from "react";

const Footer = () => {
  return (
    <>
      <div className="blueoutline"></div>
      <div className="mainFooter">
        <p className="footer-desc">
          © 2024 ShortUrl - Tool to shorten a long link
        </p>
        <div className="link-container">
          <span className="footer-links">ShortURL</span><span className="myspan">|</span> <span className="footer-links">URL Click Counter</span> <span className="myspan">|</span> <span className="footer-links">Unshorten URL </span><span className="myspan">|</span> <span className="footer-links">Report Malicious URL</span> <span className="myspan">|</span> <span className="footer-links">Terms of Service </span> <span className="myspan">|</span> <span className="footer-links">Privacy</span> <span className="myspan">|</span> <span className="footer-links">Contact</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
