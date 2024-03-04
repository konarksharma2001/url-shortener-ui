import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Analytics = () => {
  const shortId = localStorage.getItem("shortId");
  const shortenedUrl = localStorage.getItem("shortenedUrl");

  const [totalClicks, setTotalClicks] = useState(0);

  useEffect(() => {
    const fetchTotalClicks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8001/url/analytics/${shortId}`
        );
        setTotalClicks(response.data.totalClicks);
      } catch (error) {
        console.error("Error fetching total clicks:", error);
      }
    };

    fetchTotalClicks();
  }, [shortId]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const handleRedirect = () => {
    navigate("/click-counter");
  };

  return (
    <div className="analytics-wrapper">
      <h1 className="heading">Short URL</h1>
      <div className="analytics-sub-wrapper">
        <p className="description">
          <p className="analytics-p1">Total URL Clicks</p>
          <p className="analytics-p2">
            The number of clicks from the shortened URL that redirected the user
            to the destination page.
          </p>
        </p>
        <div className="urlclicksbox1">
          <a href={shortenedUrl} target="_blank">
            {shortenedUrl}
          </a>
        </div>

        <div className="urlclicksbox2">{totalClicks}</div>
        <br />
        <div className="analytics-bttns">
          <button className="analytics-bttn1" onClick={handleRedirect}>
            Track clicks from another URL
          </button>
          <button className="analytics-bttn2" onClick={handleClick}>
            Shorten another URL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
