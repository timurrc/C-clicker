import { Link, Outlet } from "react-router-dom";
import Home from "../Images/Home.svg";
import styles from "../styles/Navigation.module.scss";
const Navigation = () => {
  return (
    <>
      <nav className={styles.Navigation}>
        <Link to="/">
          <img src={Home} width="24" alt="" />
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
