import React from "react";
import tick from "../assets/checkmark.svg";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  
    const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/");
  }  

  return (
    <div className="err-wrapper">
        <h1 className="err-heading">Short URL</h1>
      <div className="err-header">
        <p className="description">
          <p className="err-p1">An error occurred creating the short URL</p>
          <p className="err-p2">The URL has not been shortened, possible errors:</p>
        </p>

      <div className="err-types">
        <ul className="err-row">
          <img src={tick} alt="" className="err-img" />
          <li className="err-para">Check if the domain is correct</li>
        </ul>
        <ul className="err-row">
          <img src={tick} alt="" className="err-img" />
          <li className="err-para">Check if the site is online</li>
        </ul>
        <ul className="err-row">
          <img src={tick} alt="" className="err-img" />
          <li className="err-para">Check the address bars and punctuation</li>
        </ul>
        <ul className="err-row">
          <img src={tick} alt="" className="err-img" />
          <li className="err-para">The URL may be being used for spam</li>
        </ul>
        <ul className="err-row">
          <img src={tick} alt="" className="err-img" />
          <li className="err-para">The URL may have been blocked</li>
        </ul>
        <ul className="err-row">
          <img src={tick} alt="" className="err-img" />
          <li className="err-para">The URL may have been reported</li>
        </ul>
        <ul className="err-row">
          <img src={tick} alt="" className="err-img" />
          <li className="err-para">The URL was recently shortened</li>
        </ul>
        <ul className="err-row">
          <img src={tick} alt="" className="err-img" />
          <li className="err-para">The URL is not allowed</li>
        </ul>
        <ul className="err-row">
          <img src={tick} alt="" className="err-img" />
          <li className="err-para">You shortened many URLs in a short time</li>
        </ul>

        <button className="err-btn" onClick={handleClick}>
            Go back and try again
        </button>
      </div>
      </div>
    </div>
  );
};

export default ErrorPage;
