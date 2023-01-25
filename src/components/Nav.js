import React from "react";
import CoSavers from "../CoSavers.png";
import logoa from "../Name.png";
import hambu from "../hamb.png";
import style from "../style.module.css";

function Nav({ setshowhambuger, showhambuger }) {
  function handleclick() {
    setshowhambuger(!showhambuger);
  }
  return (
    <div className={style.navwidth}>
      <div className={style.navflex}>
        <div className={style.logosb}>
          <img src={logoa} />
        </div>
        <div className={style.navsmobi}>
          <div className={style.navlist}>
            <p>Home</p>
            <p>About Us</p>
            <p>Features</p>
            <p>Testimonials</p>
          </div>
          <div className={style.btn}>
            <button>Join a Community</button>
          </div>
        </div>
        <div className={style.mobileham}>
          <img src={hambu} onClick={handleclick} />
        </div>
      </div>
    </div>
  );
}

export default Nav;
