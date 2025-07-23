import React from "react";
import style from "./navbar.module.css";
import img from "../assets/logo1.png";
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const show = () => {
    setNav(true);
  };
  const hide = () => {
    setNav(false);
  };

  console.log(nav);

  return (
    <nav>
      {/* desktop view */}
      <div className={style.nav}>
        <div className={style.nav1}>
          <div className={style.img}>
            <img src={img} alt="" />
          </div>

          <ul className={style.links}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>

          <li>
            <a href="" id={style.link}>
              Hire us
            </a>
          </li>

          <div className={style.icon} onClick={show}>
            <RiMenu4Fill size={40} />
          </div>
        </div>
      </div>

      {/* mobile view */}

      <div className={style.menuIcon}>
        <div className={style.close} onClick={hide}>
          <IoMdClose size={40} />
        </div>
        <ul className={`${style.mobileLinks} ${nav ? style.show : style.hide}`}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li id={style.linkk}>
            <a href="">Hire us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
