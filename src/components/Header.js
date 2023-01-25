import React from 'react'
import style from "../style.module.css"; 
import arrow from "../Vector arr.png";
import arrowb from "../Vector arrb.png";
import img1 from "../Rectangle 2.png";
import img2 from "../Rectangle 3.png";
import img3 from "../Rectangle 1.png";
import img4 from "../unsplash_sBbm92cRIQo.png";

function Header() {
  return (
    <div className={style.headerBG}>
      <div className={style.navwidths}>
        <div className={style.headertext}>
          <h1 className={style.headerhead}>
            Group Savings Made Easy. Grow your Wealth!
          </h1>
          <p>
            A simple and easy way to save money. Join a community and save in
            your local currency. Pick a date and we will set you up to collect
            on that day.
          </p>
          <div className={style.btnflex}>
            <div className={style.headerbtn}>
              <button>Start Saving</button>
              <div className={style.arrowimg}>
                <img src={arrow} />
              </div>
            </div>

            <div className={style.headerbtn2}>
              <button>Learn More</button>
              <div className={style.arrowimg}>
                <img src={arrowb} />
              </div>
            </div>
          </div>
          <div>
            <p>
              <span className={style.thousad}>100,000</span>+
            </p>
            <p>Community Members</p>
          </div>
        </div>
        <div className={style.imagess}>
          <div className={style.z1}>
            <img src={img1} />
          </div>

          <div className={style.z2}>
            <img src={img2} />
          </div>

          <div className={style.z3}>
            <img src={img3} />
          </div>

          <div className={style.z4}>
            <img src={img4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header