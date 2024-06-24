import { useEffect, useState } from "react";
import capybara from "../assets/Logo.svg";
import coin from "../assets/coin.svg";
import boostImg from "../assets/bost.svg";
import clock from "../assets/clock.svg";
import Footer from "../components/Footer";
import cap from "../assets/cap.png";
// Прикрутить уведомления React toasts
const Home = () => {
  const [count, setCount] = useState(22990);
  const [isBoosted, setIsBoosted] = useState(false);

  const Boosts = [
    {
      perClick: 10,
      price: 1000,
    },
    {
      perClick: 20,
      price: 10000,
    },
    {
      perClick: 100,
      price: 30000,
    },
  ];

  const [currentBoost, setCurrentBoost] = useState(Boosts[0].perClick);
  const [currentBoostPrice, setCurrentBoostPrice] = useState(Boosts[0].price);

  const buyBoost = () => {
    if (count >= currentBoostPrice) {
      setCount((prevCount) => prevCount - currentBoostPrice);
      const nextBoost =
        Boosts[Boosts.findIndex((b) => b.perClick === currentBoost) + 1];
      if (nextBoost) {
        setIsBoosted(true);
        setCurrentBoost(nextBoost.perClick);
        setCurrentBoostPrice(nextBoost.price);
      }
    }
  };

  const handleBoost = () => {
    for (let index = 0; index < Boosts.length; index++) {
      if (currentBoost == Boosts[index].perClick) {
        setCount(count + Boosts[index].perClick);
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="flex items-center flex-col gap-4 mb-12">
          <button className="capybara" onClick={handleBoost}>
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
            <button
              className={`fCard border rounded-md flex justify-between items-center px-3 py-2 ${
                count >= 10000 ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              style={{ opacity: count >= currentBoostPrice ? 1 : 0.4 }}
              onClick={buyBoost}
            >
              <div className="flex items-center gap-2">
                <img src={boostImg} alt="" />
                <p>Boost</p>
              </div>
              <div className="flex items-center gap-1">
                <p> - {currentBoostPrice}</p>
                <img src={coin} alt="" />
              </div>
            </button>
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
