import { useEffect, useState } from "react";
import power from "../Images/boost.svg";
import coin1 from "../Images/coin1.svg";
import coin2 from "../Images/coin2.svg";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { boostState, countState } from "../Recoil/atoms";
import styles from "../styles/Home.module.scss";
const Home = () => {
  const [count, setCount] = useRecoilState(countState);
  const [boost] = useRecoilState(boostState);

  const handleIncrement = () => {
    if (boost !== 0) {
      setCount(count + boost);
    } else {
      setCount(count + 1);
    }
  };

  const initialBonus = localStorage.getItem("bonus")
    ? Number(localStorage.getItem("bonus"))
    : 0;

  const [bonus, setBonus] = useState(initialBonus);

  useEffect(() => {
    // @ts-ignore-
    localStorage.setItem("bonus", bonus);
  }, [count, bonus]);

  useEffect(() => {
    const timer = setInterval(() => {
      setBonus(200);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleClaim = () => {
    setCount(count + bonus);
    return setBonus(0);
  };
  return (
    <div className="container">
      <section className={styles.total}>
        <b>Total</b>
        <div className={styles.totalCount}>
          <img src={coin1} width="18" alt="" />
          <p>{count}</p>
        </div>
      </section>
      <section className={styles.possibilities}>
        <button className={styles.Bonus} onClick={() => handleClaim()}>
          <img src={coin1} width="18" alt="" />
          <span>{bonus}</span>
          <p>Claim</p>
        </button>

        <Link to="/boost">
          <button className={styles.Boost}>
            <img src={power} width="16" alt="" />
            <p>Boost</p>
          </button>
        </Link>
      </section>
      <section className={styles.coinClick}>
        <button value={count} onClick={handleIncrement}>
          <img src={coin2} alt="" />
        </button>
      </section>
    </div>
  );
};

export default Home;
