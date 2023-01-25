import React from 'react'
import style from "../style.module.css";
import footerl from "../Name b.png";
import linkedin from "../ion_logo-linkedin.png";
import twitter from "../Vector (1).png";
import facebook from "../Vector (2).png";
import appstore from "../Group.png";
import instagram from "../Vector a.png";
import google from "../Google_Play_Store_badge_EN 1.png";


function Footer() {
  return (
    <div className={style.footerBg}>
      <div className={style.footerwidth}>
        <div className={style.footerflexcontainer}>
          <div className={style.footercol1}>
            <div className={style.footerlogo}>
              <img src={footerl} />
            </div>
            <p>Follow us</p>
            <div className={style.footersocials}>
              <div>
                <img src={facebook} />
              </div>
              <div>
                <img src={twitter} />
              </div>
              <div>
                <img src={instagram} />
              </div>
              <div>
                <img src={linkedin} />
              </div>
            </div>
          </div>
          <div className={style.footercol2}>
            <div>
              <h3>Features</h3>
              <p>Learn</p>
              <p>Mobile app</p>
              <p>Get Update</p>
              <p>How to Save</p>
            </div>
            <div>
              <h3>Company</h3>
              <p>News & Blogs</p>
              <p>About Us</p>
              <p>Career</p>
              <p>FAQ</p>
            </div>
            <div>
              <h3>Resources</h3>
              <p>Customer support</p>
              <p>Contact Us</p>
              <p>Live Chat</p>
            </div>
          </div>
          <div className={style.footercol3}>
            <h3>Mobile Apps</h3>
            <div>
              <img src={appstore} />
            </div>
            <div>
              <img src={google} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer