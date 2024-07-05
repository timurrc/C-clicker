import { useRecoilState } from "recoil";
import { boostState, countState } from "../Recoil/atoms";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import coin1 from "../Images/coin1.svg";
import styles from "../styles/Boost.module.scss";
const Boost: React.FC = () => {
  const [count, setCount] = useRecoilState(countState);
  const [boost, setBoost] = useRecoilState(boostState);
  const notify = () => toast("Successful purchase");
  const handleBoostClick = (boostAmount: number) => {
    const cost = boostAmount === 10 ? 100 : 200;
    setCount((prevCount) => prevCount - cost);
    setBoost(boost + boostAmount);
    notify();
  };
  return (
    <>
      <section className={styles.Boosts}>
        <b>Boosts</b>
        <button
          className={styles.boostBtn}
          onClick={() => handleBoostClick(10)}
        >
          <img src={coin1} width="24" alt="" />
          <p>+10 TAP</p>
        </button>
        <button
          className={styles.boostBtn}
          onClick={() => handleBoostClick(20)}
        >
          <img src={coin1} width="24" alt="" />
          <p>+20 TAP</p>
        </button>
      </section>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="white"
      />
    </>
  );
};

export default Boost;
