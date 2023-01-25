import React from "react";
import style from "../style.module.css";
import arrow from "../Vector arr.png";
import groupimg from "../Group 4.png";
import spiral from "../Vector (3).png";
import Box from "./Box";
import fir from "../Vector.png";
import fir1 from "../moneys d.png";
import fir2 from "../Vector d.png";
import fir3 from "../saveadd d.png";
import fir4 from "../cup.png";
import fir5 from "../vector b.png";

export default function Section1() {
  return (
    <div className={style.secBG}>
      <div className={style.secwidth}>
        <div className={style.secgrid}>
          <div>
            <img src={groupimg} />
          </div>
          <div className={style.secgrids}>
            <h2>The Smart Way to Save Together</h2>
            <p>
              Cosavers is an online cooperative method of savings, that gives
              low-income people affordable financial services and insurance. Our
              members join a community and make small savings contributions
              every week and when they have a group to save with, we give them a
              loan to activate.
            </p>
            <div className={style.secbtn}>
              <button>Learn More</button>
              <div className={style.arrowimg}>
                <img src={arrow} />
              </div>
            </div>
          </div>
        </div>
        <div className={style.align}>
          <h1>How it Works</h1>
          <div className={style.spira}>
            <img src={spiral} />
          </div>
          <div className={style.boxflex}>
            <Box
              image={fir}
              title="Community"
              text="Join a community to keep track of your savings and collect a loan when you reach a savings streak."
            />
            <Box
              image={fir1}
              title="Refer and Earn"
              text="Earn 250 Naira on each successful referral you invite to join your savings community."
            />
            <Box
              image={fir2}
              title="Track your Savings"
              text="Have access to your savings record anyday, anytime, anywhere. "
            />
            <Box
              image={fir3}
              title="Fixed Savings"
              text="Set your collection date and lock your savings until maturity date."
            />
            <Box
              image={fir4}
              title="Membership"
              text="Recieve membership bonus when you reach a certain saving streak."
            />
            <Box
              image={fir5}
              title="Instant Withdrawal"
              text="Transfer money into your wallet instantly when your savings reach maturity date."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
