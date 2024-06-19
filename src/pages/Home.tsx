import React, { useEffect, useState } from "react";
import capybara from "../assets/Logo.svg";
import coin from "../assets/coin.svg";
import boost from "../assets/bost.svg";
import clock from "../assets/clock.svg";
import Footer from "../components/Footer";
const Home = () => {
  const [count, setCount] = useState(1100);
  const [isBoosted, setIsBoosted] = useState(false);
  const boosted = () => {
    if (count > 1000) {
      setIsBoosted(true);
      setCount(count - 1000);
    }
  };

  const handleIncrement = () => {
    if (isBoosted) {
      setCount(count + 20);
    } else {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="container">
        <div className="flex items-center flex-col gap-4 mb-12">
          <button
            className="capybara"
            value={count}
            onClick={(e) => setCount(count + 1)}
          >
            <img src={capybara} alt="" />
          </button>
          <div className="count flex gap-1 px-4 py-1 border rounded-md items-center">
            {count}
            <img src={coin} width="14" alt="" />
          </div>
        </div>
        <div className="">
          <h2 className="mb-3">Possibilities</h2>
          <div className="posib flex flex-col gap-3">
            <div className="fCard border rounded-md flex justify-between items-center px-3 py-2">
              <div className="flex items-center gap-2">
                <img src={boost} alt="" />
                <p>Boost</p>
              </div>
              <div className="flex items-center gap-1">
                <p>+ 1k</p>
                <img src={coin} alt="" />
              </div>
            </div>
            <div className="sCard border rounded-md flex justify-between items-center px-3 py-2">
              <div className="flex items-center gap-2">
                <img src={clock} alt="" />
                <p>Money per hour</p>
              </div>
              <div className="flex items-center gap-1">
                <p>+ 10</p>
                <img src={coin} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
