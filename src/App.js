import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Analytics from "./components/Analytics";
import ErrorPage from "./components/ErrorPage";
import ClickCounterPage from "./components/ClickCounter";

function App() {

  const [isShortened, setIsShortened] = useState(false);

  return (
    <div className={`App ${isShortened ? 'footer-hidden' : ''}`}>
      <Routes>

        <Route path="/" element={<HomePage isShortened={isShortened} setIsShortened={setIsShortened} />}></Route>
        <Route path="/analytics" element={<Analytics />}></Route>
        <Route path="/error" element={<ErrorPage />}></Route>
        <Route path="/click-counter" element={<ClickCounterPage />}></Route>
       
       </Routes>
       {!isShortened && <Footer />}
    </div>
  );
}

export default App;
