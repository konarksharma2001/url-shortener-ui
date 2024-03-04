import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ClickCounterPage = () => {
    
    const [shortUrl, setShortUrl] = useState("");
    const [clickCount, setClickCount] = useState(0);
    const navigate = useNavigate();

    const handleTrackClicks = async () => {
        try {
          // Extract the shortId from the short URL
          const shortId = shortUrl.split("/").pop();
          // Store the shortId in local storage
          localStorage.setItem("shortId", shortId);
    
          // Navigate to the analytics page
          navigate("/analytics");
        } catch (error) {
          console.error("Error fetching click count:", error);
          navigate("/error");
        }
      };
    
  return (
    <div className="err-wrapper">
      <h1 className="err-heading">Short URL</h1>
      <div className="err-header">
        <p className="description">
          <p className="err-p1">URL Click Counter</p>
          <p className="err-p2">
            Enter the URL to track how many clicks it received.
          </p>
        </p>

        <div className="click-mainbox">
          <div className="shortened-url">
            <div className="link-container">
              <input
                type="text"
                placeholder="Enter here your shortened URL"
                className="click-ipt2"
                value={shortUrl}
                onChange={(e) => setShortUrl(e.target.value)}
              />
              <button 
                type="submit" 
                className="btn" 
                onClick={handleTrackClicks }
              >
                Track Clicks
              </button>
            </div>
            <p className="click-long-url">Example: http://localhost:8001/KhgH75pfd</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClickCounterPage;
