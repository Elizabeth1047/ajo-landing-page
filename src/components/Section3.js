import React from "react";
import underL from "../Line 22.png";
import style from "../style.module.css";
import firstlady from "../Frame 25.png";
import seclady from "../Frame 25 (1).png";
import firstman from "../Frame 25 (2).png";
import desin1 from "../Ellipse 9.png";
import desin2 from "../Ellipse 10.png";
import Authors from "./Authors";

function Section3() {
  return (
    <div className={style.setion3BG}>
      <div className={style.sction3W}>
        <div className={style.headsectionsss}>
          <h2>What our members are saying</h2>
          <div>
            <img src={underL} />
          </div>
        </div>
        <div className={style.authorflex}>
          <Authors
            images={firstman}
            name="Tommy Brown"
            position="Lagos, Nigeria"
            paragraph="Collective is a great way to save money together, and it's also a fun social experience. You can create groups of friends, family, or co-workers and decide when you want to collect the money."
          />
          <Authors
            images={firstlady}
            name="Jane Kalpa"
            position="Lagos, Nigeria"
            paragraph="I am a member of several communities on Prosper and I really like it. I have been able to save more money than I would have otherwise. It is really nice to have that support from other people with similar goals in mind."
          />
          <Authors
            images={seclady}
            name="Kimberly Pald"
            position="Lagos, Nigeria"
            paragraph="I think it could be an awesome way to save money for a vacation, or just to save money in general. I love how easy the app is to use and how you can set up your savings plans easily. Plus, I love the friendly competition between myself and my friends."
          />
          <Authors
            images={firstman}
            name="Tommy Brown"
            position="Lagos, Nigeria"
            paragraph="Collective is a great way to save money together, and it's also a fun social experience. You can create groups of friends, family, or co-workers and decide when you want to collect the money."
          />
        </div>
        <div className={style.dotflex}>
          <span className={style.dots}></span>
          <span className={style.dot}></span>
          <span className={style.dot}></span>
          <span className={style.dot}></span>
        </div>
        <div className={style.design}>
          <div className={style.design1}>
            <img src={desin2} />
          </div>
          <div className={style.design2}>
            <img src={desin1} />
          </div>
          <div className={style.design3}>
            <h3>Safely and securely grow your savings</h3>
            <p>
              Open a savings account in 3 minutes on the app, invite friends to
              join a community, collect and spend money.
            </p>
            <div className={style.btn}>
              <button>Sign up now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
