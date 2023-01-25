import React from "react";
import style from "../style.module.css";
import phone from "../unsplash_3akQgJoowvI.png";

function Section2() {
  return (
    <div className={style.bg}>
      <div className={style.bgwid}>
        <div className={style.flexitems}>
          <div className={style.firstitem}>
            <img src={phone} />
          </div>
          <div className={style.seconditem}>
            <h2>How to start saving with us in 4 steps</h2>
            <div className={style.seco}>
              <div className={style.secoh4}>
                <h4>1</h4>
              </div>
              <div className={style.secosd}>
                <h3>Sign up</h3>
                <p>Sign up by using your email address and adding a password</p>
              </div>
            </div>

            <div className={style.seco}>
              <div className={style.secoh4}>
                <h4>2</h4>
              </div>
              <div className={style.secosd}>
                <h3>Join a community</h3>
                <p>Sign up by using your email address and adding a password</p>
              </div>
            </div>
            <div className={style.seco}>
              <div className={style.secoh4}>
                <h4>3</h4>
              </div>
              <div className={style.secosd}>
                <h3>Save</h3>
                <p>
                  Save your money using your bank account, debit card, USSD and
                  be relaxed
                </p>
              </div>
            </div>
            <div className={style.seco}>
              <div className={style.secoh4}>
                <h4>4</h4>
              </div>
              <div className={style.secosd}>
                <h3>Borrow/Withdraw</h3>
                <p>
                  Apply for loan when you reach a particular savings streak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
