import React, { useState } from "react";

import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import EasyIcon from "../assets/easy.png";
import ShortenedIcon from "../assets/shortened.png";
import SecureIcon from "../assets/Secure.png";
import StatsIcon from "../assets/Statistics.png";
import ReliableIcon from "../assets/Reliable.png";
import DevicesIcon from "../assets/Devices.png";


const HomePage = ({ isShortened, setIsShortened, onTrackClicks }) => {
  const [inputUrl, setInputUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8001/url", {
        url: inputUrl,
      });
      const shortId = await response.data.id;
      // Make another request to fetch the full URL
      const fullUrlResponse = await axios.get(
        `http://localhost:8001/${shortId}/redirecturl`
      );
      const shortenedUrl = fullUrlResponse.data.shortUrl;
      setShortenedUrl(shortenedUrl);
      if (shortenedUrl) {
        setIsShortened(true);
        localStorage.setItem("shortId", shortId);
        localStorage.setItem("shortenedUrl", shortenedUrl);
      }
      setError("");
    } catch (error) {
      console.error("Error shortening URL:", error);
      navigate("/error");
    }
  };

  const handleClick = () => {
  const shortId = localStorage.getItem("shortId");
  const shortenedUrl = localStorage.getItem("shortenedUrl");
  if (shortId && shortenedUrl) {
    navigate("/analytics");
  } else {
    alert("Short URL not available yet. Please shorten a URL first.");
  }
}

  return (
    <>
        <div className="wrapper">
          <h1 className="heading">Short URL</h1>
          {shortenedUrl && !error && (
            <p className="description">
              <p className="p1">Your shortened URL</p>
              <p className="p2">
                Copy the short link and share it in messages, texts, posts,
                websites and other locations.
              </p>
            </p>
          )}
          <div className="mainbox">
            {shortenedUrl ? (
              <div className="shortened-url">
                <div className="link-container">
                  <input
                    type="text"
                    disabled
                    placeholder="Enter the link here"
                    className="ipt2"
                    value={shortenedUrl}
                  />
                  <button
                    type="submit"
                    onClick={() => {
                      navigator.clipboard.writeText(shortenedUrl);
                      toast.success("URL Copied Successfully");
                    }}
                    className="btn"
                  >
                    Copy URL
                  </button>
                </div>
                <p className="long-url">
                  Long URL: <span className="long-link">{inputUrl}</span>
                </p>

                <div className="bttns">
                  <button className="bttn1" onClick={handleClick} >
                      Total clicks of your short URL
                  </button>
                  <button className="bttn2">
                    Shorten another URL
                </button>
                </div>

                <div className="tc">
                  <p>
                    * Short URLs that do not have at least one click per month
                    are disabled
                  </p>
                </div>
              </div>
            ) : (
              <>
                <p className="subHeading">Paste the URL to be shortened</p>
                <div className="formfield">
                  <form onSubmit={handleSubmit} method="post">
                    <input
                      type="text"
                      placeholder="Enter the link here"
                      className="ipt"
                      value={inputUrl}
                      onChange={(e) => setInputUrl(e.target.value)}
                    />
                    <button type="submit" className="btn">
                      Shorten URL
                    </button>
                  </form>
                </div>
                {error && <div className="error">{error}</div>}
                {!error && (
                  <div className="footer">
                    <p>
                      ShortURL is a free tool to shorten URLs and generate short
                      links
                    </p>
                    <p>
                      URL shortener allows to create a shortened link making it
                      easy to share
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {!shortenedUrl && (
          <div className="desc">
            <div className="desc-group">
              <p className="subHeading2">Simple and fast URL shortener!</p>
              <p className="desc2">
                ShortURL allows to shorten long links from Instagram, Facebook,
                YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites.
                Just paste the long URL and click the Shorten URL button. On the
                next page, copy the shortened URL and share it on sites, chat
                and emails. After shortening the URL, check how many clicks it
                received.
              </p>
            </div>
            <div className="desc-group">
              <p className="subHeading2">Shorten, share and track</p>
              <p className="desc2">
                Your shortened URLs can be used in publications, documents,
                advertisements, blogs, forums, instant messages, and other
                locations. Track statistics for your business and projects by
                monitoring the number of hits from your URL with our click
                counter.
              </p>
            </div>

            <div className="imgcontainer">
              <div className="box">
                <img src={EasyIcon} alt="easy" className="icon" />
                <h4 className="icon-title">Easy</h4>
                <p className="icon-desc">
                  ShortURL is easy and fast, enter the long link to get your
                  shortened link
                </p>
              </div>
              <div className="box">
                <img src={ShortenedIcon} alt="" />
                <h4 className="icon-title">Shortened</h4>
                <p className="icon-desc">
                  Use any link, no matter what size, ShortURL always shortens
                </p>
              </div>
              <div className="box">
                <img src={SecureIcon} alt="" />
                <h4 className="icon-title">Secure</h4>
                <p className="icon-desc">
                  It is fast and secure, our service has HTTPS protocol and data
                  encryption
                </p>
              </div>
              <div className="box">
                <img src={StatsIcon} alt="" />
                <h4 className="icon-title">Statistics</h4>
                <p className="icon-desc">
                  Check the number of clicks that your shortened URL received
                </p>
              </div>
              <div className="box">
                <img src={ReliableIcon} alt="" />
                <h4 className="icon-title">Reliable</h4>
                <p className="icon-desc">
                  All links that try to disseminate spam, viruses and malware
                  are deleted
                </p>
              </div>
              <div className="box">
                <img src={DevicesIcon} alt="" />
                <h4 className="icon-title">Devices</h4>
                <p className="icon-desc">
                  Compatible with smartphones, tablets and desktop
                </p>
              </div>
            </div>
          </div>
        )}

    </>
  );
};

export default HomePage;
