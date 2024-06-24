import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#202020] h-[6vh] flex items-center">
      <nav className="flex items-center gap-28 px-[24px] py-2">
        <h2>Cap's click</h2>
        <ul className="flex gap-2">
          <li>
            <Link to="https://kwork.ru/user/timurr_coder" target="_blank">
              Kwork
            </Link>
          </li>
          <li>
            <Link to="https://github.com/timurrc" target="_blank">
              Git
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
